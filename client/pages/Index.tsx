import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart, ArrowRight, Sparkles, Award, Users, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-purple/10 via-brand-yellow/5 to-brand-teal/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 hover:bg-brand-purple/20">
                  ✨ Handcrafted with Love
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-brand-purple">OMONORMI</span>
                  <br />
                  <span className="text-foreground">Artisan Crafts</span>
                </h1>
                <p className="text-lg text-polaris-text-subdued leading-relaxed">
                  Discover unique handcrafted bags, jewelry, perfumes, and DIY accessories 
                  created by Bertha Edede. Each piece tells a story of traditional 
                  craftsmanship meets modern elegance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </Button>
                <Button variant="outline" size="lg" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-purple">500+</div>
                  <div className="text-sm text-polaris-text-subdued">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-purple">100%</div>
                  <div className="text-sm text-polaris-text-subdued">Handmade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-purple">5⭐</div>
                  <div className="text-sm text-polaris-text-subdued">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 p-4 group hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F67e193a261b4429a82b2bb782814a7be?format=webp&width=800"
                    alt="OMONORMI Handcrafted Bags"
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 p-4 group hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F3d721a5b7a6d4a20894e4dab7f24b55d?format=webp&width=800"
                    alt="OMONORMI Jewelry Collection"
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-teal/10 p-4 group hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F93ac2510564146718a74c51c9242ffc2?format=webp&width=800"
                    alt="OMONORMI Crafted Accessories"
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 p-4 group hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F650804637df242968d88be38a2c2fdae?format=webp&width=800"
                    alt="OMONORMI Traditional Patterns"
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-yellow text-white p-3 rounded-full shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-polaris-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Collections</h2>
            <p className="text-lg text-polaris-text-subdued max-w-2xl mx-auto">
              Explore our diverse range of handcrafted products, each category 
              showcasing unique artistry and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/bags">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-polaris-divider overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fc10aed1f939649be9bec32acc7696259?format=webp&width=800"
                    alt="Hand Bags Collection"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-xl group-hover:text-brand-purple transition-colors">Hand Bags</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Beautiful handcrafted bags combining traditional techniques with modern design
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/crafts">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-polaris-divider overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F2664345753ef4e4699b15d2c6b30115a?format=webp&width=800"
                    alt="DIY Crafts Collection"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-xl group-hover:text-brand-yellow transition-colors">DIY Crafts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Unique accessories and craft items perfect for personal style and gifting
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/perfumes">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-polaris-divider overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F6d4953e6d8bc4826b5adc3bd7ed3d70c?format=webp&width=800"
                    alt="Perfumes Collection"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-xl group-hover:text-brand-teal transition-colors">Perfumes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Carefully curated fragrances that complement your personal aesthetic
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/jewelry">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-polaris-divider overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F2833a88f274e46d9ab34d7e880537b1c?format=webp&width=800"
                    alt="Jewelry Collection"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-xl group-hover:text-brand-orange transition-colors">Jewelry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Exquisite handcrafted jewelry pieces that make a statement
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Products</h2>
            <p className="text-lg text-polaris-text-subdued">Handpicked favorites from our collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-brand-purple/5 to-brand-yellow/5 relative overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fdfa9fd9873d64a1085ebc7bd2c217a3a?format=webp&width=800"
                  alt="Traditional Kente Tote Bag"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-brand-purple transition-colors">
                    Traditional Kente Tote Bag
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                    <span className="text-sm text-polaris-text-subdued ml-2">(24 reviews)</span>
                  </div>
                  <p className="text-polaris-text-subdued text-sm">
                    Authentic Kente cloth tote with vibrant patterns and sturdy construction
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-purple">$89</span>
                    <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-brand-teal/5 to-brand-orange/5 relative overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F1940a02b2a5e4b1596ce858dfe43ccb9?format=webp&width=800"
                  alt="African Print Jewelry Set"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-brand-purple transition-colors">
                    African Print Jewelry Set
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                    <span className="text-sm text-polaris-text-subdued ml-2">(18 reviews)</span>
                  </div>
                  <p className="text-polaris-text-subdued text-sm">
                    Vibrant jewelry set with traditional African patterns and matching pieces
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-purple">$125</span>
                    <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-brand-yellow/5 to-brand-green/5 relative overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fbabb87800e1443ee89312d6a0a27510e?format=webp&width=800"
                  alt="Ankara Print Bracelet Collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-brand-purple transition-colors">
                    Ankara Print Bracelets
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                    <span className="text-sm text-polaris-text-subdued ml-2">(31 reviews)</span>
                  </div>
                  <p className="text-polaris-text-subdued text-sm">
                    Handcrafted bracelet collection featuring authentic Ankara prints
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-purple">$35</span>
                    <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-polaris-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose OMONORMI</h2>
            <p className="text-lg text-polaris-text-subdued">Experience the difference of authentic craftsmanship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-polaris-text-subdued">Each product is meticulously crafted using the finest materials</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-semibold">Personal Touch</h3>
              <p className="text-polaris-text-subdued">Direct connection with artisan Bertha Edede for custom requests</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-polaris-text-subdued">Quick and secure shipping to bring your order to you safely</p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold">Made with Love</h3>
              <p className="text-polaris-text-subdued">Every piece carries the passion and story of its creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Discover Your Perfect Piece?</h2>
            <p className="text-lg opacity-90">
              Join hundreds of satisfied customers who have found their unique style with OMONORMI. 
              Browse our collections and find something special for yourself or a loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-purple hover:bg-white/90">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop All Collections
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple">
                Contact for Custom Orders
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
