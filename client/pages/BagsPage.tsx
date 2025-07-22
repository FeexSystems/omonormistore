import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Filter, Grid, List } from "lucide-react";
import { getProductsByCategory } from "@shared/products";
import { useState } from "react";

export function BagsPage() {
  const allProducts = getProductsByCategory('bags');
  const [products, setProducts] = useState(allProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSort = (value: string) => {
    setSortBy(value);
    let sortedProducts = [...allProducts];
    
    switch (value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Keep original order for newest
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    setProducts(sortedProducts);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Hand Bags Collection
            </h1>
            <p className="text-lg text-polaris-text-subdued max-w-2xl mx-auto">
              Discover our beautiful collection of handcrafted bags, each designed with care 
              and attention to detail using traditional African techniques.
            </p>
            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20">
              {allProducts.length} Products Available
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-polaris-text-subdued">View:</span>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    className="rounded-r-none"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    className="rounded-l-none"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-polaris-text-subdued">Sort by:</span>
              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid 
            products={products} 
            columns={viewMode === 'grid' ? 3 : 2}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
