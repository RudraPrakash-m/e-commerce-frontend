import { NavLink } from "react-router-dom";

const MobileCategory = () => (
  <details className="text-lg">
    <summary className="cursor-pointer">Categories</summary>
    <div className="flex flex-col pl-4 mt-2 gap-2">
      <NavLink to="/cat/men">Men</NavLink>
      <NavLink to="/cat/women">Women</NavLink>
      <NavLink to="/cat/electronics">Electronics</NavLink>
      <NavLink to="/cat/home">Home</NavLink>
    </div>
  </details>
);

export default MobileCategory;
