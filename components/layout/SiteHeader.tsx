import Image from "next/image";
import Link from "next/link";
import { NavigationWrapper } from "./NavigationWrapper";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-lightGreen/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center flex-shrink-0 min-h-11">
          <Image
            src="/shh-logo.png"
            alt="Schoolhelphub home"
            width={715}
            height={166}
            priority
            className="h-10 sm:h-11 w-auto [filter:drop-shadow(0_0_0.5px_rgba(0,61,34,0.9))_drop-shadow(0_1px_1px_rgba(0,61,34,0.35))]"
          />
        </Link>
        <NavigationWrapper />
      </div>
    </header>
  );
}
