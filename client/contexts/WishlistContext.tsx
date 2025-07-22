import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '@shared/products';

interface WishlistState {
  items: Product[];
  isOpen: boolean;
}

type WishlistAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'TOGGLE_WISHLIST' }
  | { type: 'OPEN_WISHLIST' }
  | { type: 'CLOSE_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; items: Product[] };

const initialState: WishlistState = {
  items: [],
  isOpen: false,
};

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(item => item.id === action.product.id);
      if (exists) return state;
      
      return {
        ...state,
        items: [...state.items, action.product],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId),
      };

    case 'CLEAR_WISHLIST':
      return { ...state, items: [] };

    case 'TOGGLE_WISHLIST':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_WISHLIST':
      return { ...state, isOpen: true };

    case 'CLOSE_WISHLIST':
      return { ...state, isOpen: false };

    case 'LOAD_WISHLIST':
      return { ...state, items: action.items };

    default:
      return state;
  }
}

interface WishlistContextType {
  state: WishlistState;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  toggleWishlist: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  getTotalItems: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('omonormi-wishlist');
    if (stored) {
      try {
        const items = JSON.parse(stored);
        dispatch({ type: 'LOAD_WISHLIST', items });
      } catch (error) {
        console.error('Error loading wishlist:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage when items change
  useEffect(() => {
    localStorage.setItem('omonormi-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST' });
  };

  const openWishlist = () => {
    dispatch({ type: 'OPEN_WISHLIST' });
  };

  const closeWishlist = () => {
    dispatch({ type: 'CLOSE_WISHLIST' });
  };

  const isInWishlist = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  const getTotalItems = () => {
    return state.items.length;
  };

  const value: WishlistContextType = {
    state,
    addItem,
    removeItem,
    clearWishlist,
    toggleWishlist,
    openWishlist,
    closeWishlist,
    isInWishlist,
    getTotalItems,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
