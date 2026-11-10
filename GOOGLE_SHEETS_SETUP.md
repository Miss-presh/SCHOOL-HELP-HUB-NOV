# Google Sheets Booking Form — Setup Guide

Both website forms save to one Google Sheet through a Google Apps Script web app:

- the **booking form** on the homepage (`/api/book-trial`)
- the **contact form** on `/contact` (`/api/contact`)

Bookings land in the **Bookings** tab and contact messages in the **Contact Messages** tab.
Both tabs and their headers are created automatically. No extra npm packages are needed.

> The web app link does not expire. It stops working only if the deployment is archived
> or deleted, the script or sheet is deleted, or the owning Google account loses access.
> If the site shows "Failed to save booking", open the link in a browser: a Google
> "Page not found" means the link is dead and you need a new one (Step 3).

---

## Step 1 — Create the Google Sheet

1. Sign in to the Google account that should own the bookings (ideally a shared business account, not a personal one).
2. Go to **sheets.google.com** and create a blank spreadsheet. Name it e.g. **Schoolhelphub Bookings**.

You don't need to add tabs or headers: the script creates the **Bookings** and **Contact Messages** tabs and their header rows on the first submission of each.

---

## Step 2 — Add the Apps Script

1. In the sheet, click **Extensions → Apps Script**.
2. Delete everything in `Code.gs` and paste:

```javascript
// Schoolhelphub website → Google Sheet
// Bookings and contact messages go to separate tabs (created automatically).
// Optional: put an email address here to get an alert for every new submission.
var NOTIFY_EMAIL = ""; // e.g. "hello@schoolhelphub.com"

var TABS = {
  booking: {
    name: "Bookings",
    headers: ["Submitted At", "Parent Name", "Email", "Phone", "Year Group", "Subjects", "Country", "Message"],
    row: function (d) { return [d.parentName, d.email, d.phone, d.childAge, d.subject, d.country, d.message]; },
  },
  contact: {
    name: "Contact Messages",
    headers: ["Submitted At", "Name", "Email", "Subject", "Message"],
    row: function (d) { return [d.parentName, d.email, d.subject, d.message]; },
  },
};

function getTab_(tab) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(tab.name) || ss.insertSheet(tab.name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(tab.headers);
    sheet.getRange(1, 1, 1, tab.headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    // Store every column except the date as plain text (keeps "+234…" and leading zeros intact).
    sheet.getRange(2, 2, sheet.getMaxRows() - 1, tab.headers.length - 1).setNumberFormat("@");
  }
  return sheet;
}

// Visitor text is saved as plain text, never as a formula (blocks "=…" formula injection).
function text_(v) {
  var s = v == null ? "" : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var isContact = data.source === "contact-form";
    var tab = isContact ? TABS.contact : TABS.booking;
    var submitted = data.submittedAt ? new Date(data.submittedAt) : new Date();

    getTab_(tab).appendRow([submitted].concat(tab.row(data).map(text_)));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: (isContact ? "New contact message: " : "New booking: ") + (data.parentName || ""),
        body: tab.headers.slice(1).map(function (h, i) {
          return h + ": " + (tab.row(data)[i] || "");
        }).join("\n"),
      });
    }

    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err && err.message || err) });
  }
}

// Lets you check the link in a browser: a working link shows {"ok":true}.
function doGet() {
  return json_({ ok: true, service: "schoolhelphub-forms" });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (Ctrl+S).

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Set:
   - **Description**: Schoolhelphub forms
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** (on some accounts: "Anyone, even anonymous").
     Any narrower option makes Google demand a login and nothing gets saved.
4. Click **Deploy**, then **Authorize access** and allow the permissions
   (Google may say the app is unverified: **Advanced → Go to … (unsafe)** — it's your own script).
5. Copy the **Web app URL** (ends in `/exec`). Open it in a browser: you should see `{"ok":true,...}`.

**Changing the script later:** use **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**.
This keeps the same URL. "New deployment" creates a *new* URL and the site keeps using the old one.

---

## Step 4 — Give the URL to the website

1. **Local:** in `.env` set
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
   ```
   then restart `npm run dev`.
2. **Vercel:** Project → **Settings → Environment Variables** → set `GOOGLE_SHEETS_WEBHOOK_URL`
   to the same URL → **Deployments → ⋯ → Redeploy** (env changes apply only after a redeploy).

---

## Testing

Submit the booking form. Within a few seconds a row should appear in the **Bookings** tab
(contact form submissions go to **Contact Messages**).
If it doesn't:

1. Browser **Network** tab → the `/api/book-trial` request should return `{ "success": true }`.
   - `502` with "Failed to save booking" → open the webhook URL in a browser. "Page not found" = dead link (redo Step 3); a Google login page = access isn't set to **Anyone**.
2. Server logs show `[book-trial]` messages with the reason.
3. If `GOOGLE_SHEETS_WEBHOOK_URL` is missing, the site still says "success" but only logs the booking on the server — always set it on Vercel.
