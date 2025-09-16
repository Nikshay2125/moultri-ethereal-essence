import { FloatingElements } from "@/components/FloatingElements";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Hero />
      <Heritage />
      <Products />
      <Contact />
    </div>
  );
};

export default Index;
