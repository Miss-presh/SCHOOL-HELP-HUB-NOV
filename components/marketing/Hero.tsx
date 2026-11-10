"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { getImageProps } from "next/image";

const heroAlt = "Child in an online tutoring session while a parent works on a laptop";

const {
  props: { srcSet: heroDesktopSrcSet },
} = getImageProps({ alt: heroAlt, src: "/Laptop.png", width: 1672, height: 941, sizes: "100vw" });

const { props: heroMobileProps } = getImageProps({
  alt: heroAlt,
  src: "/phone.png",
  width: 1086,
  height: 1448,
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
});
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, MessageCircle } from "lucide-react";


const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
    },
  },
};

export default function Hero() {

  return (
    <section className="relative overflow-hidden">

      {/* Hero Image */}

      <div className="relative min-h-[92vh] lg:min-h-[760px]">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Art direction: the browser downloads ONLY the crop that matches the screen
              (portrait on phones, landscape from 768px up). */}
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktopSrcSet} sizes="100vw" />
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from heroMobileProps */}
            <img {...heroMobileProps} className="absolute inset-0 h-full w-full object-cover" />
          </picture>
        </motion.div>

        {/* Brand overlay (matches the community hero) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-deepGreen/90 via-brand-deepGreen/75 to-brand-deepGreen/40" />

        {/* Content */}

        <div className="relative z-20 max-w-7xl mx-auto min-h-[92vh] lg:min-h-[760px] px-6 lg:px-10 pt-28 pb-24 flex items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-white"
          >

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase"
            >
              <Globe size={16} className="text-brand-yellow shrink-0" aria-hidden="true" />
              <span>Live Online Tutoring</span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span>Ages 4 - 16</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 font-serif text-5xl lg:text-7xl font-bold leading-tight"
            >
              Better results.
              <span className="block text-brand-yellow">
                Greater confidence.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg sm:text-xl text-white/90 leading-8 max-w-xl"
            >
              Structured small-group classes (max 6) and one-to-one tutoring that
              close learning gaps, build real understanding, and keep your child ahead.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/#book"
                className="bg-brand-yellow hover:bg-brand-deepYellow hover:scale-105 transition-all duration-300 text-black rounded-xl px-8 py-4 font-semibold shadow-xl"
              >
                Book a Free Assessment
              </Link>

              <a
                href={whatsappLink("Hi Schoolhelphub, I'd like to find out more about tutoring for my child.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4 font-semibold"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Price line */}
            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 min-h-11 text-white/90 hover:text-white transition-colors"
              >
                Plans from
                <span className="font-semibold text-brand-yellow">£35 / ₦60,000</span>
                per month
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Proof line */}
            <motion.div
              variants={fadeUp}
              className="mt-10 inline-flex flex-col items-center text-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 sm:px-8"
            >
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {["UK", "US", "CA", "NG", "UAE"].map((code) => (
                  <span
                    key={code}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E8F2EC] text-brand-deepGreen flex items-center justify-center text-sm sm:text-base font-bold shadow-md"
                  >
                    {code}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xl sm:text-2xl font-bold">
                Trusted by 150+ families
              </p>
              <p className="mt-1 text-sm sm:text-base text-white/75">
                Across the UK, USA, Canada, Nigeria, UAE and beyond.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
