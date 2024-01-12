import React from "react";
import { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";

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
  };

  return (
    // <div className=" ">
    <div className="p-5  overflow-auto shadow-xl flex-grow ">
      <table className="w-full relative text-left">
        <thead className="sticky top-0 z-10 ">
          <tr className="bg-gray-400 ">
            <th className="hidden sm:table-cell uppercase mx-5 p-5">
              First name
            </th>
            <th className="hidden sm:table-cell uppercase mx-5 p-5">
              Last name
            </th>
            <th className="hidden sm:table-cell uppercase mx-5 p-5">Gender</th>
            <th className="hidden sm:table-cell uppercase mx-5 p-5">
              Sports Type
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((user) => {
            return (
              <tr
                className="hover:bg-gray-200 cursor-pointer border-b-2 p-10 "
                key={user.id}
                onClick={() => {
                  detailsHandler(user);
                }}
              >
                <td className="sm:hidden border-b-2 border-b-sky-500 w-full p-5 max-w-0 sm:w-auto sm:max-w-none">
                  <dd className="mb-4">
                    <b>First name:</b> {user.first_name}
                  </dd>
                  <dd className="mb-4">
                    <b>Last name:</b> {user.last_name}
                  </dd>
                  <dd className="mb-4">
                    <b>Gender:</b> {user.gender}
                  </dd>
                  <dd className="mb-4">
                    <b>Sports Type:</b> {user.sports_type}
                  </dd>
                </td>
                <td className="  hidden sm:table-cell text-left">
                  <div className="p-5"> {user.first_name}</div>
                </td>
                <td className=" hidden sm:table-cell text-left">
                  <div className="p-5">{user.last_name}</div>
                </td>
                <td className=" hidden sm:table-cell text-left">
                  <div className="p-5">{user.gender}</div>
                </td>
                <td className=" hidden sm:table-cell text-left">
                  <div className="p-5">{user.sports_type}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default RegisteredUserTable;
