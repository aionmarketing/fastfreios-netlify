import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Ticker } from "@/components/site/Ticker";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { TipBlock } from "@/components/site/TipBlock";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CheckupForm } from "@/components/site/CheckupForm";
import { Brands } from "@/components/site/Brands";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Fachada da oficina */}
      <div className="relative w-full pt-16 md:pt-20">
        <img
          src="/shop-wide.png"
          alt="Fast Freios — Oficina especializada em freios em Piracicaba"
          className="w-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
      </div>

      <main>
        <Hero />
        <Brands />
        <Pillars />
        <Ticker />
        <Services />
        <About />
        <Process />
        <TipBlock />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <CheckupForm />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
