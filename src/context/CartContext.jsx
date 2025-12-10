// context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // fake backend cart seed

  //! backend - cart product api would return all the products in the cart with their quantities
  const FAKE_CART = [
    { id: "m001", qty: 2 },
    { id: "e003", qty: 1 }
  ];

  const [cart, setCart] = useState([]);

  // load "server" cart once
  useEffect(() => {
    const load = () => {
      setTimeout(() => setCart(FAKE_CART), 200);
    };
    load();
  }, []);

  // add item (if exists -> increment, else -> add with qty 1)
  const addToCart = (id) => {
    setCart(prev => {
      const found = prev.find(i => i.id === id);
      if (found) {
        return prev.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  // increment qty
  const addQty = (id) => {
    setCart(prev => prev.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  // decrement qty (if qty becomes 0 -> remove)
  const subQty = (id) => {
    setCart(prev =>
      prev
        .map(i => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
    );
  };

  // remove completely
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      addQty,
      subQty,
      removeFromCart,
      setCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = () => useContext(CartContext);
// export default CartContext;
