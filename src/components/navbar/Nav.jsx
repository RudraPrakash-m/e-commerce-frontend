import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopMenu from "./DesktopMenu";
import IconsSection from "./IconsSection";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full h-[70px] bg-white border-b shadow-sm flex items-center px-6 justify-between sticky top-0 z-50">
      
      <Logo />

      <SearchBar />

      <DesktopMenu />

      <IconsSection />

      {/* Mobile toggle */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      {mobileOpen && (
        <MobileMenu
          closeMenu={() => setMobileOpen(false)}
          isLoggedIn={isLoggedIn}
        />
      )}
    </nav>
  );
};

export default Nav;
