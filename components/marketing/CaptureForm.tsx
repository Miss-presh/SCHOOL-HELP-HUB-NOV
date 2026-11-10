"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { useState, useEffect, useMemo, useRef } from "react";
import { Country } from "country-state-city";
import { Check } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const YEAR_OPTIONS = Array.from({ length: 11 }, (_, i) => `Year ${i + 1}`);

const SUBJECT_OPTIONS = [
  "Maths",
  "English",
  "Science",
  "Coding",
  "Yoruba",
  "French",
  "11+",
  "GCSE",
  "WAEC/BECE/NECO",
  "SAT/ACT",
  "Not sure yet",
];

const priorityCountries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Nigeria",
  "United Arab Emirates",
];

const WHATSAPP_LINK =
  whatsappLink("Hi Schoolhelphub, I'd like to book a free assessment for my child.");

const emptyForm = {
  parentName: "",
  email: "",
  phone: "",
  yearGroup: "",
  subjects: [] as string[],
  country: "",
  message: "",
};

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z" />
    </svg>
  );
}

export default function CaptureForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(emptyForm);

  const countries = useMemo(() => Country.getAllCountries(), []);
  const [showCountries, setShowCountries] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);

  const query = form.country.toLowerCase();
  const filteredCountries = [
    ...priorityCountries
      .map((n) => countries.find((c) => c.name === n))
      .filter((c): c is NonNullable<typeof c> => !!c && c.name.toLowerCase().includes(query)),
    ...countries.filter(
      (c) => !priorityCountries.includes(c.name) && c.name.toLowerCase().includes(query)
    ),
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setShowCountries(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const set =
    (field: "parentName" | "email" | "phone" | "yearGroup" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const toggleSubject = (s: string) =>
    setForm((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(s)
        ? prev.subjects.filter((x) => x !== s)
        : [...prev.subjects, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      setState("error");
      setErrorMsg("Please enter a valid phone number (e.g. +234 704 352 3556 or 0704 352 3556).");
      return;
    }
    if (form.subjects.length === 0) {
      setState("error");
      setErrorMsg("Please choose at least one subject (or “Not sure yet”).");
      return;
    }
    if (!form.country.trim()) {
      setState("error");
      setErrorMsg("Please enter your country of residence.");
      return;
    }

    setState("loading");

    try {
      // Field names match the existing Google Sheet columns (childAge, subject).
      const res = await fetch("/api/book-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: form.parentName,
          email: form.email,
          phone: form.phone,
          childAge: form.yearGroup,
          subject: form.subjects.join(", "),
          country: form.country,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setState("success");
      setForm(emptyForm);
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp.");
    }
  };

  return (
    <section id="book" className="scroll-mt-20 py-20 lg:py-28 bg-brand-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">

        {/* Left: heading + WhatsApp alternative */}
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            Free assessment
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
            Book your child&apos;s free assessment
          </h2>
          <p className="mt-5 text-lg text-brand-mutedSage leading-8">
            45 minutes with a qualified tutor and a written report afterwards. No payment,
            no commitment.
          </p>

          <div className="mt-8 rounded-2xl bg-white border border-brand-lightGreen p-5">
            <p className="font-semibold text-brand-deepGreen">Prefer to chat first?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3 min-h-11 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <WhatsAppIcon />
              Message us on WhatsApp
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white rounded-3xl border border-brand-lightGreen shadow-xl shadow-brand-green/5 p-6 sm:p-10">
          {state === "success" ? (
            <div className="py-12 text-center space-y-4" role="status">
              <div className="w-16 h-16 bg-brand-lightGreen rounded-full flex items-center justify-center mx-auto">
                <Check size={32} className="text-brand-green" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-deepGreen">Booking received!</h3>
              <p className="text-brand-mutedSage max-w-xs mx-auto leading-relaxed">
                We&apos;ll reply within 24 hours to confirm your assessment slot.
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="min-h-11 text-brand-green font-bold hover:underline"
              >
                Submit another enquiry →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Parent's name" htmlFor="parentName">
                  <input id="parentName" required type="text" autoComplete="name" placeholder="e.g. Temi Adeleke" value={form.parentName} onChange={set("parentName")} className={inputClass} />
                </Field>
                <Field label="Email address" htmlFor="email">
                  <input id="email" required type="email" autoComplete="email" placeholder="you@email.com" value={form.email} onChange={set("email")} className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone / WhatsApp" htmlFor="phone">
                  <input id="phone" required type="tel" autoComplete="tel" placeholder="+234 704 352 3556" value={form.phone} onChange={set("phone")} maxLength={16} className={inputClass} />
                </Field>
                <Field label="Child's year group" htmlFor="yearGroup">
                  <select id="yearGroup" required value={form.yearGroup} onChange={set("yearGroup")} className={inputClass}>
                    <option value="">Select year group…</option>
                    {YEAR_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <fieldset>
                <legend className={labelClass}>
                  Subject <span className="normal-case tracking-normal font-medium text-brand-mutedSage">(choose all that apply)</span>
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SUBJECT_OPTIONS.map((s) => {
                    const checked = form.subjects.includes(s);
                    return (
                      <label
                        key={s}
                        className={`cursor-pointer select-none inline-flex items-center gap-1.5 min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-green ${
                          checked
                            ? "bg-brand-green border-brand-green text-white"
                            : "bg-brand-faintGreen border-brand-lightGreen text-brand-deepGreen hover:border-brand-green/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleSubject(s)}
                        />
                        {checked && <Check size={14} aria-hidden="true" />}
                        {s}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div ref={countryRef} className="relative">
                <Field label="Country of residence" htmlFor="country">
                  <input
                    id="country"
                    type="text"
                    required
                    autoComplete="off"
                    role="combobox"
                    aria-expanded={showCountries}
                    aria-controls="country-list"
                    value={form.country}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, country: e.target.value }));
                      setShowCountries(true);
                    }}
                    onFocus={() => setShowCountries(true)}
                    onKeyDown={(e) => e.key === "Escape" && setShowCountries(false)}
                    placeholder="Search your country…"
                    className={inputClass}
                  />
                </Field>
                {showCountries && (
                  <ul
                    id="country-list"
                    role="listbox"
                    className="absolute z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-brand-lightGreen bg-white shadow-2xl"
                  >
                    {filteredCountries.map((country) => (
                      <li key={country.isoCode} role="option" aria-selected={form.country === country.name}>
                        <button
                          type="button"
                          onClick={() => {
                            setForm((prev) => ({ ...prev, country: country.name }));
                            setShowCountries(false);
                          }}
                          className="flex w-full items-center gap-2 min-h-11 px-4 text-left hover:bg-brand-faintGreen transition-colors"
                        >
                          <span aria-hidden="true">{country.flag}</span>
                          {country.name}
                        </button>
                      </li>
                    ))}
                    {filteredCountries.length === 0 && (
                      <li className="px-4 py-3 text-brand-mutedSage">No country found.</li>
                    )}
                  </ul>
                )}
              </div>

              <Field label="Anything we should know? (optional)" htmlFor="message">
                <textarea id="message" placeholder="e.g. exam in March, specific topics, any learning needs…" value={form.message} onChange={set("message")} rows={3} className={inputClass} />
              </Field>

              {state === "error" && (
                <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full min-h-14 bg-brand-yellow hover:bg-brand-deepYellow disabled:opacity-60 text-black font-bold rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md text-base"
              >
                {state === "loading" ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" aria-label="Sending" />
                ) : (
                  "Book My Free Assessment"
                )}
              </button>

              <p className="text-center text-sm text-brand-mutedSage">We reply within 24 hours</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const labelClass = "text-xs font-bold uppercase tracking-widest text-brand-green";

const inputClass =
  "w-full min-h-12 bg-brand-faintGreen border border-brand-lightGreen px-4 py-3 rounded-xl text-base text-brand-textNearBlack placeholder:text-brand-mutedSage/60 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/15 transition-colors";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
