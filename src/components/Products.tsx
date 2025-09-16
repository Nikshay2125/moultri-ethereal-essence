import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import collectionImage from "@/assets/perfume-collection.jpg";

const products = [
  {
    name: "Oud Royal",
    category: "Premium Oud",
    description: "Our finest aged oud, crafted from the heartwood of ancient agarwood trees.",
    price: "From $299",
    image: "bg-gradient-to-br from-primary/30 to-accent/30"
  },
  {
    name: "Rose Damascus",
    category: "Floral Collection",
    description: "Exquisite Damascus rose essence, capturing the romance of Arabian gardens.",
    price: "From $199",
    image: "bg-gradient-to-br from-accent/30 to-primary/20"
  },
  {
    name: "Amber Mystique",
    category: "Oriental Series",
    description: "Warm amber notes blended with rare spices, evoking ancient mysteries.",
    price: "From $249",
    image: "bg-gradient-to-br from-primary-glow/30 to-primary/30"
  },
  {
    name: "Jasmine Nights",
    category: "Signature Series",
    description: "Night-blooming jasmine captured in its most intoxicating form.",
    price: "From $179",
    image: "bg-gradient-to-br from-secondary/30 to-accent/30"
  }
];

export const Products = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Collection Hero */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={collectionImage} 
            alt="MOULVI perfume collection showcase"
            className="w-full h-96 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mb-4">
                Our Collection
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl">
                Discover fragrances that have captivated hearts for generations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={product.name} className="card-luxury border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Product Image Placeholder */}
                <div className={`h-48 ${product.image} relative overflow-hidden rounded-t-xl`}>
                  {/* Floating Bottle Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-16 h-24 bg-gradient-to-b from-primary/40 to-accent/40 rounded-lg backdrop-blur-sm animate-float opacity-80"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </div>
                  {/* Golden Sparkles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-glow rounded-full animate-sparkle" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">{product.category}</div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-primary">{product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-primary text-primary-foreground px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};