export const Heritage = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-arabic opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                A Century of 
                <br />Excellence
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-6" />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/80">
                Since 1921, the MOULVI legacy has been synonymous with the finest Arabic 
                perfumery traditions. Our journey began in the bustling souks of the Middle East, 
                where master perfumers crafted exquisite fragrances using time-honored techniques.
              </p>
              
              <p className="text-foreground/70">
                Each bottle carries within it the essence of our heritage – rare oud, 
                precious rose, and mystical amber, carefully selected and blended to create 
                fragrances that transcend time and speak to the soul.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Years of Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Signature Fragrances</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Heritage Timeline */}
          <div className="space-y-8">
            <div className="card-luxury p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 animate-golden-pulse" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">1921</h3>
                  <p className="text-foreground/80">
                    Founded by master perfumer Haji Moulvi in the heart of Arabia, 
                    establishing the foundation of our perfumery legacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-2 animate-sparkle" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-accent mb-2">1960s</h3>
                  <p className="text-foreground/80">
                    Expanded across the Middle East, becoming renowned for our 
                    signature oud and rose compositions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-luxury p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-primary-glow rounded-full mt-2 animate-float" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-glow mb-2">Today</h3>
                  <p className="text-foreground/80">
                    Continuing our heritage with modern innovations while preserving 
                    traditional craftsmanship for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};