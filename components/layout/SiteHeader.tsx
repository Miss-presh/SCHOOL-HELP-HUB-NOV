import Link from "next/link";
import { NavigationWrapper } from "./NavigationWrapper";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-lightGreen/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 min-h-11" aria-label="Schoolhelphub home">
          <div className="w-9 h-9 bg-brand-yellow rounded-xl flex items-center justify-center font-serif font-bold text-brand-deepGreen text-lg">
            S
          </div>
          <span className="font-serif text-xl font-bold text-brand-deepGreen tracking-tight leading-none">
            School<span className="text-brand-midGreen font-light font-sans">help</span>hub
          </span>
        </Link>
        <NavigationWrapper />
      </div>
    </header>
  );
}
