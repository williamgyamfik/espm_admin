import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const FilterTab = (props) => {
  const filterClosehandler = () => {
    props.closeFilter(false);
  };

  return (
    <div className="w-64   absolute z-10 bg-white right-10 top-20 cursor-pointer p-8 border shadow-lg rounded-lg">
      <div
        className="flex items-center justify-end "
        onClick={filterClosehandler}
      >
        <AiOutlineClose className="text-red-600" />
      </div>
      <ul>
        <li>Country</li>
        <li>City</li>
        <li>Sports type</li>
        <li></li>
      </ul>
    </div>
  );
};

export default FilterTab;
