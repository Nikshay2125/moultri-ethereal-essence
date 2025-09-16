import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Visit Our Boutique
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience the art of perfumery in person at our flagship store, 
            where tradition meets luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-luxury border-primary/20 p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-golden-pulse" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">Flagship Store</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      123 Heritage Street<br />
                      Old Souk District<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 animate-sparkle" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-accent mb-2">Opening Hours</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Saturday - Thursday: 10:00 AM - 10:00 PM<br />
                      Friday: 2:00 PM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary-glow rounded-full mt-2 animate-float" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-glow mb-2">Contact</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Phone: +971 4 123 4567<br />
                      Email: boutique@moulvi.com<br />
                      WhatsApp: +971 50 123 4567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Get Directions
              </Button>
              <Button variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm">
                Call Now
              </Button>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              The MOULVI Experience
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground/80">
                  Personal fragrance consultation with our master perfumers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground/80">
                  Exclusive access to limited edition and vintage collections
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-glow rounded-full mt-2" />
                <p className="text-foreground/80">
                  Custom blending services for bespoke fragrances
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-foreground/80">
                  Traditional Arabic coffee and dates hospitality
                </p>
              </div>
            </div>

            <Card className="card-luxury border-primary/20 p-6 mt-8">
              <CardContent className="p-0">
                <div className="text-center">
                  <h4 className="font-display text-xl font-bold text-gradient-gold mb-3">
                    Book a Private Consultation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience personalized service in our exclusive VIP room
                  </p>
                  <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50">
                    Schedule Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};