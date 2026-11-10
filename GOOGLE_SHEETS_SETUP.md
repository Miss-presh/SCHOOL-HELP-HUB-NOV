# Google Sheets Booking Form — Setup Guide

Both website forms save to one Google Sheet through a Google Apps Script web app:

- the **booking form** on the homepage (`/api/book-trial`)
- the **contact form** on `/contact` (`/api/contact`)

The **Source** column tells you which form each row came from. No extra npm packages are needed.

> The web app link does not expire. It stops working only if the deployment is archived
> or deleted, the script or sheet is deleted, or the owning Google account loses access.
> If the site shows "Failed to save booking", open the link in a browser: a Google
> "Page not found" means the link is dead and you need a new one (Step 3).

---

## Step 1 — Create the Google Sheet

1. Sign in to the Google account that should own the bookings (ideally a shared business account, not a personal one).
2. Go to **sheets.google.com** and create a blank spreadsheet. Name it e.g. **Schoolhelphub Bookings**.

You don't need to add a tab or headers: the script creates the **Enquiries** tab and its header row on the first submission.

---

## Step 2 — Add the Apps Script

1. In the sheet, click **Extensions → Apps Script**.
2. Delete everything in `Code.gs` and paste:

```javascript
// Schoolhelphub website → Google Sheet
// Optional: put an email address here to get an alert for every new submission.
var NOTIFY_EMAIL = ""; // e.g. "hello@schoolhelphub.com"

var HEADERS = [
  "Submitted At", "Source", "Parent Name", "Email", "Phone",
  "Year Group", "Subjects", "Country", "Message",
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Enquiries") || ss.insertSheet("Enquiries");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var source = data.source === "contact-form" ? "Contact form" : "Booking form";

    getSheet_().appendRow([
      data.submittedAt || new Date().toISOString(),
      source,
      data.parentName || "",
      data.email || "",
      data.phone || "",
      data.childAge || "",   // year group, e.g. "Year 5"
      data.subject || "",    // booking form: subjects joined, e.g. "Maths, English"
      data.country || "",
      data.message || "",
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: "New Schoolhelphub " + source.toLowerCase() + ": " + (data.parentName || ""),
        body: [
          "Name: " + (data.parentName || ""),
          "Email: " + (data.email || ""),
          "Phone: " + (data.phone || ""),
          "Year group: " + (data.childAge || ""),
          "Subjects: " + (data.subject || ""),
          "Country: " + (data.country || ""),
          "Message: " + (data.message || ""),
        ].join("\n"),
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

Submit the booking form. Within a few seconds a row should appear in the **Enquiries** tab.
If it doesn't:

1. Browser **Network** tab → the `/api/book-trial` request should return `{ "success": true }`.
   - `502` with "Failed to save booking" → open the webhook URL in a browser. "Page not found" = dead link (redo Step 3); a Google login page = access isn't set to **Anyone**.
2. Server logs show `[book-trial]` messages with the reason.
3. If `GOOGLE_SHEETS_WEBHOOK_URL` is missing, the site still says "success" but only logs the booking on the server — always set it on Vercel.
