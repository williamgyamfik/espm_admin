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

const RegisteredUserTable = ({
  data,
  page,
  lastPage,
  limit,
  totalDataCount,
  count,
  searchValue,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clientDetails, setClientDetails] = useState([]);
  const router = useRouter();

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

  const detailsHandler = (user) => {
    setShowDetails(true);
    router.push(`/clients/details/${user.id}`);
    setClientDetails(user);
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

  console.log(data);

  return (
    <div>
      <div className="my-3 flex justify-between items-center mt-10">
        <div className="p-3">
          <h1 className="text-xl font-bold">Registered Users</h1>
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
            <thead className="">
              <tr className="w-full border-b-2 bg-gray-200 ">
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
                  <div className="w-24 py-3"> Age</div>
                </th>

                <th scope="col">
                  <div className="w-24 py-3"> Gender</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Sports type</div>
                </th>
                <th scope="col">
                  <div className="w-24 py-3"> Phone</div>
                </th>
              </tr>
            </thead>

            <tbody className="border ">
              {data.data?.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="border-b-2 my-10"
                    onClick={() => {
                      detailsHandler(user);
                    }}
                  >
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
                    <td>{user.age ? user.age : "N/A"}</td>
                    <td>{user.gender ? user.gender : "N/A"}</td>
                    <td>{user.sports_type ? user.sports_type : "N/A"}</td>
                    <td>{user.phone ? user.phone : "N/A"}</td>
                    {/* <td>
                      {user.country
                        ? user.country.charAt(0).toUpperCase() +
                          user.country.substring(1).toLowerCase()
                        : "N/A"}
                    </td> */}
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

            <div className="flex items-center   justify-center  m-4 w-full max-w-full">
              <div className=" rounded-full  text-black ">
                <p>Page: {page} </p>
              </div>
            </div>

            <div className="m-4" onClick={nextUsers}>
              <TfiControlSkipForward />
            </div>

            <div className="m-4">
              <SlControlEnd />
            </div>
          </div>
        </div>
      </div>
      {lastPage ? (
        <p className="text-red-500">No more users to be displayed</p>
      ) : null}
    </div>
  );
};

export default RegisteredUserTable;
