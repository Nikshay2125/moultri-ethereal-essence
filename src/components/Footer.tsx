export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-primary/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-4xl font-bold text-gradient-gold mb-2">
                MOULVI
              </h3>
              <p className="text-muted-foreground font-light">Since 1921</p>
            </div>
            
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Crafting exquisite Arabic fragrances for over a century. 
              Each bottle tells a story of heritage, luxury, and artisanal mastery 
              that transcends generations.
            </p>
            
            <div className="flex space-x-4">
              {/* Social Links */}
              <div className="w-10 h-10 card-luxury rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-primary">📘</span>
              </div>
              <div className="w-10 h-10 card-luxury rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-primary">📸</span>
              </div>
              <div className="w-10 h-10 card-luxury rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-primary">🐦</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold text-foreground">
              Collections
            </h4>
            <ul className="space-y-3">
              {["Signature Series", "Royal Collection", "Heritage Blend", "Limited Edition", "Gift Sets"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold text-foreground">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Boutique</div>
                <div className="text-muted-foreground text-sm">
                  123 Perfume Street<br />
                  Dubai, UAE 12345
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Contact</div>
                <div className="text-muted-foreground text-sm">
                  +971 4 123 4567<br />
                  hello@moulvi.ae
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Hours</div>
                <div className="text-muted-foreground text-sm">
                  Sun - Thu: 9AM - 9PM<br />
                  Fri - Sat: 9AM - 11PM
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 MOULVI. Crafting luxury since 1921. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service  
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Shipping Info
            </a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-8">
          <div className="w-1 h-1 bg-primary rounded-full animate-sparkle" />
          <div className="w-2 h-2 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="w-1 h-1 bg-primary-glow rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </footer>
  );
};