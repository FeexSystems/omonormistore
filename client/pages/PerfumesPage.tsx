import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function PerfumesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-teal/10 to-brand-purple/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Perfumes Collection
            </h1>
            <p className="text-lg text-polaris-text-subdued max-w-2xl mx-auto">
              Carefully curated fragrances that complement your personal aesthetic. 
              Our perfume collection is coming soon with exclusive scents.
            </p>
            <Badge className="bg-brand-teal/10 text-brand-teal border-brand-teal/20">
              Coming Soon
            </Badge>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Exquisite Fragrances Coming Soon
              </h2>
              <p className="text-lg text-polaris-text-subdued">
                We're carefully crafting a collection of unique perfumes that capture 
                the essence of African beauty and tradition. Each fragrance will tell 
                a story through carefully selected notes and artisanal blending.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="font-semibold">Natural Ingredients</h3>
                <p className="text-sm text-polaris-text-subdued">
                  Sourced from authentic African botanicals and traditional essences
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="font-semibold">Artisan Crafted</h3>
                <p className="text-sm text-polaris-text-subdued">
                  Hand-blended in small batches with traditional techniques
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="font-semibold">Unique Scents</h3>
                <p className="text-sm text-polaris-text-subdued">
                  Exclusive fragrances that capture the spirit of OMONORMI
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Be the First to Know</h3>
              <p className="text-polaris-text-subdued">
                Join our mailing list to be notified when our perfume collection launches. 
                Subscribers will receive early access and special launch pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-polaris-divider rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
                <Button className="bg-brand-teal hover:bg-brand-teal/90">
                  Notify Me
                </Button>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild variant="outline">
                <Link to="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Explore Other Collections</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
