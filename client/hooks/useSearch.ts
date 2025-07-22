import { useState, useMemo } from 'react';
import { Product, products } from '@shared/products';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    
    return products.filter(product => {
      const searchableText = [
        product.name,
        product.description,
        product.category,
        ...(product.colors || []),
        ...(product.features || [])
      ].join(' ').toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const performSearch = (query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return {
    searchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
    hasResults: searchResults.length > 0,
    hasQuery: searchQuery.trim().length > 0
  };
}
