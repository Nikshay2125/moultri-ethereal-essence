export const Craftsmanship = () => {
  const processes = [
    {
      step: "01",
      title: "Sourcing",
      description: "Rare ingredients from ancient trade routes",
      icon: "🌿"
    },
    {
      step: "02", 
      title: "Blending",
      description: "Master perfumers craft unique compositions",
      icon: "⚗️"
    },
    {
      step: "03",
      title: "Aging",
      description: "Patient maturation in oak barrels",
      icon: "🏺"
    },
    {
      step: "04",
      title: "Bottling",
      description: "Hand-finished with golden details",
      icon: "💎"
    }
  ];

  return (
    <section className="py-32 px-4 pattern-arabic">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 card-luxury rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-golden-pulse" />
            <span className="text-sm font-medium text-muted-foreground">The Art of Perfumery</span>
          </div>
          
          <h2 className="font-display text-6xl font-bold text-gradient-gold mb-6">
            Masterful Craftsmanship
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Every MOULVI fragrance is born from a meticulous process that honors 
            centuries of Arabic perfumery traditions while embracing modern innovation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              {/* Process Card */}
              <div className="card-luxury p-8 rounded-2xl h-full hover:scale-105 transition-all duration-500">
                <div className="text-center space-y-6">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full border border-primary/30">
                    <span className="font-display text-lg font-bold text-primary">{process.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {process.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {process.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-16 space-x-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-sparkle" />
          <div className="w-3 h-3 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="w-2 h-2 bg-primary-glow rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  );
};