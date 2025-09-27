import Logo from "../assets/logo.avif";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      setIsOpen(false);
    }
  });
  return (
    <div className="w-full h-[15vh] flex items-center justify-center relative">
      <div className="container w-full flex items-center justify-between bg-white text-white p-2">
        <div className="flex items-center">
          <Link to="/rick-and-morty-api/">
            <img src={Logo} alt="" className="w-[250px]" />
          </Link>
        </div>
        <div className="gap-4 text-lg text-neutral-800 font-fredoka hidden sm:flex md:flex lg:flex">
          <Link
            to="/rick-and-morty-api/characters"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Characters
          </Link>
          <Link
            to="/rick-and-morty-api/episodes"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Episodes
          </Link>
          <Link
            to="/rick-and-morty-api/locations"
            className="text-lg font-fredoka relative inline-block cursor-pointer text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Locations
          </Link>
        </div>
        <button
          className="text-3xl text-neutral-800 block sm:hidden md:hidden lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu />
        </button>
        {isOpen && (
          <div className="gap-2 flex flex-col text-lg text-neutral-800 font-fredoka absolute right-0 top-[15vh] p-4 rounded-b-md bg-gray-50">
            <Link to="/rick-and-morty-api/characters">Characters</Link>
            <Link to="/rick-and-morty-api/episodes">Episodes</Link>
            <Link to="/rick-and-morty-api/locations">Locations</Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
