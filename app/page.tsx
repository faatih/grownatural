"use client";

import { useState, useEffect, useCallback } from "react";
import { useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductDescriptionSection from "@/components/ProductDescriptionSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import RealResultsSection from "@/components/RealResultsSection";
import IngredientsSection from "@/components/IngredientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScienceBehindSection from "@/components/ScienceBehindSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
// BlogSection import removed

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 2px 4px rgba(0, 0, 0, 0.1)"]
  );

  const handleScroll = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        headerBackground={headerBackground} 
        headerShadow={headerShadow} 
        scrollToSection={scrollToSection} 
      />
      <HeroSection />
      <IngredientsSection />
      <BenefitsSection />
      <HowToUseSection />
      <RealResultsSection />

      <TestimonialsSection />
      <ScienceBehindSection />
      {/* BlogSection removed */}
      <FAQSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
    </main>
  );
}