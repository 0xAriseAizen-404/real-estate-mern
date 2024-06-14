import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserDetailContext } from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../api/apiFunctions";

export const Layout = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {
      const res = await getAccessTokenSilently();
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res);
    };

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated, getAccessTokenSilently, mutate, setUserDetails]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
