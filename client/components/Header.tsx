import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-polaris-divider sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-polaris-divider py-2">
          <div className="flex justify-between items-center text-sm text-polaris-text-subdued">
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-brand-purple">
                  OMONORMI
                </h1>
                <p className="text-xs text-polaris-text-subdued">by Bertha Edede</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/bags" 
                className="text-foreground hover:text-brand-purple transition-colors font-medium"
              >
                Hand Bags
              </Link>
              <Link 
                to="/crafts" 
                className="text-foreground hover:text-brand-purple transition-colors font-medium"
              >
                DIY Crafts
              </Link>
              <Link 
                to="/perfumes" 
                className="text-foreground hover:text-brand-purple transition-colors font-medium"
              >
                Perfumes
              </Link>
              <Link 
                to="/jewelry" 
                className="text-foreground hover:text-brand-purple transition-colors font-medium"
              >
                Jewelry
              </Link>
            </nav>

            {/* Search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-polaris-text-subdued" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full border-polaris-divider focus:border-brand-purple focus:ring-brand-purple"
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Search className="h-5 w-5 md:hidden" />
                <span className="hidden md:block">Search</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
                <span className="hidden md:block ml-2">Wishlist</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="hidden md:block ml-2">Account</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="hidden md:block ml-2">Cart</span>
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-polaris-text-subdued" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border-polaris-divider focus:border-brand-purple focus:ring-brand-purple"
            />
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="lg:hidden border-t border-polaris-divider py-4">
          <div className="grid grid-cols-2 gap-4 text-center">
            <Link 
              to="/bags" 
              className="text-foreground hover:text-brand-purple transition-colors font-medium py-2"
            >
              Hand Bags
            </Link>
            <Link 
              to="/crafts" 
              className="text-foreground hover:text-brand-purple transition-colors font-medium py-2"
            >
              DIY Crafts
            </Link>
            <Link 
              to="/perfumes" 
              className="text-foreground hover:text-brand-purple transition-colors font-medium py-2"
            >
              Perfumes
            </Link>
            <Link 
              to="/jewelry" 
              className="text-foreground hover:text-brand-purple transition-colors font-medium py-2"
            >
              Jewelry
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
