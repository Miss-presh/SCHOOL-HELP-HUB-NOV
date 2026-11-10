import Link from "next/link";
import { ArrowRight } from "lucide-react";

// TODO: show the visitor's local currency once USD / CAD / AED prices are confirmed.
export default function PriceTag() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-brand-deepGreen to-brand-green text-white px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
          Plans from <span className="text-brand-yellow">£35 / ₦60,000</span> per month.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-7 py-4 rounded-xl whitespace-nowrap transition-colors"
        >
          View full pricing
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
