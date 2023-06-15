import React from "react";
import RegisteredUserCard from "./RegisteredUserCard";
import Image from "next/image";

import { RiDeleteBin5Line } from "react-icons/ri";

const RegisteredUserTable = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer">
        <RiDeleteBin5Line /> <button>Delete</button>
      </div>

      <div className="overflow-x-auto  ">
        <table className="w-full text-xs text-center overscroll-y-auto">
          <thead>
            <tr>
              <th scope="col">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
              </th>
              <th scope="col" className=" px-4 py-3">
                First Name
              </th>
              <th scope="col" className="px-4 py-3">
                Last Name
              </th>
              <th scope="col" className="px-4 py-3">
                Link
              </th>
              <th scope="col" className="px-4 py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-3">
                Country
              </th>
              <th scope="col" className="px-4 py-3">
                City
              </th>
            </tr>
          </thead>

          <tbody>
            <RegisteredUserCard />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RegisteredUserTable;
