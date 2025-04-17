import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { AboutSection } from "@/components/about-section";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <AboutSection />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
