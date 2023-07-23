import React from "react";
import SideBar from "../components/SideBar";
const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
