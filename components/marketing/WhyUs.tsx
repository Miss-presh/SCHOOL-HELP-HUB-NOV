"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  GraduationCap,
  Clock3,
  Target,
  ArrowRight,
  UserRound,
} from "lucide-react";
import Stats from "./Stats";

const subjects = [
  "Maths",
  "English",
  "Science",
  "French",
  "Yoruba",
  "Coding",
  "11+",
  "SATs",
  "GCSE",
  "IGCSE",
  "WAEC",
  "BECE",
];

const benefits = [
  {
    icon: Users,
    title: "Small Groups or One-to-One",
    body: "Learn in a group of six or fewer, or choose a dedicated personal tutor. Either way, your child is seen, heard and supported.",
  },
  {
    icon: ClipboardCheck,
    title: "Lesson Feedback",
    body: "You receive a clear weekly summary of what was taught, strengths, areas to improve and next steps.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Tutors",
    body: "Carefully vetted tutors who know both your child’s country curriculum and Nigerian curricula.",
  },
  {
    icon: Clock3,
    title: "Flexible Schedule",
    body: "Morning, afternoon and evening sessions that fit around school and family life, in any time zone.",
  },
  {
    icon: Target,
    title: "Teaching That Addresses Learning Gaps",
    body: "We identify areas where children need support and focus on building understanding, strengthening foundations and improving academic performance.",
  },
];

// Each option opens its section on the Programmes page
const learningOptions = [
  {
    icon: Users,
    title: "Small-Group Classes",
    body: "Maximum six students. Interactive, social and great value.",
    href: "/programmes#small-group",
  },
  {
    icon: UserRound,
    title: "One-to-One Tuition",
    body: "A dedicated tutor and a plan built around your child's pace and goals.",
    href: "/programmes#one-to-one",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Intro */}
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            Why Schoolhelphub
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl font-bold text-brand-deepGreen leading-tight">
            Why Families Choose Us
          </h2>
          <p className="mt-5 text-lg text-brand-mutedSage leading-8">
            We go beyond delivering lessons. We provide the academic support, guidance
            and attention children need to make meaningful progress.
          </p>
        </motion.div>

        {/* What we teach */}
        <motion.div
          {...fadeUp}
          id="subjects"
          className="mt-12 pt-10 border-t border-brand-lightGreen scroll-mt-24"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-textNearBlack/70">
            What we teach
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {subjects.map((s) => (
              <li
                key={s}
                className="rounded-full bg-brand-lightGreen text-brand-green font-semibold px-5 py-2.5 text-sm sm:text-base"
              >
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/programmes"
            className="group mt-6 inline-flex items-center gap-2 min-h-11 font-semibold text-brand-green hover:text-brand-midGreen"
          >
            See all programmes
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Benefits */}
        <div className="mt-12 pt-10 border-t border-brand-lightGreen">
          <motion.div {...fadeUp}>
            <h3 className="font-serif text-3xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              Small Classes. Clear Progress. Real Confidence.
            </h3>
            <p className="mt-3 text-brand-mutedSage text-lg">
              Our approach to supporting every learner.
            </p>
          </motion.div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              const isLast = i === benefits.length - 1;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                  className={`group flex gap-5 rounded-2xl bg-brand-faintGreen border border-brand-lightGreen p-6 lg:p-7 hover:shadow-md-brand hover:-translate-y-1 transition-all duration-300 ${
                    isLast ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-lightGreen flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Icon size={24} className="text-brand-deepGreen group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-deepGreen">{b.title}</h4>
                    <p className="mt-2 text-brand-mutedSage leading-7">{b.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Choose how your child learns */}
        <motion.div {...fadeUp} className="mt-12">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-brand-deepGreen">
            Choose how your child learns
          </h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {learningOptions.map((o) => {
              const Icon = o.icon;
              return (
                <Link
                  key={o.title}
                  href={o.href}
                  className="group flex flex-col rounded-2xl border-2 border-brand-lightGreen bg-white p-6 lg:p-7 hover:border-brand-yellow hover:shadow-md-brand hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-yellow/25 flex items-center justify-center">
                      <Icon size={24} className="text-brand-deepGreen" aria-hidden="true" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-deepGreen">{o.title}</h4>
                  </div>
                  <p className="mt-4 text-brand-mutedSage leading-7 flex-grow">{o.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-green group-hover:text-brand-midGreen">
                    Learn more
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div {...fadeUp} className="mt-12">
          <Stats />
        </motion.div>

      </div>
    </section>
  );
}
