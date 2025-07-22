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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/bags"
            element={
              <PlaceholderPage
                title="Hand Bags Collection"
                description="Discover our beautiful collection of handcrafted bags, each designed with care and attention to detail."
              />
            }
          />
          <Route
            path="/crafts"
            element={
              <PlaceholderPage
                title="DIY Crafts & Accessories"
                description="Explore our unique DIY crafts and accessories that showcase traditional artistry with modern style."
              />
            }
          />
          <Route
            path="/perfumes"
            element={
              <PlaceholderPage
                title="Perfumes Collection"
                description="Experience our curated selection of elegant perfumes that complement your unique style."
              />
            }
          />
          <Route
            path="/jewelry"
            element={
              <PlaceholderPage
                title="Jewelry Collection"
                description="Adorn yourself with our exquisite handcrafted jewelry pieces that tell your story."
              />
            }
          />
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
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
