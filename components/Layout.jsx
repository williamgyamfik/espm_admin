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
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <SideBar />
        <div className="p-4 min-h-0 overflow-auto  flex flex-col flex-grow ml:64">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
