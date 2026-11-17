"use client";

import Link from "next/link";



const standards = [
  {
    number: "01",
    title: "Assess Before We Teach",
    body:
      "We begin by identifying strengths, learning gaps and confidence levels so every lesson starts at the right point.",
  },
  {
    number: "02",
    title: "Teach for Understanding",
    body:
      "Every concept is broken down into simple explanations, examples and guided learning—not memorisation.",
  },
  {
    number: "03",
    title: "Practice Until It Sticks",
    body:
      "Students solve carefully selected questions during every lesson to reinforce understanding immediately.",
  },
  {
    number: "04",
    title: "Instant Feedback",
    body:
      "Mistakes are corrected immediately so misconceptions never become long-term habits.",
  },
  {
    number: "05",
    title: "Weekly Progress Report",
    body:
      "Every week, parents receive a written report that highlights what was covered that week, how their child is progressing and what comes next.",
  },
  {
    number: "06",
    title: "Continuous Progress Tracking",
    body:
      "Tutors monitor performance over time and adapt lessons to keep every child improving.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">

      {/* OUR STORY */}
      <section className="py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              <span className="w-4 h-px bg-brand-midGreen" />
              Our Story
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-deepGreen">
              Built Around One Simple Idea
            </h2>

            <div className="space-y-5 text-brand-mutedSage leading-relaxed">
              <p>
                Too many parents were paying for tutoring without ever knowing
                whether their child was actually improving.
              </p>

              <p>
                Lessons happened. Homework was given. But there was very little
                accountability.
              </p>

              <p>
                Schoolhelphub was created to change that.
              </p>

              <p>
                Every lesson follows the same teaching standard and ends with a
                written report so parents always know exactly what was taught,
                where progress has been made and what comes next.
              </p>
            </div>
          </div>

          <div className="bg-brand-faintGreen rounded-3xl p-10 border border-brand-lightGreen">
            <div className="space-y-8">

              <div>
                <p className="text-5xl font-serif font-bold text-brand-green">10+</p>
                <p className="text-brand-mutedSage mt-2">
                  Years of teaching excellence from our academic leadership.
                </p>
              </div>

              <div>
                <p className="text-5xl font-serif font-bold text-brand-green">
                  1,600+
                </p>
                <p className="text-brand-mutedSage mt-2">
                  Live online lessons delivered every month.
                </p>
              </div>

              <div>
                <p className="text-5xl font-serif font-bold text-brand-green">
                  150+
                </p>
                <p className="text-brand-mutedSage mt-2">
                  Families supported across the UK, USA, Canada, Nigeria, UAE and beyond.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-brand-faintGreen px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-white px-4 py-1.5 rounded-full border border-brand-green/10">
              Teaching Standard
            </span>

            <h2 className="mt-6 font-serif text-4xl lg:text-5xl font-bold text-brand-deepGreen leading-tight">
              Every Tutor Follows
              <br />
              <em className="italic text-brand-midGreen">
                One Proven Teaching Standard
              </em>
            </h2>

            <p className="mt-6 text-brand-mutedSage leading-relaxed">
              Whether your child learns from Nigeria or the UK, every lesson follows
              the same structured learning framework designed to build confidence,
              understanding and measurable academic progress.
            </p>

          </div>

          <div className="space-y-6">

            {standards.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-3xl border border-brand-lightGreen p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-all duration-300"
              >

                <div className="w-20 h-20 rounded-2xl bg-brand-lightGreen flex items-center justify-center flex-shrink-0">

                  <span className="font-serif text-3xl font-bold text-brand-green">
                    {item.number}
                  </span>

                </div>

                <div>

                  <h3 className="font-serif text-2xl font-bold text-brand-deepGreen mb-3">
                    {item.title}
                  </h3>

                  <p className="text-brand-mutedSage leading-relaxed">
                    {item.body}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

  

      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-midGreen bg-brand-lightGreen px-4 py-1.5 rounded-full border border-brand-green/10">
              Schoolhelphub Impact
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold text-brand-deepGreen">
              Helping Students Succeed
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ["150+", "Families Supported"],
              ["50+", "Qualified Tutors"],
              ["1,600+", "Lessons Every Month"],
              ["10+", "Years Teaching Experience"],
            ].map(([number, label]) => (

              <div
                key={label}
                className="rounded-3xl bg-brand-faintGreen border border-brand-lightGreen p-10 text-center"
              >

                <p className="font-serif text-5xl font-bold text-brand-green">
                  {number}
                </p>

                <p className="mt-3 text-brand-mutedSage">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-green text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Meet Your<br />
            <em className="italic text-brand-yellow">Child&apos;s Tutor?</em>
          </h2>
          <p className="text-white/65 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Book your child&apos;s free assessment today. No payment needed. Written report included.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-brand-deepGreen font-bold px-8 py-4 rounded-xl text-sm tap-target transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-brand-yellow/25"
          >
            📚 Book Free Trial, No Payment Needed
          </Link>
        </div>
      </section>

    </div>
  );
}
