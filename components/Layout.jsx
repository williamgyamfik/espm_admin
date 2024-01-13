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
      <div className="p-4 mt-14 sm:ml-64  ">{children}</div>
    </>
  );
};

export default Layout;
