import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex-shrink-0 group">
      <div className="flex items-center space-x-3">
        {/* Logo Icon */}
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-success rounded-full animate-pulse"></div>
        </div>
        
        {/* Logo Text */}
        <div className="text-left">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent group-hover:from-brand-accent group-hover:to-brand-primary transition-all duration-300">
            OMONORMI
          </h1>
          <p className="text-xs text-polaris-text-subdued font-medium -mt-1">
            by Bertha Edede
          </p>
        </div>
      </div>
    </Link>
  );
}
