import React, { use, useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ item }) => {
  const { cart, addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const inCart = cart.some(ci => ci.id === item.id);
  const inWishlist = wishlist.some(w => w.id === item.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item.id);
    }
  };

  return (
    <div className="w-full max-w-xs border rounded-lg shadow hover:shadow-lg transition p-3 bg-white">

      <div className="w-full h-48 overflow-hidden rounded-md">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="mt-3">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-sm text-gray-500 capitalize">{item.category}</p>

        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          <FaStar />
          <span className="text-gray-700 font-medium">{item.rating}</span>
        </div>

        <p className="text-xl font-bold mt-2">₹{item.price}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        {/* Add to cart */}
        <button
          onClick={() => addToCart(item.id)}
          className={`px-4 py-2 rounded-md transition ${
            inCart
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {inCart ? "Add More" : "Add to Cart"}
        </button>

        {/* Wishlist Heart */}
        <button
          onClick={handleWishlist}
          className={`text-xl transition ${
            inWishlist ? "text-red-500" : "text-gray-600 hover:text-red-500"
          }`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
