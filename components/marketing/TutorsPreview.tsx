import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * TODO (client): replace these placeholders with real, consented tutor details.
 * Add `photo: "/tutors/<file>.jpg"` (put the image in /public/tutors) to show a
 * photo; without one, the card shows the tutor's initials.
 */
type Tutor = { name: string; subject: string; credential: string; photo?: string };

const tutors: Tutor[] = [
  { name: "Tutor Name", subject: "Maths", credential: "Qualified teacher, 8 years teaching GCSE Maths" },
  { name: "Tutor Name", subject: "English", credential: "One-line credential to be confirmed" },
  { name: "Tutor Name", subject: "Science", credential: "One-line credential to be confirmed" },
  { name: "Tutor Name", subject: "11+ & SATs", credential: "One-line credential to be confirmed" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export default function TutorsPreview() {
  return (
    <section id="tutors" className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            Our tutors
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl font-bold text-brand-deepGreen leading-tight">
            Meet your child&apos;s tutors
          </h2>
          <p className="mt-5 text-lg text-brand-mutedSage">
            Qualified, vetted and subject-specialist.
          </p>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((t, i) => (
            <li
              key={`${t.subject}-${i}`}
              className="rounded-3xl border border-brand-lightGreen bg-brand-faintGreen p-6 text-center"
            >
              <div className="relative mx-auto w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-brand-green to-brand-midGreen ring-4 ring-white shadow-md flex items-center justify-center">
                {t.photo ? (
                  <Image src={t.photo} alt={t.name} fill sizes="112px" className="object-cover" />
                ) : (
                  <span className="font-serif text-3xl font-bold text-white" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-serif text-2xl font-bold text-brand-deepGreen">{t.name}</h3>
              <p className="mt-1 inline-block rounded-full bg-brand-lightGreen px-3 py-1 text-sm font-semibold text-brand-green">
                {t.subject}
              </p>
              <p className="mt-3 text-sm text-brand-mutedSage leading-6">{t.credential}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/tutors"
            className="group inline-flex items-center gap-2 min-h-11 font-semibold text-brand-green hover:text-brand-midGreen"
          >
            Meet all our tutors
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
