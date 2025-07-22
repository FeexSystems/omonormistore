import { Product } from "@shared/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  showAddToCart?: boolean;
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ products, showAddToCart = true, columns = 3 }: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-polaris-text-subdued">No products found</h3>
        <p className="text-polaris-text-subdued mt-2">Check back soon for new arrivals!</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          showAddToCart={showAddToCart}
        />
      ))}
    </div>
  );
}
