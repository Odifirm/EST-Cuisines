import React from "react";
import { Icons } from "../../Library/IconLybrary";
import { useStateContext } from "../../Context/ContextProvider";

const Navbar = () => {
  const { activeContactSection, setActiveContactionSection } =
    useStateContext();

  const toggleMenu = () => {
    setActiveContactionSection(!activeContactSection);
  };
  return (
    <>
      <nav className=" font-mare bg-white mx-auto p-4 flex justify-between items-center sticky top-0 z-50">
        <span className="font-bold text-xl">E S T Cuisines</span>
        <div className="font-mare text-textcolor text-sm hidden md:flex space-x-10 mx-auto">
          <a
            href="/"
            className="text-gray-700 hover:text-textcolor underline-animation"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-gray-700 hover:text-textcolor underline-animation"
          >
            Menu
          </a>
          <a
            href="/services"
            className="text-gray-700 hover:text-textcolor underline-animation"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-textcolor underline-animation"
          >
            Contact
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-textcolor underline-animation"
          >
            About
          </a>
        </div>
        <div className="font-mare flex space-x-4">
          <Icons.Person className="font-light cursor-pointer" />
          <Icons.GridMenu
            onClick={toggleMenu}
            className="font-light cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
