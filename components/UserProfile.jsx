import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { supabase } from "@/supabaseClientLibrary/supabaseClient";

import { useRouter } from "next/router";

import { VscAccount } from "react-icons/vsc";
import { BsCalendarEvent } from "react-icons/bs";
import { BsInbox } from "react-icons/bs";

const UserProfile = (props) => {
  const closeUserProfile = () => {
    props.setCloseUserProfile(false);
  };

  const router = useRouter();

  async function signOutHandler() {
    try {
      const { error } = await supabase.auth.signOut();
      router.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-64  absolute z-50 bg-white right-2 top-20 p-8 border shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-5 ">
        <h2 className="font-semibold">User profile</h2>
        <div onClick={closeUserProfile}>
          <AiOutlineClose className="text-red-500  rounded-lg cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center hover:bg-slate-200 gap-5 border-b-2 cursor-pointer mb-5">
        <div>
          <VscAccount />
        </div>
        <div className=" transition duration-150 hover:ease-in-out ">
          <h2 className="font-semibold">My profile</h2>
          <p className="text-sm">Account settings</p>
        </div>
      </div>
      <div className="flex items-center  gap-5 border-b-2 cursor-pointer mb-5">
        <div>
          <BsInbox />
        </div>
        <div className="">
          <h2 className="font-semibold">My Inbox</h2>
          <p className="text-sm">Messages and Emails</p>
        </div>
      </div>
      <div className="flex items-center  gap-5 border-b-2 cursor-pointer mb-5">
        <div>
          <BsCalendarEvent />
        </div>
        <div className="">
          <h2 className="font-semibold">My Tasks</h2>
          <p className="text-sm">To-do and daily tasks</p>
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-center">
        <button
          className="w-20 hover:bg-green-500 bg-red-600 text-white"
          onClick={signOutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
