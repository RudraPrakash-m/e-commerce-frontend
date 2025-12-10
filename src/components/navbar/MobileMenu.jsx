import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import MobileCategory from "./MobileCategory";

const MobileMenu = ({ closeMenu, isLoggedIn }) => {
  return (
    <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 md:hidden z-50">

      {/* Search Bar */}
      <div className="flex items-center border rounded-md px-3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full ml-2 py-2 outline-none"
        />
      </div>

      <NavLink to="/" className="text-lg" onClick={closeMenu}>
        Home
      </NavLink>

      <MobileCategory />

      <NavLink to="/deals" onClick={closeMenu}>Deals</NavLink>

      <NavLink to="/wishlist" className="flex items-center gap-3 text-lg">
        <FaHeart /> Wishlist
      </NavLink>

      <NavLink to="/cart" className="flex items-center gap-3 text-lg">
        <FaShoppingCart /> Cart
      </NavLink>

      {!isLoggedIn ? (
        <NavLink
          to="/login"
          className="flex items-center gap-3 text-lg"
          onClick={closeMenu}
        >
          <FaUserCircle /> Login
        </NavLink>
      ) : (
        <div className="flex flex-col gap-2 text-lg">
          <NavLink to="/profile" onClick={closeMenu}>My Profile</NavLink>
          <NavLink to="/orders" onClick={closeMenu}>My Orders</NavLink>
          <NavLink to="/wishlist" onClick={closeMenu}>Wishlist</NavLink>
          <button onClick={closeMenu}>Logout</button>
        </div>
      )}

    </div>
  );
};

export default MobileMenu;
