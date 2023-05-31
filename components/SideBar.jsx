import React from "react";
import { useState } from "react";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";

import UserProfile from "./UserProfile";
import AdminNotification from "./AdminNotification";
import AdminMessage from "./AdminMessage";

const SideBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [active, setActive] = useState("");

  const sideBarToggleHandler = () => {
    setSideBarToggle(!sideBarToggle);
  };
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const openMessageHandler = () => {
    setShowMessage(true);
    setActive("TAB1");
  };

  const openNotificationHandler = () => {
    setshowNotification(true);
    setActive("TAB2");
  };

  const openUserProfile = () => {
    setShowUserProfile(true);

    setActive("TAB3");
  };

  const closeUserProfileHandler = (value) => {
    setShowUserProfile(value);
  };

  const closeNotificationhandler = (value) => {
    setshowNotification(value);
  };

  const closeMessageHandler = (value) => {
    setShowMessage(value);
  };

  return (
    <>
      <div className="w-full static_content border-2 border-b-green-500 flex  justify-between sm:justify-end items-center p-1">
        <div
          className="sm:hidden h-1 static_content"
          onClick={toggleMenuHandler}
        >
          {!toggleMenu ? (
            <BiMenu> </BiMenu>
          ) : (
            <AiOutlineClose className="bg-red-500 rounded-lg m-1">
              {" "}
            </AiOutlineClose>
          )}
        </div>

        {/* Nav bar */}
        <div className="flex ">
          <div className="flex items-center">
            <div className="p-5 m-1">
              <AiOutlineMessage onClick={openMessageHandler} />
            </div>
            <div className="p-5 m-1" onClick={openNotificationHandler}>
              <IoNotificationsOutline />
            </div>
          </div>
          <div
            className="cursor-pointer flex items-center p-3 gap-1 m-1"
            onClick={openUserProfile}
          >
            <div className="relative">
              <div className="absolute  bottom-0 -right-2">
                <BiHappyAlt className="bg-blue-200 rounded-lg" />
              </div>
            </div>
            <p>Hi, Admin </p>
            <RiArrowDropDownLine> </RiArrowDropDownLine>
          </div>
        </div>
        {/* icon popups */}
        <div className="relative">
          {active === "TAB1" && showMessage && (
            <AdminMessage setCloseMessage={closeMessageHandler} />
          )}
        </div>

        <div className="relative">
          {active === "TAB2" && showNotification && (
            <AdminNotification
              setCloseNotification={closeNotificationhandler}
            />
          )}
        </div>
        <div className="relative ">
          {active === "TAB3" && showUserProfile && (
            <UserProfile setCloseUserProfile={closeUserProfileHandler} />
          )}
        </div>
      </div>
      <div className="flex relative">
        <div
          className={`hide_sidebar h-screen shadow-xl ${
            sideBarToggle ? "w-72" : "w-20"
          } pt-8 p-5 relative duration-300 bg-red-600`}
        >
          <BsFillArrowLeftCircleFill
            onClick={sideBarToggleHandler}
            className={`${
              !sideBarToggle && "rotate-180"
            } bg-white duration-3s text-3xl border cursor-pointer absolute -right-3 rounded-full`}
          />
          <div className="inline-flex ">
            <FaUserPlus className="text-2xl float-left mr-2  rounded cursor-pointer block" />
            <h1
              className={` origin-left font-medium ${
                !sideBarToggle && "scale-0"
              }`}
            >
              Add user
            </h1>
          </div>
        </div>
        {/* </div> */}

        <div className={`  ${!toggleMenu ? "hidden " : "bg-red"} sm:hidden`}>
          <div
            className={`static_content h-screen shadow-xl ${
              sideBarToggle ? "w-20" : "w-72"
            } pt-8 p-5 relative duration-300 `}
          >
            <BsFillArrowLeftCircleFill
              onClick={sideBarToggleHandler}
              className={`${
                sideBarToggle && "rotate-180"
              } bg-white duration-3s text-3xl border cursor-pointer absolute -right-3 rounded-full`}
            />
            <div className="inline-flex ">
              <FaUserPlus className="text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={` origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Add Admin
              </h1>
            </div>
            <div className=" ">
              <BsCalendarEvent className="text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={` origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Calender
              </h1>
            </div>
          </div>
        </div>

        <div className=" h-screen w-full absolute ">
          <div className="">
            <h1>ESPM Admin Dashboard goes here</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
