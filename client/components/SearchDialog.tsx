import { useState, useEffect } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useSearch } from '@/hooks/useSearch';
import { Link } from 'react-router-dom';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [inputValue, setInputValue] = useState('');
  const { searchQuery, searchResults, isSearching, performSearch, clearSearch, hasResults, hasQuery } = useSearch();

  // Popular searches
  const popularSearches = [
    'Kente bags',
    'Ankara jewelry',
    'Traditional crafts',
    'African prints',
    'Handmade accessories'
  ];

  // Recent searches (stored in localStorage)
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('omonormi-recent-searches');
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    
    performSearch(query);
    
    // Add to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('omonormi-recent-searches', JSON.stringify(updated));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
    }
  };

  const handleClear = () => {
    setInputValue('');
    clearSearch();
  };

  const handleClose = () => {
    setInputValue('');
    clearSearch();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">Search Products</DialogTitle>
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-polaris-text-subdued" />
            <Input
              type="text"
              placeholder="Search for bags, jewelry, crafts..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 pr-10 py-3 text-lg border-polaris-divider focus:border-brand-primary focus:ring-brand-primary"
              autoFocus
            />
            {inputValue && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={handleClear}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {!hasQuery ? (
            // Default state - show recent and popular searches
            <div className="p-6 space-y-6">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="h-4 w-4 text-polaris-text-subdued" />
                    <h3 className="font-semibold text-sm text-polaris-text-subdued">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setInputValue(search);
                          handleSearch(search);
                        }}
                        className="text-sm"
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-polaris-text-subdued" />
                  <h3 className="font-semibold text-sm text-polaris-text-subdued">Popular Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue(search);
                        handleSearch(search);
                      }}
                      className="text-sm"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : isSearching ? (
            // Loading state
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4"></div>
              <p className="text-polaris-text-subdued">Searching...</p>
            </div>
          ) : hasResults ? (
            // Search results
            <div className="p-6">
              <p className="text-sm text-polaris-text-subdued mb-4">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              <div className="space-y-4">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={handleClose}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-polaris-surface-hovered transition-colors"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-polaris-surface-subdued">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-1 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-polaris-text-subdued line-clamp-2 mb-2">
                        {product.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-brand-primary">
                          ${product.price}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            // No results
            <div className="p-6 text-center">
              <Search className="h-12 w-12 text-polaris-text-subdued mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No products found</h3>
              <p className="text-polaris-text-subdued mb-4">
                Try searching for something else or browse our collections
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.slice(0, 3).map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setInputValue(search);
                      handleSearch(search);
                    }}
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
