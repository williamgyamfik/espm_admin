import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full">
        <SideBar />
        <div className="sm:ml-52 ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
