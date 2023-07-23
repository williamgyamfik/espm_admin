import React from "react";
import { useState } from "react";
import Link from "next/link";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
RiSettings5Line;
import { BiUserCheck } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiSettings5Line } from "react-icons/ri";

import UserProfile from "./UserProfile";
import AdminNotification from "./AdminNotification";
import AdminMessage from "./AdminMessage";
import RegisterUser from "./RegisterUser";

const SideBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [active, setActive] = useState("");
  const [showRegisterUser, setShowRegisterUser] = useState(false);
  const [showAdminRoles, setShowAdminRoles] = useState(false);

  const registeruserhandler = () => {
    setShowRegisterUser(true);
  };

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

  const closeRegisterUserForm = (value) => {
    setShowRegisterUser(value);
  };

  const adminRoleExpandHandler = () => {
    setShowAdminRoles(true);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center sm:justify-end p-1 static_content border-2 border-b-sky-500">
        <div className="sm:hidden  static_content" onClick={toggleMenuHandler}>
          {!toggleMenu ? (
            <BiMenu> </BiMenu>
          ) : (
            <AiOutlineClose className="text-red-600 rounded-lg m-1">
              {" "}
            </AiOutlineClose>
          )}
        </div>
        <div className="flex justify-end ">
          {/* <div className="flex items-center"> */}
          <div className="p-5 m-1">
            <AiOutlineMessage onClick={openMessageHandler} />
          </div>
          <div className="p-5 m-1" onClick={openNotificationHandler}>
            <IoNotificationsOutline />
          </div>
          {/* </div> */}
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

        {/* Sidebar for mobile screen size */}

        <div
          className={`  ${
            !toggleMenu ? "hidden " : "bg-red"
          } sm:hidden absolute z-50  bg-primary-rich-black`}
        >
          <h1 className="text-white font-semibold text-center m-3 p-2">Menu</h1>
          <div
            className={`static_content h-screen shadow-sky-500/100 shadow-lg ${
              sideBarToggle ? "w-20" : "w-72"
            } pt-8 p-5 relative duration-300 `}
          >
            <BsFillArrowLeftCircleFill
              onClick={sideBarToggleHandler}
              className={`${
                sideBarToggle && "rotate-180"
              } bg-white duration-3s text-3xl border cursor-pointer absolute -right-3 rounded-full`}
            />
<<<<<<< HEAD
            <Link href="/dashboard">
              <div
                className={`${
                  sideBarToggle
                    ? "flex flex-col items-center mb-5 cursor-pointer"
                    : "mb-5"
                } hover:bg-stone-800`}
              >
                <BiHome className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Dashboard
                </h1>
              </div>
            </Link>
            <Link href="/clients">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
                } hover:bg-stone-800`}
              >
                <BiUserCheck className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Registered Clients
                </h1>
              </div>
            </Link>

            <Link href="/email">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
                } hover:bg-stone-800`}
              >
                <MdOutlineEmail className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Email
                </h1>
              </div>
            </Link>
            <Link href="/notification">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
                } hover:bg-stone-800`}
              >
                <IoNotificationsOutline className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Notification
                </h1>
              </div>
            </Link>
            <div
              className={`${
                sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
              } hover:bg-stone-800`}
              onClick={registeruserhandler}
            >
              <FaUserPlus className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Admin roles
              </h1>
            </div>

            <div
              className={`${
                sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
              } hover:bg-stone-800`}
            >
              <RiSettings5Line className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
=======
            <div
              className="flex justify-between  items-center "
              // onClick={registeruserhandler}
            >
              <div className="flex justify-center">
                <FaUserPlus className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                  onClick=""
                >
                  Admin roles
                </h1>
              </div>

              <div
                className="pr-10 text-white"
                onClick={adminRoleExpandHandler}
              >
                <RiArrowDropDownLine />
              </div>
            </div>
            {showAdminRoles && (
              <div
                className={`${
                  showAdminRoles
                    ? "w-40  p-3 flex justify-center items-center "
                    : ""
                } text-white`}
              >
                <ul className="">
                  <li onClick={registeruserhandler}>Add user</li>
                  {showRegisterUser && (
                    <RegisterUser closeRegisterUser={closeRegisterUserForm} />
                  )}
                  <li>Delete user</li>
                  <li>Update user</li>
                  <li>See all users</li>
                </ul>
              </div>
            )}
<div><p>hello</p></div>
            <div className=" ">
              <BsCalendarEvent className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Calender
              </h1>
            </div>
            <div className=" ">
              <BsCalendarEvent className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
>>>>>>> 93b8779156484a76aafb338c73705df14e1d4a27
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Settings
              </h1>
            </div>
            <div
              className={`${
                sideBarToggle ? "flex flex-col items-center mb-5" : "mb-5"
              } hover:bg-stone-800`}
            >
              <BsCalendarEvent className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Profile
              </h1>
            </div>
          </div>
        </div>
        {/* {showRegisterUser && (
          <RegisterUser closeRegisterUser={closeRegisterUserForm} />
        )} */}
      </div>
    </>
  );
};

export default SideBar;
