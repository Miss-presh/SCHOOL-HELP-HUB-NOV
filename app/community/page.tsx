import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles, Calendar, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Join Our WhatsApp Community | Schoolhelphub",
  description:
    "Join the Schoolhelphub parent community on WhatsApp for free study tips, exam alerts and direct access to our tutors.",
};

// TODO: replace once the client shares the real invite link (falls back to a placeholder for now)
const WHATSAPP_COMMUNITY_LINK =
  process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_LINK || "https://chat.whatsapp.com/REPLACE_ME";

const perks = [
  {
    icon: BookOpen,
    title: "Free study tips",
    desc: "Bite-sized revision strategies shared by our tutors every week.",
  },
  {
    icon: Calendar,
    title: "Exam prep alerts",
    desc: "Timely reminders for WAEC, GCSE, 11+ and SAT key dates.",
  },
  {
    icon: Users,
    title: "Parent-to-parent support",
    desc: "Swap notes and encouragement with other Schoolhelphub families.",
  },
  {
    icon: Sparkles,
    title: "Live Q&A access",
    desc: "First to hear about free assessments, workshops and offers.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-textNearBlack">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center font-bold text-brand-deepGreen">
              S
            </div>
            <span className="font-serif text-2xl font-bold text-brand-deepGreen">
              School<span className="text-brand-midGreen font-light">help</span>hub
            </span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="relative min-h-[520px] flex items-center">
            <div className="absolute inset-0">
              <Image src="/hub2.jpg" alt="Schoolhelphub family" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-deepGreen/90 via-brand-deepGreen/75 to-brand-deepGreen/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm">
                  <MessageCircle size={16} className="text-brand-yellow" />
                  Free to join
                </div>

                <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Join Our
                  <span className="block text-brand-yellow">WhatsApp Community</span>
                </h1>

                <p className="mt-6 text-lg text-white/90 leading-8 max-w-xl">
                  A free space for Schoolhelphub parents to get study tips, exam
                  reminders and direct updates from our tutors &mdash; all in one place.
                </p>

                <div className="mt-10">
                  <a
                    href={WHATSAPP_COMMUNITY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] hover:scale-105 transition-all duration-300 text-white rounded-xl px-8 py-4 font-semibold shadow-xl tap-target"
                  >
                    <MessageCircle size={22} />
                    Join The Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-deepGreen">
              What you&apos;ll get
            </h2>
            <p className="mt-4 text-brand-mutedSage leading-7">
              One tap and you&apos;re in no forms, no spam, just useful support for your
              child&apos;s learning journey.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm-brand border border-brand-lightGreen"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-lightGreen flex items-center justify-center text-brand-deepGreen">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-semibold text-brand-deepGreen">{title}</h3>
                <p className="mt-2 text-sm text-brand-mutedSage leading-6">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] hover:scale-105 transition-all duration-300 text-white rounded-xl px-8 py-4 font-semibold shadow-xl tap-target"
            >
              <MessageCircle size={22} />
              Join The Community
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-deepGreen text-brand-lightGreen py-10 border-t-2 border-brand-green">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-brand-mutedSage">
          <p>© {new Date().getFullYear()} Schoolhelphub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
