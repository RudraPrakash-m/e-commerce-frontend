import { NavLink } from "react-router-dom";
import CategoriesDropdown from "./CategoriesDropdown";

const DesktopMenu = () => (
  <ul className="hidden md:flex items-center gap-10 text-lg">
    <NavLink to="/" className="hover:text-blue-600">
      Home
    </NavLink>

    <CategoriesDropdown />

    <NavLink to="/deals" className="hover:text-blue-600">
      Deals
    </NavLink>
  </ul>
);

export default DesktopMenu;
