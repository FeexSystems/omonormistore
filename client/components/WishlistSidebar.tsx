import { X, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export function WishlistSidebar() {
  const { state, removeItem, closeWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();

  if (!state.isOpen) return null;

  const handleAddToCart = (product: any) => {
    addToCart(product);
    // Optionally remove from wishlist after adding to cart
    // removeItem(product.id);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeWishlist}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-polaris-divider">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <h2 className="text-lg font-semibold">Wishlist</h2>
            {state.items.length > 0 && (
              <Badge className="bg-red-500">
                {state.items.length}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={closeWishlist}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <Heart className="h-16 w-16 text-polaris-text-subdued mb-4" />
              <h3 className="text-lg font-semibold text-polaris-text-subdued mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-polaris-text-subdued mb-4">
                Add some beautiful OMONORMI pieces to save for later!
              </p>
              <Button onClick={closeWishlist} className="bg-brand-primary hover:bg-brand-primary/90">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {state.items.map((product) => (
                <div key={product.id} className="flex gap-4 p-4 border border-polaris-divider rounded-lg">
                  {/* Product Image */}
                  <Link to={`/product/${product.id}`} onClick={closeWishlist}>
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-polaris-surface-subdued">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.id}`} onClick={closeWishlist}>
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1 hover:text-brand-primary transition-colors">
                        {product.name}
                      </h4>
                    </Link>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Heart 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-brand-success text-brand-success' 
                              : 'text-gray-200'
                          }`} 
                        />
                      ))}
                      <span className="text-xs text-polaris-text-subdued">
                        ({product.reviewCount})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-sm font-semibold text-brand-primary mb-3">
                      ${product.price}
                      {product.originalPrice && (
                        <span className="text-xs text-polaris-text-subdued line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button
                        size="sm"
                        className="bg-brand-primary hover:bg-brand-primary/90 text-xs"
                        disabled={!product.inStock}
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(product.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-polaris-divider p-6 space-y-4">
            <Button 
              className="w-full bg-brand-primary hover:bg-brand-primary/90"
              size="lg"
              onClick={() => {
                // Add all wishlist items to cart
                state.items.forEach(product => {
                  if (product.inStock) {
                    addToCart(product);
                  }
                });
                closeWishlist();
              }}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add All to Cart
            </Button>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={closeWishlist}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
