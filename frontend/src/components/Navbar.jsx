import { RiMenu4Fill } from "@remixicon/react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between md:px-10 px-5 py-4 bg-black sticky top-0 left-0 right-0 z-10">
      <Link to="/">
        <img src="./images/logo.png" alt="logo" />
      </Link>
      <div className="hidden md:flex items-center space-x-10">
        <NavLink to="/properties" className="text-white">
          Properties
        </NavLink>
        <a href="mailto:maheshmahesh6336.6336@gmail.com" className="text-white">
          Contact
        </a>
        <a href="#" className="text-white">
          Add Property
        </a>
        <a href="#" className="text-white">
          Login
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <RiMenu4Fill size={30} />
      </div>
    </div>
  );
};
