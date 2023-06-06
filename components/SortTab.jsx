import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { FcAlphabeticalSortingAz } from "react-icons/fc";

import { FcAlphabeticalSortingZa } from "react-icons/fc";

const SortTab = () => {
  return (
    <div className="w-64   absolute z-50 bg-white right-10 top-20 cursor-pointer p-8 border shadow-lg rounded-lg">
      <div className="flex justify-end items-center">
        <div onClick="">
          <AiOutlineClose className="bg-red-500 rounded-lg" />
        </div>
      </div>
      <div>
        <ul>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              <p className="text-sm">Email from David Ansong to Espm</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              <p className="text-sm">Email from Jorge Mendes</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              <p className="text-sm">Email from Obeng to Espm</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortTab;
