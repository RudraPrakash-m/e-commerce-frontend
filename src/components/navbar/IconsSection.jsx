import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../../context/CartContext";

const IconsSection = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const {user,isAuthenticated,loginWithRedirect} = useAuth0();

  const {cart, addQty, subQty, removeFromCart } = useContext(CartContext);
  
  const totalItems = cart.reduce((sum, item)=>sum+item.qty,0)
  
  

  return (
    <div className="hidden md:flex items-center gap-6 text-xl">

      <NavLink to="/wishlist">
        <FaHeart className="hover:text-red-500" />
      </NavLink>

      <NavLink to="/cart" className="relative">
        <FaShoppingCart className="hover:text-blue-600" />
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          {totalItems}
        </span>
      </NavLink>

      {!isAuthenticated ? (
        <button onClick={loginWithRedirect} className="px-4 py-1 rounded-md border hover:bg-gray-100">Login</button>
      ) : (
        <div className="relative">
          <FaUserCircle
            className="cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {profileOpen && <ProfileDropdown />}
        </div>
      )}
    </div>
  );
};

export default IconsSection;
