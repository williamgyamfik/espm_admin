import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/router";

import { SlControlEnd } from "react-icons/sl";
import { SlControlStart } from "react-icons/sl";
import { TfiControlSkipForward } from "react-icons/tfi";
import { TfiControlSkipBackward } from "react-icons/tfi";
import { FaUserPlus } from "react-icons/fa";
import RegisterUser from "./RegisterUser";

const RegisteredUserTable = ({
  data,
  page,
  lastPage,
  limit,
  totalDataCount,
  count,
  searchValue,
}) => {
  const router = useRouter();

  console.log(data.data, page, lastPage, limit, totalDataCount, count, router);

  const nextUsers = () => {
    if (lastPage) {
      return;
    }
    router.push(`/clients?page=${page + 1}&limit=${limit}`);
  };

  const prevUsers = () => {
    if (page > 1) {
      router.push(`/clients?page=${page - 1}&limit=${limit - 1}`);
    }
  };

  const registerUserHandler = () => {
    setShowRegisterForm(true);
  };

  const closeRegisterUser = (value) => {
    setShowRegisterForm(value);
  };

  // const deleteRowById = async (id) => {
  //   const { error } = await supabase.from("userProfile").delete().eq("id", id);
  //   console.log(error);
  // };

  const deleteHandler = async (id) => {
    const { error } = await supabase.from("userProfile").delete().eq("id", id);

    const filteredUsers = data.data.filter((item) => item.id !== id);
  };

  return (
    <>
      <div className="my-3 flex justify-between items-center mt-10">
        <div className="p-3">
          <h1 className="text-xl font-bold">Registered Users</h1>
        </div>
        <div className="text-right " onClick={registerUserHandler}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <div className="flex justify-end items-center ">
              <FaUserPlus></FaUserPlus>
              <p className="ml-2"> ADD ADMIN</p>
            </div>
          </button>
        </div>
      </div>

      <div className="w-full p-3">
        <div className="flex items-center cursor-pointer text-red-600 ">
          <RiDeleteBin5Line /> <button>Delete</button>
        </div>
      </div>
      <div className="  w-full max-w-full min-h-0">
        <div className="w-full overflow-x-auto h-96">
          <table className="w-full text-xs text-center overscroll-y-auto overscoll-x-auto">
            <thead>
              <tr className="w-full border-b-2 bg-gray-200">
                <th scope="col">
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
                  <div className="w-48 py-3"> Email</div>
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
              {data.data?.map((user) => {
                return (
                  <tr key={user.id} className="border-b-2 my-10">
                    <td>
                      <div className="flex items-center justify-center w-14 py-3">
                        <input
                          type="checkbox"
                          onClick={() => deleteHandler(user.id)}
                        ></input>
                      </div>
                    </td>
                    <td>
                      {user.first_name
                        ? user.first_name
                            .split(" ")
                            .map(
                              (name) =>
                                name.charAt(0).toUpperCase() +
                                name.substring(1).toLowerCase()
                            )
                            .join(" ")
                        : "N/A"}
                    </td>
                    <td>
                      {user.last_name
                        ? user.last_name.charAt(0).toUpperCase() +
                          user.last_name.substring(1).toLowerCase()
                        : "N/A"}
                    </td>
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
                    <td>
                      {user.country
                        ? user.country.charAt(0).toUpperCase() +
                          user.country.substring(1).toLowerCase()
                        : "N/A"}
                    </td>
                    <td>{user.city ? user.city : "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between  bg-gray-200 w-full max-w-full">
          <div className="flex items-center justify-between p-2 gap-2 w-full">
            <div className="m-4">
              <SlControlStart />
            </div>

            <div className="m-4" onClick={prevUsers}>
              <TfiControlSkipBackward />
            </div>

            <div className="flex items-center   justify-center overflow-x-auto m-4 w-full max-w-full">
              <div className=" rounded-full m-3 overflow-visible  text-black bg-white "></div>
            </div>

            <div className="m-4" onClick={nextUsers}>
              <TfiControlSkipForward />
            </div>

            <div className="m-4">
              <SlControlEnd />
            </div>
          </div>
          <div className=" p-2">
            <div className="flex justify-center">
              <p>Page:{page} </p>
            </div>
          </div>
        </div>
      </div>
      {lastPage ? (
        <p className="text-red-500">No more users to be displayed</p>
      ) : null}
    </>
  );
};

export default RegisteredUserTable;
