import { whatsappLink } from "@/lib/whatsapp";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  UserRound,
  MessageCircle,
  CalendarClock,
} from "lucide-react";
import { programmeStages } from "@/components/marketing/programmesData";

export const metadata: Metadata = {
  title: "Programmes | Small-Group Classes & One-to-One Tuition | Schoolhelphub",
  description:
    "Live online small-group classes (max 6) and one-to-one tuition for children aged 4–16 in Maths, English, Science, 11+, SATs, GCSE, IGCSE, WAEC and more.",
};

const WHATSAPP_LINK =
  whatsappLink("Hi Schoolhelphub, I'd like help choosing a programme for my child.");

const groupPlans = [
  {
    name: "Group Primary",
    age: "Year 2–8 · Ages 6–13",
    priceGBP: "£35",
    priceNGN: "₦60,000",
    schedule: "16+ hours/month · Mon–Thurs",
    description:
      "Build strong foundations in Maths, English, Science and more in a small, supportive class.",
  },
  {
    name: "Group GCSE",
    age: "Year 9–11 · Ages 13–16",
    priceGBP: "£40",
    priceNGN: "₦80,000",
    schedule: "20+ hours/month · Mon–Fri",
    description:
      "Year-specific GCSE, IGCSE and WAEC preparation with mock exam sessions and past-paper practice.",
  },
];

const groupFeatures = [
  "Maximum six students per class",
  "Live, interactive online lessons",
  "Learn alongside peers at a similar level",
  "Written lesson feedback for parents",
  "Morning, afternoon and evening timetables",
];

const oneToOneFeatures = [
  "A dedicated, qualified tutor",
  "A lesson plan built around your child's pace and goals",
  "Any subject, including 11+, SATs, GCSE, IGCSE and WAEC",
  "A schedule that fits your family, in any time zone",
  "Detailed written feedback after lessons",
];

const comparison = [
  { label: "Class size", group: "Up to 6 students", one: "Just your child" },
  { label: "Pace", group: "Set by the class level", one: "Set by your child" },
  { label: "Schedule", group: "Fixed weekly timetable", one: "Fully flexible" },
  { label: "Lesson feedback", group: "Yes", one: "Yes" },
  { label: "From", group: "£35 / ₦60,000 per month", one: "£60 / ₦120,000 per month" },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((f) => (
        <li key={f} className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-brand-lightGreen flex items-center justify-center">
            <Check size={14} className="text-brand-green" aria-hidden="true" />
          </span>
          <span className="text-brand-textNearBlack/80 leading-7">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProgrammesPage() {
  return (
    <div className="bg-white text-brand-textNearBlack">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-brand-deepGreen via-brand-green to-brand-midGreen text-white px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-yellow">
            Our Programmes
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-3xl">
            Two ways to learn.
            <span className="block text-brand-yellow">One goal: real progress.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-8 max-w-2xl">
            Choose small-group classes or one-to-one tuition. Both are taught live by
            experienced tutors, for children aged 4–16.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
            <a
              href="#small-group"
              className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 p-5 transition-colors"
            >
              <Users size={28} className="text-brand-yellow flex-shrink-0" aria-hidden="true" />
              <span className="flex-grow">
                <span className="block font-bold text-lg">Small-Group Classes</span>
                <span className="block text-sm text-white/75">Maximum six students</span>
              </span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#one-to-one"
              className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 p-5 transition-colors"
            >
              <UserRound size={28} className="text-brand-yellow flex-shrink-0" aria-hidden="true" />
              <span className="flex-grow">
                <span className="block font-bold text-lg">One-to-One Tuition</span>
                <span className="block text-sm text-white/75">A dedicated personal tutor</span>
              </span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Small-Group Classes ── */}
      <section id="small-group" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-lightGreen flex items-center justify-center">
              <Users size={28} className="text-brand-deepGreen" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              Small-Group Classes
            </h2>
            <p className="mt-4 text-lg text-brand-mutedSage leading-8">
              Maximum six students. Interactive, social and great value. Your child gets
              real attention from the tutor while learning and growing alongside peers.
            </p>
            <div className="mt-8">
              <FeatureList items={groupFeatures} />
            </div>
          </div>

          <div className="space-y-5">
            {groupPlans.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-brand-lightGreen bg-brand-faintGreen p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-brand-deepGreen">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-green">{p.age}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-bold text-brand-deepGreen">{p.priceGBP}</p>
                    <p className="text-sm text-brand-mutedSage">{p.priceNGN} / month</p>
                  </div>
                </div>
                <p className="mt-4 text-brand-mutedSage leading-7">{p.description}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-deepGreen">
                  <CalendarClock size={16} aria-hidden="true" />
                  {p.schedule}
                </p>
              </div>
            ))}
            <Link
              href="/#book"
              className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-7 py-4 rounded-xl shadow-md transition-colors"
            >
              Book a Free Assessment
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── One-to-One Tuition ── */}
      <section id="one-to-one" className="scroll-mt-24 bg-brand-faintGreen px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-yellow/25 flex items-center justify-center">
              <UserRound size={28} className="text-brand-deepGreen" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              One-to-One Tuition
            </h2>
            <p className="mt-4 text-lg text-brand-mutedSage leading-8">
              A dedicated tutor and a plan built around your child&apos;s pace and goals.
              Ideal for closing specific gaps, stretching high achievers or focused exam
              preparation.
            </p>
            <div className="mt-8">
              <FeatureList items={oneToOneFeatures} />
            </div>
          </div>

          <div className="rounded-3xl bg-brand-deepGreen text-white p-8 lg:p-10 shadow-lg-brand">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-yellow">1-on-1 Elite</p>
            <p className="mt-2 text-sm text-white/75">All ages · 4–16 years</p>
            <p className="mt-6 font-serif text-5xl font-bold">
              £60
              <span className="text-lg font-sans font-normal text-white/70"> / month</span>
            </p>
            <p className="text-white/75">₦120,000 per month</p>
            <p className="mt-6 text-white/85 leading-7">
              Your child is matched with a tutor suited to their needs, schedule and learning
              style, with a fully personalised lesson plan.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <CalendarClock size={16} aria-hidden="true" />
              Custom schedule · Any subject
            </p>
            <div className="mt-8">
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-7 py-4 rounded-xl transition-colors"
              >
                Book a Free Assessment
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-deepGreen text-center">
            Not sure which to choose?
          </h2>
          <p className="mt-4 text-center text-lg text-brand-mutedSage">
            Here&apos;s how the two options compare. The free assessment will also help us
            recommend the right fit.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-brand-lightGreen">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-brand-lightGreen text-brand-deepGreen">
                <tr>
                  <th scope="col" className="p-4 sm:p-5 font-semibold w-1/3"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="p-4 sm:p-5 font-bold">Small-Group</th>
                  <th scope="col" className="p-4 sm:p-5 font-bold">One-to-One</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-lightGreen">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-brand-deepGreen">{row.label}</th>
                    <td className="p-4 sm:p-5 text-brand-mutedSage">{row.group}</td>
                    <td className="p-4 sm:p-5 text-brand-mutedSage">{row.one}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Learning stages ── */}
      <section id="stages" className="scroll-mt-24 bg-brand-faintGreen px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
              Learning pathways
            </p>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              Support for every stage
            </h2>
            <p className="mt-4 text-lg text-brand-mutedSage">
              Every pathway is available as small-group classes or one-to-one tuition.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {programmeStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title} className="rounded-3xl bg-white border border-brand-lightGreen p-7 lg:p-8">
                  <div className={`w-14 h-14 rounded-2xl ${stage.iconBg} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-brand-deepGreen" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xs font-bold tracking-widest uppercase text-brand-midGreen">
                    {stage.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-brand-deepGreen">{stage.title}</h3>
                  <p className="mt-3 text-brand-mutedSage leading-7">{stage.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {stage.subjects.map((s) => (
                      <li key={s} className="rounded-full bg-brand-lightGreen text-brand-green text-sm font-semibold px-4 py-1.5">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center rounded-[36px] bg-gradient-to-br from-brand-deepGreen to-brand-green text-white px-6 py-14 sm:px-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Find the right fit for your child
          </h2>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
            Start with a free assessment and we&apos;ll recommend the right group or
            one-to-one programme.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#book"
              className="bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-8 py-4 rounded-xl shadow-xl transition-colors"
            >
              Book a Free Assessment
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 bg-white/10 hover:bg-white/20 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
