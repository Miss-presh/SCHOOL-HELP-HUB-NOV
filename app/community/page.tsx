import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Join Our WhatsApp Community | Schoolhelphub",
  description:
    "Join the Schoolhelphub parent community on WhatsApp for free study tips, exam alerts and direct access to our tutors.",
};

// TODO: replace once the client shares the real invite link (falls back to a placeholder for now)
const WHATSAPP_COMMUNITY_LINK =
  process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_LINK || "https://chat.whatsapp.com/REPLACE_ME";

export default function CommunityPage() {
  return (
    <div className="bg-brand-cream text-brand-textNearBlack">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/shh-logo.png"
              alt="Schoolhelphub"
              width={715}
              height={166}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main>
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
                  A free space for parents of children in Years 3-5 preparing for the 11+, with practical tips, guidance, resources and updates to help you prepare with confidence.
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
      </main>
    </div>
  );
}
