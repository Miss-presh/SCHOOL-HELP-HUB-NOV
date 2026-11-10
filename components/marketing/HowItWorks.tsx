"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, UserCheck, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a Free Assessment",
    desc: "Tell us your child’s age, year group, learning needs and academic goals.",
  },
  {
    icon: ClipboardList,
    title: "Your Child Completes the Assessment",
    desc: "We review it, identify strengths and learning gaps, then recommend the right group or one-to-one programme.",
  },
  {
    icon: UserCheck,
    title: "Meet Your Tutor",
    desc: "Your child joins their first live lesson with an experienced tutor matched to their needs.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Child’s Progress",
    desc: "Receive written weekly lesson feedback and follow your child’s academic development as their understanding and confidence grow.",
  },
];

export default function HowitWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            How it works
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl font-bold text-brand-deepGreen leading-tight">
            Getting Started is Simple.
          </h2>
          <p className="mt-5 text-lg text-brand-mutedSage leading-8">
            Finding the right academic support for your child shouldn’t be complicated.
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute hidden lg:block top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-green to-brand-yellow"
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-brand-lightGreen shadow-md flex items-center justify-center">
                  <Icon size={26} className="text-brand-deepGreen" aria-hidden="true" />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-yellow text-brand-deepGreen text-xs font-bold flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-widest uppercase text-brand-green">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-brand-deepGreen leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-brand-mutedSage leading-7 max-w-xs">{s.desc}</p>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-14 text-center">
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Assessment
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
