"use client";

import Hero from "@/components/marketing/Hero";
import WhyUs from "@/components/marketing/WhyUs";
import HowitWorks from "@/components/marketing/HowItWorks";
import TutorsPreview from "@/components/marketing/TutorsPreview";
import Testimonials from "@/components/marketing/Testimonials";
import PriceTag from "@/components/marketing/PriceTag";
import FAQ from "@/components/marketing/FAQ";
import CaptureForm from "@/components/marketing/CaptureForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <HowitWorks />
      <TutorsPreview />
      <Testimonials />
      <PriceTag />
      <FAQ />
      <CaptureForm />
    </>
  );
}
