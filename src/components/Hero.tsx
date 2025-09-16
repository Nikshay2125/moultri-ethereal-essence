import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury MOULVI perfume bottles in golden ambiance"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Floating Perfume Bottles */}
      <div className="absolute top-20 right-10 w-24 h-32 bg-gradient-to-b from-primary/30 to-accent/30 rounded-lg animate-float opacity-60 backdrop-blur-sm" />
      <div className="absolute bottom-32 left-16 w-16 h-24 bg-gradient-to-b from-accent/40 to-primary/40 rounded-lg animate-float-reverse opacity-50 backdrop-blur-sm" />
      <div className="absolute top-1/3 left-1/4 w-20 h-28 bg-gradient-to-b from-primary-glow/30 to-primary/30 rounded-lg animate-float opacity-40 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 card-luxury rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full animate-golden-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Crafting Excellence Since 1921</span>
        </div>

        {/* Brand Name */}
        <h1 className="font-display text-7xl md:text-9xl font-bold mb-4 text-gradient-gold leading-tight">
          MOULVI
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
          Since 1921
        </p>
        
        {/* Decorative Line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        
        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the timeless elegance of traditional Arabic perfumery, 
          where every fragrance tells a story of heritage, luxury, and artisanal mastery.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-primary text-primary-foreground px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-golden-pulse"
          >
            Explore Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg backdrop-blur-sm"
          >
            Our Heritage
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-float">
          <span className="text-sm text-muted-foreground mb-2">Discover More</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};