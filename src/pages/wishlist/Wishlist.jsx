import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { AllProductsContext } from "../../context/AllItems";
import ProductCard from "../../components/productCard/ProductCard";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { products } = useContext(AllProductsContext);

  // Join wishlist IDs with product data
  const wishlistItems = wishlist
    .map(w => products.find(p => p.id === w.id))
    .filter(Boolean); // removes null if product not found

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-gray-500 text-lg">
          Your wishlist is empty 💔
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
