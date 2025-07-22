import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "@/contexts/CartContext";

export function CartSidebar() {
  const { state, removeItem, updateQuantity, closeCart, getTotalPrice } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-polaris-divider">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            {state.items.length > 0 && (
              <Badge className="bg-brand-purple">
                {state.items.reduce((total, item) => total + item.quantity, 0)}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={closeCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <ShoppingBag className="h-16 w-16 text-polaris-text-subdued mb-4" />
              <h3 className="text-lg font-semibold text-polaris-text-subdued mb-2">
                Your cart is empty
              </h3>
              <p className="text-polaris-text-subdued mb-4">
                Add some beautiful OMONORMI pieces to get started!
              </p>
              <Button onClick={closeCart} className="bg-brand-purple hover:bg-brand-purple/90">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {state.items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 p-4 border border-polaris-divider rounded-lg">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-polaris-surface-subdued">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                      {item.product.name}
                    </h4>
                    
                    {/* Variants */}
                    {(item.selectedColor || item.selectedSize) && (
                      <div className="text-xs text-polaris-text-subdued mb-2">
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.selectedColor && item.selectedSize && <span> • </span>}
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      </div>
                    )}

                    {/* Price */}
                    <div className="text-sm font-semibold text-brand-purple mb-2">
                      ${item.product.price}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-polaris-divider rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
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
            {/* Total */}
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-brand-purple">${getTotalPrice().toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <Button 
              className="w-full bg-brand-purple hover:bg-brand-purple/90"
              size="lg"
            >
              Checkout
            </Button>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
