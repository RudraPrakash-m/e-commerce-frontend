import { NavLink } from "react-router-dom";

const ProfileDropdown = () => (
  <div className="absolute right-0 bg-white border shadow-md rounded-md w-40 mt-3 z-40">
    <NavLink className="block px-3 py-2 hover:bg-gray-100" to="/profile">
      My Profile
    </NavLink>
    <NavLink className="block px-3 py-2 hover:bg-gray-100" to="/orders">
      My Orders
    </NavLink>
    <NavLink className="block px-3 py-2 hover:bg-gray-100" to="/wishlist">
      Wishlist
    </NavLink>
    <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
      Logout
    </button>
  </div>
);

export default ProfileDropdown;
