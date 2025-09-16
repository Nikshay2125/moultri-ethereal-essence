import { FloatingElements } from "@/components/FloatingElements";
import { ScrollPerfumeAnimation } from "@/components/ScrollPerfumeAnimation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Heritage } from "@/components/Heritage";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <ScrollPerfumeAnimation />
      <Hero />
      <About />
      <Heritage />
      <Craftsmanship />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
