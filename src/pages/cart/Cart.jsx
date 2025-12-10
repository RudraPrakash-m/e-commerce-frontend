import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AllProductsContext } from "../../context/AllItems";

const Cart = () => {
  const { cart, addQty, subQty, removeFromCart, addToCart } = useContext(CartContext);
  const { products } = useContext(AllProductsContext);

  // console.log(cart);
  

  // Merge product details + qty
  const fullCart = cart.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return { ...product, qty: cartItem.qty };
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {fullCart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 border p-4 rounded-lg shadow mb-4"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-md object-cover"
          />

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600 capitalize">{item.category}</p>
            <p className="font-bold mt-1">₹{item.price}</p>
          </div>

          {/* Qty buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => subQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold">{item.qty}</span>

            <button
              onClick={() => addQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 font-bold"
          >
            X
          </button>
        </div>
      ))}

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
