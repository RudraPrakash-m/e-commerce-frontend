import { FaSearch } from "react-icons/fa";

const SearchBar = () => (
  <div className="hidden md:flex items-center w-[35%] border rounded-md px-3">
    <FaSearch className="text-gray-500" />
    <input
      type="text"
      placeholder="Search products..."
      className="w-full ml-2 py-2 outline-none"
    />
  </div>
);

export default SearchBar;
