import type { Metadata } from "next";
import { CurrencyProvider } from "@/context/CurrencyContext";
import ScrollReveal from "@/components/ScrollReveal";
import "@/app/globals.css";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schoolhelphub — Live Online Tutoring | UK · USA · Canada · Nigeria · UAE",
  description:
    "Live online tutoring for children aged 4–16 in the UK, USA, Canada, Nigeria and UAE. WAEC, GCSE, 11+ and SAT prep. Qualified teachers. Written progress report after every session.",
  keywords: [
    "online tutoring Nigeria",
    "WAEC tutoring online",
    "GCSE tutoring online",
    "11+ tutoring online",
    "KS2 KS3 online tutor",
    "online maths tutor UK",
    "private tutor Lagos",
    "Nigerian school tutoring",
    "online tutoring for kids",
  ],
  openGraph: {
    title: "Schoolhelphub — Expert Online Tutoring",
    description: "Live tutoring · Written report after every session · Ages 4–16 · UK · USA · Canada · Nigeria · UAE",
    type: "website",
  },
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-brand-cream text-brand-textNearBlack font-sans antialiased selection:bg-brand-yellow selection:text-brand-deepGreen">
        <CurrencyProvider>
          <ScrollReveal />
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
