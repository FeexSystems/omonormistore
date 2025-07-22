import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@shared/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

export function ProductCard({ product, showAddToCart = true }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock || isAdding) return;

    setIsAdding(true);
    addItem(product);

    // Visual feedback
    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 300);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && (
              <Badge variant="secondary" className="bg-gray-500 text-white">
                Out of Stock
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-red-500 text-white">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.preventDefault();
                // Add wishlist functionality here
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="space-y-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold group-hover:text-brand-purple transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-brand-yellow text-brand-yellow' 
                    : 'text-gray-200'
                }`} 
              />
            ))}
            <span className="text-sm text-polaris-text-subdued ml-2">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-polaris-text-subdued text-sm line-clamp-2">
            {product.description}
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-polaris-text-subdued">Colors:</span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-200 bg-gradient-to-r from-brand-yellow to-brand-orange"
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-polaris-text-subdued">+{product.colors.length - 3}</span>
                )}
              </div>
            </div>
          )}

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-brand-purple">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-polaris-text-subdued line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            {showAddToCart && (
              <Button 
                size="sm" 
                className="bg-brand-purple hover:bg-brand-purple/90"
                disabled={!product.inStock}
                onClick={handleAddToCart}
                disabled={isAdding || !product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                {isAdding ? 'Adding...' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
