import { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Fake backend seed wishlist
  //! backend - wishlist product api would return all the products in the wishlist with their quantities
  const FAKE_WISHLIST = [
    { id: "w004" },
    { id: "m002" }
  ];

  const [wishlist, setWishlist] = useState([]);

  // load wishlist from "server"
  useEffect(() => {
    const load = () => {
      setTimeout(() => setWishlist(FAKE_WISHLIST), 200);
    };
    load();
  }, []);

  // Add to wishlist (no duplicates)
  const addToWishlist = (id) => {
    setWishlist(prev => {
      const exists = prev.some(i => i.id === id);
      if (exists) return prev; // do nothing if already exists
      return [...prev, { id }];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(i => i.id !== id));
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      setWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
