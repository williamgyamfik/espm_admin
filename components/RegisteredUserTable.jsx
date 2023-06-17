import React from "react";
import RegisteredUserCard from "./RegisteredUserCard";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import { supabase } from "../supabaseClientLibrary/supabaseClient";
import { RiDeleteBin5Line } from "react-icons/ri";

const RegisteredUserTable = () => {
  const [userData, setUserData] = useState([]);

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
              {userData?.map((user) => {
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
        <div className="flex items-center justify-center bg-gray-200">
          <p>1 of 5 pages</p>
        </div>
      </div>
    </>
  );
};

export default RegisteredUserTable;
