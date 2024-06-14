import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Suspense, useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { Properties } from "./Pages/Properties";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import { Property } from "./Pages/Property";
import { UserDetailContext } from "./context/UserDetailContext";

export default function App() {
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserDetailContext.Provider>
    </>
  );
}
