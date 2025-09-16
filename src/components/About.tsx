export const About = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 card-luxury rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-golden-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Our Story</span>
              </div>
              
              <h2 className="font-display text-5xl font-bold text-gradient-gold">
                A Century of 
                <br />
                Fragrant Excellence
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Since 1921, MOULVI has been at the forefront of Arabic perfumery, 
                crafting exquisite fragrances that capture the essence of luxury and tradition.
              </p>
              
              <p>
                Our master perfumers blend rare ingredients sourced from across the Middle East, 
                creating scents that tell stories of ancient trade routes, royal courts, and 
                timeless elegance.
              </p>
              
              <p>
                Each bottle represents over a century of expertise, where traditional 
                techniques meet modern sophistication to create fragrances that are 
                both contemporary and deeply rooted in heritage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Signature Fragrances</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="card-luxury p-8 rounded-2xl">
              <div className="space-y-6">
                {/* Decorative Pattern */}
                <div className="pattern-arabic h-32 rounded-lg border border-primary/20" />
                
                {/* Achievement Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="text-sm font-medium">Award Winning</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-medium">Master Crafted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float backdrop-blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full animate-float-reverse backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};