import React from "react";
import { Outlet } from "react-router-dom";

import { ContactWidget, Footer, Navbar } from "../Components";

import { useStateContext } from "../Context/ContextProvider";

const Home = () => {
  const { activeMenu, activeProfile, setActiveProfile } = useStateContext();

  const handletoggleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div className="bg-primary relative">
      <ContactWidget />
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
