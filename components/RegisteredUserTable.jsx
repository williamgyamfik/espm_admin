import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { RiDeleteBin5Line } from "react-icons/ri";

import { SlControlEnd } from "react-icons/sl";
import { SlControlStart } from "react-icons/sl";
import { TfiControlSkipForward } from "react-icons/tfi";
import { TfiControlSkipBackward } from "react-icons/tfi";


const RegisteredUserTable = ({ data,searchValue }) => {
  const [currentUsersList, setCurrentUsersList] = useState(0);

  const pageNumbers = [];
  const usersPerPage = 30;

  const startIndex = currentUsersList * usersPerPage;
  const endIndex = usersPerPage + startIndex;
  const currentUsers = data.data.slice(startIndex, endIndex);

  const totalUsersList = Math.ceil(data.data.length / usersPerPage);

  for (let i = 0; i < totalUsersList; i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers, totalUsersList,searchValue);

  const lastUsersList = data.data.slice(
    // data.data.length - usersPerPage,
    // data.data.length - 1
    -3
  );

  const nextUsers = () => {
    setCurrentUsersList((prevValue) => prevValue + 1);
  };

  const prevUsers = () => {
    setCurrentUsersList((prevValue) => prevValue - 1);
  };

  // const lastUsersHandler = () => {
  //   setLastusers((lastUsersList) => lastUsersList - 1);
  // };

  return (
    <>
      <div className="my-3 p-3">
        <h1 className="text-xl font-bold">Registered Users</h1>
      </div>
      <div className="w-full p-3">
        <div className="flex items-center cursor-pointer text-red-600 ">
          <RiDeleteBin5Line /> <button>Delete</button>
        </div>
      </div>
      <div className="  w-full max-w-full ">
        <div className="w-full overflow-x-auto">
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
              { currentUsers.filter((value)=>{
                if(searchValue === ""){
                  return value
                }else if(value.first_name && value.first_name.toLowerCase().includes(searchValue)){
                  return value
                }else if(value.last_name && value.last_name.toLowerCase().includes(searchValue)){
                  return value
                }else if(value.country && value.country.toLowerCase().includes(searchValue)){
                    return value
                }
                else return
         
             
              }).map((user) => {
                return (
                  <tr key={user.id} className="border-b-2 my-10">
                    <td>
                      <div className="flex items-center justify-center w-14 py-3">
                        <input type="checkbox"></input>
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
            {currentUsersList > 0 && (
              <div className="m-4" onClick={prevUsers}>
                <TfiControlSkipBackward c />
              </div>
            )}
            <div className="flex items-center   justify-center overflow-x-auto m-4 w-full max-w-full">
              {pageNumbers?.map((number) => {
                return (
                  <div
                    key={number}
                    className=" rounded-full m-3 overflow-visible  text-black bg-white "
                    onClick={() => setCurrentUsersList(number)}
                  >
                    <p>{number + 1}</p>{" "}
                  </div>
                );
              })}
            </div>
            {totalUsersList > currentUsersList && (
              <div className="m-4" onClick={nextUsers}>
                <TfiControlSkipForward />
              </div>
            )}
            {
              <div className="m-4">
                <SlControlEnd />
              </div>
            }
          </div>
          {/* <div className=" p-2"> */}
          {/* <div className="flex justify-center"> */}
          {/* <p>1 of 5 pages</p> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      {totalUsersList > currentUsersList ? (
        ""
      ) : (
        <p className="text-red-500">No users to be displayed</p>
      )}
    </>
  );
};

export default RegisteredUserTable;
