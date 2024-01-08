import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ children }) => {
const [toggleMenu,setToggleMenu] = useState(null)


const toggleMenuHandler =(value)=> {
  setToggleMenu(value)
}


  return (
    <>
      <div className="flex flex-col w-full h-screen">
       <div className="w-full flex-none">
        <div className="relative flex"> 

       <SideBar toggleMenu={toggleMenu}/>
        </div>
      <Navbar toggleMenu={toggleMenuHandler}/>
       </div>
        <div className="sm:ml-52 p-5">{children}</div>
      </div>
    </>
  );
};

export default Layout;
