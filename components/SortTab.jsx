import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { FcAlphabeticalSortingAz } from "react-icons/fc";

import { FcAlphabeticalSortingZa } from "react-icons/fc";

const SortTab = (props) => {
  const closeSortTabhandler = () => {
    props.closeSortTab(false);
  };

  return (
    <div className="w-64   absolute z-10 bg-white right-10 top-20 cursor-pointer p-8 border shadow-lg rounded-lg">
      <div
        className="flex justify-end items-center"
        onClick={closeSortTabhandler}
      >
        <AiOutlineClose className="text-red-500" />
      </div>
      <div className="flex justify-space items-center gap-5">
        <FcAlphabeticalSortingAz />
        <div>
          <p>Sort surname A-Z</p>
        </div>
      </div>
      <div className="flex justify-space items-center gap-5">
        <FcAlphabeticalSortingZa />
        <div>
          <p>Sort surname Z-A</p>
        </div>
      </div>
    </div>
  );
};

export default SortTab;
