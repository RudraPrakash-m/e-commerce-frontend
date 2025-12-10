import { NavLink } from "react-router-dom";
import { useState } from "react";

const CategoriesDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="hover:text-blue-600">Categories</span>

      {open && (
        <div className="absolute bg-white shadow-md border rounded-md mt-1 w-40 p-2 z-40">
          <NavLink to="/cat/men" className="block px-3 py-2 hover:bg-gray-100">
            Men
          </NavLink>
          <NavLink to="/cat/women" className="block px-3 py-2 hover:bg-gray-100">
            Women
          </NavLink>
          <NavLink to="/cat/electronics" className="block px-3 py-2 hover:bg-gray-100">
            Electronics
          </NavLink>
          <NavLink to="/cat/home" className="block px-3 py-2 hover:bg-gray-100">
            Home
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
