import Logo from "../assets/logo.avif";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[13vh] bg-white shadow-md flex items-center justify-center gap-6 px-4">
      <Link to="/">
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
