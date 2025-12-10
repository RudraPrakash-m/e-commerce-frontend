import React, { createContext, useContext, useEffect, useState } from "react";

export const AllProductsContext = createContext([]);

const AllItems = ({ children }) => {
  const [products, setProducts] = useState([]);
  //! backend - products api would return all the products available
  const fetchProducts = async () => {
    try {
      const data = [
        {
          id: "m001",
          name: "Men's Casual T-Shirt",
          category: "men",
          price: 799,
          rating: 4.3,
          isWish: false,
          stock: 25,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Premium cotton t-shirt with classic fit.",
        },
        {
          id: "m002",
          name: "Men's Oversized Tee",
          category: "men",
          price: 999,
          rating: 4.5,
          isWish: false,
          stock: 12,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Streetwear-inspired oversized t-shirt.",
        },
        {
          id: "m003",
          name: "Men's Slim Fit Shirt",
          category: "men",
          price: 1299,
          rating: 4.1,
          isWish: false,
          stock: 30,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Slim-fit shirt suitable for formal & casual wear.",
        },
        {
          id: "m004",
          name: "Men's Denim Jeans",
          category: "men",
          price: 1599,
          rating: 4.4,
          isWish: false,
          stock: 20,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Stretchable denim jeans with modern fit.",
        },
        {
          id: "m005",
          name: "Men's Hoodie",
          category: "men",
          price: 1499,
          rating: 4.6,
          isWish: false,
          stock: 15,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Warm fleece hoodie for winter comfort.",
        },
        {
          id: "m006",
          name: "Men's Polo T-Shirt",
          category: "men",
          price: 899,
          rating: 4.2,
          isWish: false,
          stock: 40,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Soft cotton polo with classic collar.",
        },
        {
          id: "m007",
          name: "Men's Sweatpants",
          category: "men",
          price: 1199,
          rating: 4.0,
          isWish: false,
          stock: 18,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Comfortable joggers made with premium fabric.",
        },
        {
          id: "m008",
          name: "Men's Jacket",
          category: "men",
          price: 1999,
          rating: 4.3,
          isWish: false,
          stock: 8,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Lightweight windbreaker jacket.",
        },
        {
          id: "m009",
          name: "Men's Shorts",
          category: "men",
          price: 699,
          rating: 4.1,
          isWish: false,
          stock: 23,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Comfortable shorts for daily wear.",
        },
        {
          id: "m010",
          name: "Men's Formal Trousers",
          category: "men",
          price: 1399,
          rating: 4.7,
          isWish: false,
          stock: 10,
          image:
            "https://www.beyours.in/cdn/shop/files/mocha-flatlay.jpg?v=1760292479",
          description: "Elegant trousers suitable for office and meetings.",
        },

        // -------------------
        // WOMEN (10 items)
        // -------------------
        {
          id: "w001",
          name: "Women's Stylish Top",
          category: "women",
          price: 999,
          rating: 4.5,
          isWish: false,
          stock: 18,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Soft and breathable stylish top.",
        },
        {
          id: "w002",
          name: "Women's Kurti",
          category: "women",
          price: 899,
          rating: 4.4,
          isWish: false,
          stock: 22,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Elegant kurti suitable for office & casual wear.",
        },
        {
          id: "w003",
          name: "Women's Jeans",
          category: "women",
          price: 1299,
          rating: 4.2,
          isWish: false,
          stock: 20,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "High-rise stretchable denim jeans.",
        },
        {
          id: "w004",
          name: "Women's Dress",
          category: "women",
          price: 1499,
          rating: 4.6,
          isWish: false,
          stock: 12,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Beautiful A-line dress for parties.",
        },
        {
          id: "w005",
          name: "Women's Saree",
          category: "women",
          price: 1799,
          rating: 4.3,
          isWish: false,
          stock: 8,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Soft lightweight saree with designer pattern.",
        },
        {
          id: "w006",
          name: "Women's Hoodie",
          category: "women",
          price: 1299,
          rating: 4.1,
          isWish: false,
          stock: 16,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Cozy warm hoodie for winter use.",
        },
        {
          id: "w007",
          name: "Women's Palazzo Pants",
          category: "women",
          price: 799,
          rating: 4.0,
          isWish: false,
          stock: 25,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Soft fabric with wide-leg comfort fit.",
        },
        {
          id: "w008",
          name: "Women's Skirt",
          category: "women",
          price: 899,
          rating: 4.3,
          isWish: false,
          stock: 14,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Trendy skirt perfect for casual outings.",
        },
        {
          id: "w009",
          name: "Women's T-Shirt",
          category: "women",
          price: 699,
          rating: 4.2,
          isWish: false,
          stock: 28,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Comfort fit t-shirt made from pure cotton.",
        },
        {
          id: "w010",
          name: "Women's Jacket",
          category: "women",
          price: 1999,
          rating: 4.7,
          isWish: false,
          stock: 10,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvM0gf5YqqnOSAkV-sdwT1k_YMo3YbJtpEw&s",
          description: "Stylish winter jacket with soft inner lining.",
        },

        // -------------------
        // ELECTRONICS (10)
        // -------------------
        {
          id: "e001",
          name: "Bluetooth Earbuds",
          category: "electronics",
          price: 1499,
          rating: 4.2,
          isWish: false,
          stock: 40,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Wireless earbuds with deep bass.",
        },
        {
          id: "e002",
          name: "Wireless Mouse",
          category: "electronics",
          price: 899,
          rating: 4.3,
          isWish: false,
          stock: 35,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Ergonomic wireless mouse.",
        },
        {
          id: "e003",
          name: "Bluetooth Speaker",
          category: "electronics",
          price: 1299,
          rating: 4.5,
          isWish: false,
          stock: 20,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Portable Bluetooth speaker with rich sound.",
        },
        {
          id: "e004",
          name: "Smartwatch",
          category: "electronics",
          price: 2499,
          rating: 4.1,
          isWish: false,
          stock: 18,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Fitness smartwatch with multiple sport modes.",
        },
        {
          id: "e005",
          name: "Gaming Keyboard",
          category: "electronics",
          price: 1799,
          rating: 4.4,
          isWish: false,
          stock: 15,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Mechanical RGB gaming keyboard.",
        },
        {
          id: "e006",
          name: "Power Bank",
          category: "electronics",
          price: 999,
          rating: 4.0,
          isWish: false,
          stock: 50,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "10000mAh power bank with fast charging.",
        },
        {
          id: "e007",
          name: "Webcam",
          category: "electronics",
          price: 1299,
          rating: 4.3,
          isWish: false,
          stock: 12,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Full HD webcam for meetings and streaming.",
        },
        {
          id: "e008",
          name: "USB Hub",
          category: "electronics",
          price: 599,
          rating: 4.1,
          isWish: false,
          stock: 30,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "4-port USB hub for multitasking.",
        },
        {
          id: "e009",
          name: "Wired Earphones",
          category: "electronics",
          price: 499,
          rating: 4.0,
          isWish: false,
          stock: 45,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "Comfortable earphones with clear sound.",
        },
        {
          id: "e010",
          name: "Portable Hard Drive",
          category: "electronics",
          price: 3499,
          rating: 4.6,
          isWish: false,
          stock: 10,
          image:
            "https://zebronics.com/cdn/shop/products/ZEB-BUDS-30-pic10.jpg?v=1679052543&width=2048",
          description: "1TB external HDD for storage needs.",
        },

        // -------------------
        // HOME APPLIANCES (10)
        // -------------------
        {
          id: "h001",
          name: "Electric Kettle",
          category: "home",
          price: 1299,
          rating: 4.1,
          isWish: false,
          stock: 30,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Fast boiling electric kettle.",
        },
        {
          id: "h002",
          name: "Mixer Grinder",
          category: "home",
          price: 2499,
          rating: 4.3,
          isWish: false,
          stock: 15,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Powerful mixer grinder for kitchen use.",
        },
        {
          id: "h003",
          name: "Rice Cooker",
          category: "home",
          price: 1999,
          rating: 4.2,
          isWish: false,
          stock: 18,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Electric cooker with auto shut-off mode.",
        },
        {
          id: "h004",
          name: "Steam Iron",
          category: "home",
          price: 999,
          rating: 4.1,
          isWish: false,
          stock: 25,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Non-stick soleplate steam iron.",
        },
        {
          id: "h005",
          name: "Air Fryer",
          category: "home",
          price: 3499,
          rating: 4.5,
          isWish: false,
          stock: 12,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Oil-free healthy air fryer.",
        },
        {
          id: "h006",
          name: "Electric Chimney",
          category: "home",
          price: 5999,
          rating: 4.6,
          isWish: false,
          stock: 8,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Powerful suction chimney for kitchen.",
        },
        {
          id: "h007",
          name: "Water Purifier",
          category: "home",
          price: 7999,
          rating: 4.4,
          isWish: false,
          stock: 10,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "RO + UV water purifier.",
        },
        {
          id: "h008",
          name: "Vacuum Cleaner",
          category: "home",
          price: 2999,
          rating: 4.3,
          isWish: false,
          stock: 14,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Portable multipurpose vacuum cleaner.",
        },
        {
          id: "h009",
          name: "Room Heater",
          category: "home",
          price: 1499,
          rating: 4.2,
          isWish: false,
          stock: 20,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Fast heating heater for winter.",
        },
        {
          id: "h010",
          name: "Induction Cooktop",
          category: "home",
          price: 2699,
          rating: 4.5,
          isWish: false,
          stock: 17,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGqRA_vzGO_OEtP6Gh4GFxIV2c0eba5IWYw&s",
          description: "Energy-efficient induction cooktop.",
        },
      ];
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <AllProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </AllProductsContext.Provider>
  );
};

export default AllItems;
