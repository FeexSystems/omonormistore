import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { BagsPage } from "./pages/BagsPage";
import { JewelryPage } from "./pages/JewelryPage";
import { CraftsPage } from "./pages/CraftsPage";
import { PerfumesPage } from "./pages/PerfumesPage";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartSidebar } from "./components/CartSidebar";
import { WishlistSidebar } from "./components/WishlistSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <WishlistProvider>
          <Toaster />
          <Sonner />
          <CartSidebar />
          <WishlistSidebar />
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bags" element={<BagsPage />} />
          <Route path="/crafts" element={<CraftsPage />} />
          <Route path="/perfumes" element={<PerfumesPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact Us"
                description="Get in touch with us for custom orders, questions, or to learn more about our crafting process."
              />
            }
          />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About OMONORMI"
                description="Learn about Bertha Edede's journey and the story behind OMONORMI's handcrafted creations."
              />
            }
          />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
