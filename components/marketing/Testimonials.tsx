import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

// TODO (client): confirm each quote and result is genuine and that the parent
// has agreed to it being used. Add `photo` support here if real photos are supplied.
const testimonials = [
  {
    quote:
      "The session reports changed everything for us. I finally know exactly what my daughter is working on every week. Her WAEC grades jumped from E8 to B2 in two terms.",
    name: "Mrs. Temi Adeleke",
    meta: "Parent · Lagos, Nigeria · Year 10",
    initials: "TA",
    avatarColor: "from-brand-green to-brand-midGreen",
  },
  {
    quote:
      "Finding quality UK-style tutoring in Texas felt impossible until Schoolhelphub. My son genuinely looks forward to his sessions every week.",
    name: "Marcus K.",
    meta: "Parent · Texas, USA · IGCSE",
    initials: "MK",
    avatarColor: "from-brand-deepYellow to-brand-yellow",
  },
  {
    quote:
      "My son went from dreading maths to actually enjoying it. The detailed reports keep us in the loop, and the 11+ prep was spot on.",
    name: "Funmi Okafor",
    meta: "Parent · Manchester, UK · Year 5",
    initials: "FO",
    avatarColor: "from-brand-deepGreen to-brand-green",
  },
];

export default function Testimonials() {
  return (
    <section id="parent-stories" className="py-20 lg:py-28 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            What parents say
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl font-bold text-brand-deepGreen leading-tight">
            From the First Lesson to Real Progress.
          </h2>
          <p className="mt-5 text-lg text-brand-mutedSage leading-8">
            Parents share their experience from the very beginning, from children enjoying
            their first lessons to growing confidence and real academic progress.
          </p>
        </div>

        <ul className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-3xl bg-white border border-brand-lightGreen p-7 shadow-sm-brand"
            >
              <Quote size={28} className="text-brand-yellow" aria-hidden="true" />
              <blockquote className="mt-4 flex-grow text-brand-textNearBlack leading-7">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-brand-lightGreen flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-serif font-bold text-white flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-deepGreen">{t.name}</p>
                  <p className="text-sm text-brand-mutedSage">{t.meta}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 min-h-11 text-sm font-bold uppercase tracking-widest text-brand-green hover:text-brand-midGreen"
          >
            Read more parent stories
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
