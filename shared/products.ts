export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'bags' | 'crafts' | 'perfumes' | 'jewelry';
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  colors?: string[];
  sizes?: string[];
  features?: string[];
}

export const products: Product[] = [
  // Hand Bags
  {
    id: 'bag-kente-tote',
    name: 'Traditional Kente Tote Bag',
    description: 'Authentic Kente cloth tote with vibrant patterns and sturdy construction. Perfect for daily use with traditional African elegance.',
    price: 89,
    category: 'bags',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fdfa9fd9873d64a1085ebc7bd2c217a3a?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F67e193a261b4429a82b2bb782814a7be?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 24,
    colors: ['Yellow/Blue', 'Green/Red', 'Multi-Color'],
    sizes: ['Small', 'Medium', 'Large'],
    features: ['Handwoven Kente Cloth', 'Leather Straps', 'Interior Pockets', 'Reinforced Bottom']
  },
  {
    id: 'bag-ankara-chain',
    name: 'Ankara Chain Shoulder Bag',
    description: 'Stylish shoulder bag featuring beautiful Ankara prints with golden chain details. Modern design meets traditional craftsmanship.',
    price: 75,
    category: 'bags',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F3d721a5b7a6d4a20894e4dab7f24b55d?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F93ac2510564146718a74c51c9242ffc2?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 18,
    colors: ['Orange/Blue', 'Yellow/Green', 'Red/Black'],
    sizes: ['One Size'],
    features: ['Ankara Print Fabric', 'Gold Chain Strap', 'Zip Closure', 'Phone Pocket']
  },
  {
    id: 'bag-leather-croc',
    name: 'Black Leather Croc Pattern Handbag',
    description: 'Elegant black leather handbag with crocodile-style embossing. Professional and sophisticated for any occasion.',
    price: 120,
    category: 'bags',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F650804637df242968d88be38a2c2fdae?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 32,
    colors: ['Black'],
    sizes: ['Medium', 'Large'],
    features: ['Genuine Leather', 'Croc Embossing', 'Multiple Compartments', 'Detachable Strap']
  },
  {
    id: 'bag-woven-traditional',
    name: 'Traditional Woven Handbag',
    description: 'Beautiful handwoven bag with traditional patterns and wooden handles. Authentic African craftsmanship at its finest.',
    price: 95,
    category: 'bags',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fc10aed1f939649be9bec32acc7696259?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F2664345753ef4e4699b15d2c6b30115a?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 15,
    colors: ['Multi-Pattern', 'Traditional'],
    sizes: ['One Size'],
    features: ['Handwoven Design', 'Wooden Handles', 'Traditional Patterns', 'Spacious Interior']
  },

  // Jewelry
  {
    id: 'jewelry-ankara-set',
    name: 'African Print Jewelry Set',
    description: 'Vibrant jewelry set with traditional African patterns. Includes necklace and matching earrings for a complete look.',
    price: 45,
    category: 'jewelry',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F1940a02b2a5e4b1596ce858dfe43ccb9?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F2833a88f274e46d9ab34d7e880537b1c?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 28,
    colors: ['Kente Pattern', 'Orange/Green', 'Multi-Color'],
    features: ['Matching Set', 'Adjustable Necklace', 'Comfortable Earrings', 'Traditional Patterns']
  },
  {
    id: 'jewelry-ankara-bracelets',
    name: 'Ankara Print Bracelet Collection',
    description: 'Handcrafted bracelet collection featuring authentic Ankara prints. Mix and match for your perfect style.',
    price: 35,
    category: 'jewelry',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fbabb87800e1443ee89312d6a0a27510e?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 20,
    colors: ['Yellow/Red', 'Green/Orange', 'Blue/Black', 'Multi-Pattern'],
    sizes: ['Small', 'Medium', 'Large'],
    features: ['Set of 6 Bracelets', 'Adjustable Size', 'Various Patterns', 'Comfortable Fit']
  },

  // DIY Crafts
  {
    id: 'craft-sandals-set',
    name: 'Matching Sandals & Bag Set',
    description: 'Coordinated sandals and handbag set with beautiful Ankara prints. Perfect for special occasions.',
    price: 110,
    originalPrice: 130,
    category: 'crafts',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2F6d4953e6d8bc4826b5adc3bd7ed3d70c?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 12,
    colors: ['Orange/Blue Pattern'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    features: ['Matching Set', 'Comfortable Fit', 'Ankara Print', 'Durable Sole']
  },
  {
    id: 'craft-ankara-shoes',
    name: 'Traditional Ankara Print Sandals',
    description: 'Stylish sandals featuring vibrant Ankara prints with comfortable straps. Handcrafted for style and comfort.',
    price: 65,
    category: 'crafts',
    images: [
      'https://cdn.builder.io/api/v1/image/assets%2Fc516c86f7053422db52db417d05f51ea%2Fadf7de202c2a416c91b277eb6f9177d4?format=webp&width=800'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 16,
    colors: ['Kente Multi-Color', 'Traditional Pattern'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    features: ['Ankara Print Upper', 'Comfortable Straps', 'Non-slip Sole', 'Breathable Design']
  }
];

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3);
}
