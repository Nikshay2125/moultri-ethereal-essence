export const Testimonials = () => {
  const testimonials = [
    {
      name: "Amira Al-Zahra",
      role: "Perfume Connoisseur",
      content: "MOULVI fragrances transport me to the ancient souks of Damascus. Each scent is a masterpiece that captures the soul of Arabian luxury.",
      rating: 5
    },
    {
      name: "Hassan Al-Rashid", 
      role: "Luxury Collector",
      content: "The craftsmanship is unparalleled. These aren't just perfumes – they're liquid poetry that speaks to the heart of Arabic heritage.",
      rating: 5
    },
    {
      name: "Fatima Sultana",
      role: "Fashion Designer", 
      content: "I've worn many fragrances, but MOULVI creates an aura of elegance that's simply incomparable. A true testament to their century of excellence.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 card-luxury rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-golden-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Client Stories</span>
          </div>
          
          <h2 className="font-display text-6xl font-bold text-gradient-gold mb-6">
            Cherished by Connoisseurs
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover what makes MOULVI the preferred choice of fragrance enthusiasts 
            and luxury collectors around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-luxury p-8 rounded-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              {/* Quote Icon */}
              <div className="text-4xl text-primary/30 mb-6 font-serif">"</div>
              
              {/* Content */}
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed italic">
                  {testimonial.content}
                </p>
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-primary">⭐</div>
                  ))}
                </div>
                
                {/* Author */}
                <div className="pt-4 border-t border-primary/20">
                  <div className="font-display text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float"
                style={{ animationDelay: `${index * 0.7}s` }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-luxury inline-block p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Join Our Legacy
              </h3>
              <p className="text-muted-foreground">
                Become part of the MOULVI story and experience fragrances that define luxury.
              </p>
              <div className="flex justify-center space-x-3 pt-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-sparkle" />
                <div className="w-2 h-2 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "0.3s" }} />
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-sparkle" style={{ animationDelay: "0.6s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};