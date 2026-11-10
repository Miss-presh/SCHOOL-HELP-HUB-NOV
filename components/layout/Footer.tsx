import { whatsappLink } from "@/lib/whatsapp";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

// `href: null` = page not built yet (rendered as plain text, not a dead link).
const footerLinks: { name: string; href: string | null }[] = [
  { name: "Programmes", href: "/programmes" },
  { name: "Tutors", href: "/tutors" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: null }, // TODO: create /privacy-policy
  { name: "Terms of Service", href: null }, // TODO: create /terms
  { name: "Safeguarding", href: null }, // TODO: add a Safeguarding section to /about
];

const countries = [
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "ng", name: "Nigeria" },
  { code: "ae", name: "United Arab Emirates" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deepGreen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">

          {/* Brand + tagline + countries */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center font-serif font-bold text-brand-deepGreen">
                S
              </div>
              <span className="font-serif text-2xl font-bold">
                School<span className="text-brand-yellow font-light">help</span>hub
              </span>
            </div>
            <p className="mt-5 text-white/70 leading-8 max-w-md">
              Live online tutoring helping children across the UK, USA, Canada, Nigeria
              and the UAE build confidence, improve results and prepare for important exams.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
              {countries.map((c) => (
                <li key={c.name} className="inline-flex items-center gap-2">
                  <Image src={`/flags/${c.code}.svg`} alt="" width={24} height={16} className="w-6 h-4 rounded-sm object-cover ring-1 ring-white/20" unoptimized />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <h2 className="uppercase tracking-widest text-xs font-bold mb-4">Explore</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6">
              {footerLinks.map((l) => (
                <li key={l.name}>
                  {l.href ? (
                    <Link href={l.href} className="flex items-center min-h-11 text-white/70 hover:text-brand-yellow transition-colors">
                      {l.name}
                    </Link>
                  ) : (
                    <span className="flex items-center min-h-11 text-white/40">{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="uppercase tracking-widest text-xs font-bold mb-4">Contact</h2>
            <ul className="space-y-1">
              <li>
                <a href="tel:+2347043523556" className="flex items-center gap-3 min-h-11 text-white/70 hover:text-brand-yellow transition-colors">
                  <Phone size={18} aria-hidden="true" />
                  +234 704 352 3556
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 min-h-11 text-white/70 hover:text-brand-yellow transition-colors"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@schoolhelphub.com" className="flex items-center gap-3 min-h-11 text-white/70 hover:text-brand-yellow transition-colors break-all">
                  <Mail size={18} aria-hidden="true" className="flex-shrink-0" />
                  hello@schoolhelphub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Schoolhelphub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
