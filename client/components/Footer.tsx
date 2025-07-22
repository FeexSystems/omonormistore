import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-polaris-surface-subdued border-t border-polaris-divider mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-brand-purple">OMONORMI</h3>
              <p className="text-sm text-polaris-text-subdued">by Bertha Edede</p>
            </div>
            <p className="text-sm text-polaris-text-subdued">
              Crafting beautiful, unique handbags and accessories with passion and attention to detail. 
              Every piece tells a story of craftsmanship and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-polaris-text-subdued hover:text-brand-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-polaris-text-subdued hover:text-brand-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-polaris-text-subdued hover:text-brand-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/bags" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Hand Bags
                </Link>
              </li>
              <li>
                <Link to="/crafts" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  DIY Crafts & Accessories
                </Link>
              </li>
              <li>
                <Link to="/perfumes" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="/jewelry" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/sizing" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-purple" />
                <span className="text-sm text-polaris-text-subdued">hello@omonormi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-purple" />
                <span className="text-sm text-polaris-text-subdued">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-purple" />
                <span className="text-sm text-polaris-text-subdued">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-polaris-divider mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-polaris-text-subdued">
              © {new Date().getFullYear()} OMONORMI by Bertha Edede. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-polaris-text-subdued hover:text-brand-purple transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
