import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import { supabase } from "../supabaseClientLibrary/supabaseClient";
import { RiDeleteBin5Line } from "react-icons/ri";

import { SlControlEnd } from "react-icons/sl";
import { SlControlStart } from "react-icons/sl";
import { TfiControlSkipForward } from "react-icons/tfi";
import { TfiControlSkipBackward } from "react-icons/tfi";
import { current } from "tailwindcss/colors";

const RegisteredUserTable = () => {
  const [userData, setUserData] = useState([]);
  const [currentUsersList, setCurrentUsersList] = useState(0);

  const [checked, setChecked] = useState(false);
  const [selectedUsers, setSelectedUser] = useState([]);

  const checkHandler = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        let { data, error } = await supabase.from("userProfile").select("*");

        if (error) {
          throw error("Data not available on server");
        }

        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [setUserData]);

  const usersPerpage = 3;

  const startIndex = currentUsersList * usersPerpage;
  const endIndex = usersPerpage + startIndex;
  const currentUsers = userData.slice(startIndex, endIndex);

  const totalUsersList = Math.ceil(userData.length / usersPerpage);

  const lastUsersList = userData.slice(
    userData.length - usersPerpage,
    userData.length - 1
  );
  // console.log(lastUsersList);

  const nextUsers = () => {
    setCurrentUsersList((prevValue) => prevValue + 1);
  };

  const prevUsers = () => {
    setCurrentUsersList((prevValue) => prevValue - 1);
  };

  return (
    <>
      <div className="my-3 p-3">
        <h1 className="text-xl font-bold">Registered Users</h1>
      </div>
      <div className="w-full p-3">
        <div className="flex items-center cursor-pointer text-red-600 ">
          <RiDeleteBin5Line /> <button>Delete</button>
        </div>

        <div className="overflow-x-auto  ">
          <table className="w-full text-xs text-center overscroll-y-auto ">
            <thead>
              <tr className="w-full border-b-2 bg-gray-200">
                <th scope="col" onChange={checkHandler} checked={checked}>
                  <div className="w-14 py-3">
                    <input type="checkbox" name="" id="" />
                  </div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> First Name</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Last Name</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Link</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Email</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Country</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> City</div>
                </th>
              </tr>
            </thead>

            <tbody className="border ">
              {currentUsers?.map((user) => {
                return (
                  <tr key={user.id} className="border-b-2 my-10">
                    <td>
                      <div className="flex items-center justify-center w-14 py-3">
                        <input type="checkbox"></input>
                      </div>
                    </td>
                    <td>{user.first_name ? user.first_name : "N/A"}</td>
                    <td>{user.last_name ? user.last_name : "N/A"}</td>
                    <td
                      className={
                        user.video_link ? "text-green-500" : "text-red-600"
                      }
                    >
                      <Link
                        href={user.video_link ? user.video_link : ""}
                        target="_blank"
                      >
                        {user.video_link
                          ? "Link available"
                          : "No link provided"}
                      </Link>
                    </td>
                    <td>{user.email ? user.email : "N/A"}</td>
                    <td>{user.country ? user.country : "N/A"}</td>
                    <td>{user.city ? user.city : "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between  bg-gray-200">
          <div className="flex items-center justify-between p-2 gap-2">
            <div>
              <SlControlStart />
            </div>
            {currentUsersList > 0 && (
              <div onClick={prevUsers}>
                <TfiControlSkipBackward className="" />
              </div>
            )}
            <div className="rounded-full w-6 flex items-center justify-center text-black ">
              <a href="">1</a>
            </div>

            <div className="rounded-full w-6 flex items-center justify-center text-black ">
              <a href="">2</a>
            </div>

            <div className="rounded-full w-6 flex items-center justify-center text-black ">
              <a href="">3</a>
            </div>
            {totalUsersList > currentUsersList && (
              <div onClick={nextUsers}>
                <TfiControlSkipForward />
              </div>
            )}
            <div>
              <SlControlEnd />
            </div>
          </div>
          <div className=" p-2">
            {/* <div className="flex justify-center"> */}
            <p>1 of 5 pages</p>
            {/* </div> */}
          </div>
        </div>
        {totalUsersList > currentUsersList ? (
          ""
        ) : (
          <p className="text-red-500">No users to be displayed</p>
        )}
      </div>
    </>
  );
};

export default RegisteredUserTable;
