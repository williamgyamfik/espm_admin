import React from "react";
import { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import SearchBar from "./SearchBar";

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
    <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
      <SearchBar />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs static text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th> */}
            <th
              scope="col"
              className="px-6 py-3 hidden sm:table-cell uppercase"
            >
              First name
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Surname
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Gender
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Sports type
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((user) => {
            return (
              <tr
                key={user.id}
                className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                onClick={() => {
                  detailsHandler(user);
                }}
              >
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td> */}
                {/* <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th> */}

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
                <td className="hidden sm:table-cell px-6 py-4">
                  {user.first_name}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {user.last_name}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {user.gender}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {user.sports_type}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  <p
                    onClick={() => {
                      detailsHandler(user);
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    View details
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUserTable;
