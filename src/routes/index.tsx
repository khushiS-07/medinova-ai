import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Departments } from "@/components/site/Departments";
import { Specialists } from "@/components/site/Specialists";
import { MedicalServices } from "@/components/site/MedicalServices";
import { AIAssistant } from "@/components/site/AIAssistant";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Packages } from "@/components/site/Packages";
import { Technology } from "@/components/site/Technology";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingActions } from "@/components/site/FloatingActions";

import { PageLoader } from "@/components/site/PageLoader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Stats />
        <WhyChoose />
        <Departments />
        <Specialists />
        <MedicalServices />
        <AIAssistant />
        <HowItWorks />
        <Technology />
        <Packages />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <FinalCTA />
        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
