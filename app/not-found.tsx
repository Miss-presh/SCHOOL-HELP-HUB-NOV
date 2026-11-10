import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center px-4 py-24 text-center">
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-green">404</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-brand-deepGreen">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 text-lg text-brand-mutedSage">It may have moved, or the link may be wrong.</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center min-h-11 bg-brand-yellow hover:bg-brand-deepYellow text-black font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            Back to the homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
