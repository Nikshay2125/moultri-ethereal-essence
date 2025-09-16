import { useEffect, useState } from "react";

export const ScrollPerfumeAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBottleState = () => {
    if (scrollProgress < 20) return "closed";
    if (scrollProgress < 60) return "opening";
    if (scrollProgress < 80) return "open";
    return "spraying";
  };

  const bottleState = getBottleState();

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none">
      {/* Perfume Bottle */}
      <div className="relative">
        {/* Bottle Body */}
        <div 
          className={`w-16 h-32 bg-gradient-to-b from-primary/60 to-accent/60 rounded-lg backdrop-blur-sm border border-primary/30 transition-all duration-1000 ${
            bottleState === "opening" ? "animate-pulse" : ""
          }`}
          style={{
            transform: `scale(${1 + scrollProgress * 0.01})`,
          }}
        >
          {/* Bottle Cap */}
          <div 
            className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-primary to-primary-glow rounded-t-lg transition-all duration-1000 ${
              bottleState === "closed" ? "translate-y-0" : ""
            } ${
              bottleState === "opening" ? "-translate-y-2 rotate-12" : ""
            } ${
              bottleState === "open" || bottleState === "spraying" ? "-translate-y-8 rotate-45" : ""
            }`}
          />

          {/* Bottle Nozzle */}
          {(bottleState === "open" || bottleState === "spraying") && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-primary rounded-sm animate-fade-in" />
          )}

          {/* Spray Effect */}
          {bottleState === "spraying" && (
            <>
              {/* Main Spray */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/80 rounded-full animate-sparkle"
                    style={{
                      left: `${Math.random() * 40 - 20}px`,
                      top: `${-i * 8}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: "1.5s",
                    }}
                  />
                ))}
              </div>

              {/* Spray Cloud */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse" />
              
              {/* Floating Essence Particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-0.5 h-0.5 bg-primary-glow rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 60 - 30}px`,
                    top: `${-20 - Math.random() * 40}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </>
          )}

          {/* Bottle Label */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-primary/20 rounded border border-primary/40 flex items-center justify-center">
            <span className="text-[6px] font-display text-primary font-bold">MOULVI</span>
          </div>

          {/* Liquid Level */}
          <div 
            className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-primary/80 to-primary/40 rounded transition-all duration-500"
            style={{
              height: `${Math.max(20, 80 - scrollProgress)}%`,
            }}
          />
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute -left-8 top-0 w-1 h-32 bg-border/30 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-t from-primary to-primary-glow transition-all duration-300"
          style={{
            height: `${scrollProgress}%`,
          }}
        />
      </div>
    </div>
  );
};