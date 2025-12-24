import { DownloadsAndTrustedStatsSection } from "@/app/(marketing)/_components/download-trust-section";
import { FAQSection } from "@/app/(marketing)/_components/faq-section";
import { FeaturesSection } from "@/app/(marketing)/_components/features-section";
import { FooterSection } from "@/app/(marketing)/_components/footer-section";
import { HeroSection } from "@/app/(marketing)/_components/hero-section";
import { PricingSection } from "@/app/(marketing)/_components/pricing-section";
import { TestimonialsSection } from "@/app/(marketing)/_components/testimonials-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Omnexia - An AI-powered team collaboration platform. Features include AI summaries, chat fixes, and smart automation to enhance team productivity.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        {/* Features section with 3 cards and Header and description */}
        <FeaturesSection />

        {/* Downloads and trusted stats */}
        <DownloadsAndTrustedStatsSection />

        {/* Pricing section with 3 plans and features */}
        <PricingSection />

        {/* Testimonials section with 3 testimonials */}
        <TestimonialsSection />

        {/* FAQ section with 3 questions and answers */}
        <FAQSection />
      </main>

      {/* Footer section with Logo, navigations, social media links, and copyright */}
      <FooterSection />
    </>
  );
}
