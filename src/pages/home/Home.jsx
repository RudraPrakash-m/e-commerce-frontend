import React, { useContext } from "react";
import { AllProductsContext } from "../../context/AllItems";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

const Home = () => {
  const { products } = useContext(AllProductsContext);

  // Show first 12 products (mixed categories)
  const mixedProducts = products.slice(0, 12);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="w-full h-[300px] bg-blue-600 flex items-center justify-center text-white text-center px-6">
        <div>
          <h1 className="text-4xl font-bold mb-3">Welcome to EStore</h1>
          <p className="text-lg opacity-90">
            Discover the best deals across all categories.
          </p>
          <NavLink
            to="/deals"
            className="mt-4 inline-block px-6 py-2 bg-white text-blue-700 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Explore Deals
          </NavLink>
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="px-6 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

          {[
            {
              name: "Men",
              link: "/cat/men",
              img: "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
            },
            {
              name: "Women",
              link: "/cat/women",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
            },
            {
              name: "Electronics",
              link: "/cat/electronics",
              img: "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
            },
            {
              name: "Home Appliances",
              link: "/cat/home",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
            }
          ].map((cat, idx) => (
            <NavLink
              key={idx}
              to={cat.link}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden block"
            >
              <img src={cat.img} className="w-full h-40 object-cover" />
              <p className="text-center py-3 font-medium">{cat.name}</p>
            </NavLink>
          ))}

        </div>
      </div>

      {/* MIXED PRODUCTS SECTION */}
      <div className="px-6 mt-12 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Products</h2>

        {mixedProducts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mixedProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
