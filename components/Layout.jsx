import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg  mt-14">{children}</div>
      </div>
    </>
  );
};

export default Layout;
