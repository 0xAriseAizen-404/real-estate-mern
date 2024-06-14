import { useAuth0 } from "@auth0/auth0-react";
import { RiMenu4Fill } from "@remixicon/react";
import { Link, NavLink } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

export const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
        {!isAuthenticated ? (
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all rounded-md"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        ) : (
          <ProfileMenu user={user} logout={logout} />
        )}
      </div>
      <div className="md:hidden flex items-center">
        <RiMenu4Fill size={30} />
      </div>
    </div>
  );
};
