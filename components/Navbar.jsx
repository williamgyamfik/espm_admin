import React from "react";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import AdminPopUp from "./AdminPopUp";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useSessionContext } from "@supabase/auth-helpers-react";

const Navbar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { session } = useSessionContext();

  const openUserProfile = () => {
    setShowUserProfile(true);
    setShowMessage(true);
  };

  const closeMessageHandler = (value) => {
    setShowMessage(value);
  };
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [session]);

  return (
    <>
      {loggedIn ? (
        <nav className="w-full  flex justify-between items-center sm:justify-end p-1 border-b-2">
          <div
            className="sm:hidden  static_content"
            onClick={toggleMenuHandler}
          >
            {!toggleMenu ? (
              <BiMenu> </BiMenu>
            ) : (
              <AiOutlineClose className="text-red-600 rounded-lg m-1"></AiOutlineClose>
            )}
          </div>

          <div className="flex justify-end ">
            <div
              className="cursor-pointer flex items-center p-3 gap-1 m-1"
              onClick={openUserProfile}
            >
              <div className="relative">
                <div className="absolute  bottom-0 -right-2">
                  <BiHappyAlt className=" text-sky-500 rounded-lg" />
                </div>
              </div>
              <p>Hi, Admin </p>
              <RiArrowDropDownLine> </RiArrowDropDownLine>
            </div>
            <div className="relative ">
              {showMessage && (
                <AdminPopUp setCloseMessage={closeMessageHandler} />
              )}
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
