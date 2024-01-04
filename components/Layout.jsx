import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <SideBar />
        <div className="sm:ml-64 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default Layout;
