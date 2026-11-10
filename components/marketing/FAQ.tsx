"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

// Homepage shows the top 3 only; the full list lives on /faq.
const faqs = [
  {
    question: "How do online lessons work?",
    answer:
      "Lessons take place live on Zoom or Google Meet with experienced tutors. Students interact in real time, ask questions and get support just like in a physical classroom.",
  },
  {
    question: "How many students are in each class?",
    answer:
      "A maximum of six, so every child gets individual attention while still learning with others.",
  },
  {
    question: "Can we book a free assessment first?",
    answer:
      "Yes. Every family starts with a free assessment so we can understand your child's strengths, find learning gaps and recommend the right programme.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">
            FAQs
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
            Questions parents ask
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const active = open === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  active ? "border-brand-green bg-brand-faintGreen" : "border-brand-lightGreen bg-white hover:border-brand-green/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  aria-expanded={active}
                  aria-controls={panelId}
                  className="w-full min-h-11 flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer"
                >
                  <h3 className="font-semibold text-lg text-brand-deepGreen pr-6">{faq.question}</h3>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      active ? "rotate-180 text-brand-green" : "text-brand-mutedSage"
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-brand-mutedSage leading-8">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 min-h-11 font-semibold text-brand-green hover:text-brand-midGreen"
          >
            See all FAQs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
