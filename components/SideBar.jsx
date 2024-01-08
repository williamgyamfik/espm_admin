import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

// import { useSession } from "@supabase/auth-helpers-react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import companyLogo from "../assets/images/companyLogoNoBkgrd.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { BiUserCheck } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { FcLock } from "react-icons/fc";
import { MdOutlineLockReset } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiSettings5Line } from "react-icons/ri";

import UserProfile from "./UserProfile";
import AdminNotification from "./AdminNotification";
import AdminMessage from "./AdminMessage";
import RegisterUser from "./RegisterUser";
import AdminPopUp from "./AdminPopUp";

const SideBar = ({toggleMenu}) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRegisterUser, setShowRegisterUser] = useState(false);
  const [active, setActive] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [closeToggle,setCloseToggle] = useState(null)

  // const session = useSessionContext();
  const registeruserhandler = () => {
    setShowRegisterUser(true);
  };

  const sideBarToggleHandler = () => {
    setSideBarToggle(true);
  };
  // const toggleMenuHandler = () => {
  //   setToggleMenu(!toggleMenu);
  // };


  const closeMenuHandler = () => {
    setCloseToggle(false)
    console.log("clicked")
  };


  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [session]);

console.log(toggleMenu)

  return (
    <>
      

      {/* <div className=" flex relative w-90" onClick={closeMenuHandler}>
     { toggleMenu?  <div className="h-screen bg-green-100 z-50 absolute shadow-xl w-44 ">
          <div className="p-2 mt-10">
            <Link href="/dashboard">
              <div className="flex  items-center  mb-10">
                <BiHome className="text-pink-500 text-2xl float-left mr-2  rounded cursor-pointer block" />
                <p className="text-pink-500 font-bold">Dashboard</p>
              </div>
            </Link>
            <Link href="/clients">
              <div className="flex  items-center  mb-10">
                <BiUserCheck className="text-green-500 text-2xl float-left mr-2  rounded cursor-pointer block" />
                <p className="text-green-500 font-bold">Clients</p>
              </div>
            </Link>

            <Link href="/admin_roles">
              <div className="flex  items-center  mb-10">
                <RiAdminLine className="text-black text-2xl float-left mr-2  rounded cursor-pointer block" />
                <p className="text-black font-bold">Admin roles</p>
              </div>
            </Link>
            <div className="flex  items-center  mb-10 cursor-pointer">
              <MdOutlineLockReset className="text-sky-500 text-2xl float-left mr-2  rounded cursor-pointer block" />
              <p className="text-sky-500 font-bold">Reset password</p>
            </div>
            <div className="flex items-center mb-10 cursor-pointer">
              <GoSignOut className="text-red-500 text-2xl float-left mr-2  rounded cursor-pointer block" />
              <p className="text-red-500 font-bold">Sign out</p>
            </div>
          </div>
        </div> : null}


      </div> */}

<div className="flex relative w-full">
      {toggleMenu ? (
        <div className="h-screen bg-green-100 z-50 absolute shadow-xl w-44" onClick={closeMenuHandler}>
          <div className="p-2">
          <div className="flex justify-center p-2 border-b-2 border-green-500 mb-10">
              <Image src={companyLogo} width="150"/>
            </div>
            <Link href="/dashboard">
              <div className="flex items-center mb-10">
                <BiHome className="text-pink-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-pink-500 font-bold">Dashboard</p>
              </div>
            </Link>
            <Link href="/clients">
              <div className="flex items-center mb-10">
                <BiUserCheck className="text-green-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-green-500 font-bold">Clients</p>
              </div>
            </Link>
            <Link href="/admin_roles">
              <div className="flex items-center mb-10">
                <RiAdminLine className="text-black text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-black font-bold">Admin roles</p>
              </div>
            </Link>
            <div className="flex items-center mb-10 cursor-pointer">
              <MdOutlineLockReset className="text-sky-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
              <p className="text-sky-500 font-bold">Reset password</p>
            </div>
            <div className="flex items-center mb-10 cursor-pointer">
              <GoSignOut className="text-red-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
              <p className="text-red-500 font-bold">Sign out</p>
            </div>
          </div>
        </div>
      ) : null}


<div className=" h-screen bg-green-100 z-50 absolute shadow-xl w-90 hide_sidebar" onClick={closeMenuHandler}>
          <div className="p-2 ">
            <div className="flex justify-center p-2 border-b-2 border-green-500 mb-10">
              <Image src={companyLogo} width="150"/>
            </div>
            <Link href="/dashboard">
              <div className="flex items-center mb-10">
                <BiHome className="text-pink-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-pink-500 font-bold">Dashboard</p>
              </div>
            </Link>
            <Link href="/clients">
              <div className="flex items-center mb-10">
                <BiUserCheck className="text-green-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-green-500 font-bold">Clients</p>
              </div>
            </Link>
            <Link href="/admin_roles">
              <div className="flex items-center mb-10">
                <RiAdminLine className="text-black text-2xl float-left mr-2 rounded cursor-pointer block" />
                <p className="text-black font-bold">Admin roles</p>
              </div>
            </Link>
            <div className="flex items-center mb-10 cursor-pointer">
              <MdOutlineLockReset className="text-sky-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
              <p className="text-sky-500 font-bold">Reset password</p>
            </div>
            <div className="flex items-center mb-10 cursor-pointer">
              <GoSignOut className="text-red-500 text-2xl float-left mr-2 rounded cursor-pointer block" />
              <p className="text-red-500 font-bold">Sign out</p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default SideBar;


{/* {loggedIn ? (
        <nav className="w-full flex justify-between items-center sm:justify-end p-1 static_content border-2 border-b-sky-500">
          <div
            className="sm:hidden  static_content"
            onClick={toggleMenuHandler}
          >
            {!toggleMenu ? (
              <BiMenu> </BiMenu>
            ) : (
              <AiOutlineClose className="text-red-600 rounded-lg m-1">
                {" "}
              </AiOutlineClose>
            )}
          </div>
          <div className="flex justify-end ">
            <div className="p-5 m-1">
              <AiOutlineMessage onClick={openMessageHandler} />
            </div>
            <div className="p-5 m-1" onClick={openNotificationHandler}>
              <IoNotificationsOutline />
            </div>

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

            <div className="relative ">
              {showMessage && (
                <AdminPopUp setCloseMessage={closeMessageHandler} />
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
        </nav>
      ) : null} */}

      {/* <div className="flex relative w-64"> */}
      <div
      // className={`hide_sidebar h-screen shadow-xl ${
      //   sideBarToggle ? "w-72" : "w-20"
      // } pt-8 p-5  duration-300 bg-red-600 z-50 absolute`}
      // className="h-screen absolute  hide_sidebar w-44 bg-yellow-500"
      >
        {/* <BsFillArrowLeftCircleFill
            onClick={sideBarToggleHandler}
            className={`${
              !sideBarToggle && "rotate-180"
            } bg-white duration-3s text-3xl border cursor-pointer absolute -right-3 rounded-full`}
          /> */}
        {/* <div className="inline-flex "> */}
        {/* <FaUserPlus className="text-2xl float-left mr-2  rounded cursor-pointer block" />
            <h1
              className={` origin-left font-medium ${
                !sideBarToggle && "scale-0"
              }`}
            >
             <Link href="/dashboard">Dashboard</Link> 
            </h1> */}

        {/* <Link href="/dashboard">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
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

          </div>
        </div> */}

        {/* Sidebar for mobile screen size */}
        {/* 
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
            <Link href="/dashboard">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
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
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
              >
                <BiUserCheck className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Registered clients
                </h1>
              </div>
            </Link> */}

        {/* <Link href="/email">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
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
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
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
            </Link> */}

        {/* <div
              className={`${
                sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
              } hover:bg-stone-800`}
            >
              <RiSettings5Line className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Settings
              </h1>
            </div> */}
        {/* <div
              className={`${
                sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
              } hover:bg-stone-800 cursor-pointer `}
            >
              <BsCalendarEvent className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
              <h1
                className={`text-sky-500 origin-left font-medium ${
                  sideBarToggle && "scale-0"
                }`}
              >
                Profile
              </h1>
            </div> */}
        {/* <Link href="/admin_roles">
              <div
                className={`${
                  sideBarToggle ? "flex flex-col items-center mb-5" : "mb-10"
                } hover:bg-stone-800 cursor-pointer`}
                onClick={registeruserhandler}
              >
                <FcLock className="text-white text-2xl float-left mr-2  rounded cursor-pointer block" />
                <h1
                  className={`text-sky-500 origin-left font-medium ${
                    sideBarToggle && "scale-0"
                  }`}
                >
                  Admin roles
                </h1>
              </div>
            </Link>
          </div>
        </div> */}
        {/* 
        {showRegisterUser && (
          <RegisterUser closeRegisterUser={closeRegisterUserForm} />
        )} */}
      </div>