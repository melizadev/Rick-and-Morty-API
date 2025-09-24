import Logo from "../assets/logo.avif";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full min-h-[13vh] h-full bg-white shadow-md flex lg:flex-row md:flex-row sm:flex-row flex-col  items-center justify-center gap-2 p-2 md:gap-6  lg:gap-6">
      <Link to="/Rick-and-Morty-API/">
        <img src={Logo} alt="" className="h-[70px] jello-horizontal" />
      </Link>
      <Link
        to="/characters"
        className="text-[20px] font-indie relative inline-block cursor-pointer text-2xl font-bold text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Characters
      </Link> 
      <Link
        to="/episodes"
        className="text-[20px] font-indie relative inline-block cursor-pointer text-2xl font-bold text-gray-800 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Episodes
      </Link>
    </div>
  );
};

export default Navbar;
