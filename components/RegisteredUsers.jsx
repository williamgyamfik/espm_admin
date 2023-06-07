import React from "react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import { AiOutlineFilter } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import SortTab from "./SortTab";

const RegisteredUsers = () => {
  const [showSortTab, setShowSortTab] = useState(false);

  const closeSortTabHandler = (value) => {
    setShowSortTab(value);
  };

  const showSortTabHandler = () => {
    setShowSortTab(true);
  };

  return (
    <>
      <div className="w-full ">
        <div className="flex  sm:justify-between justify-around items-center">
          {/* <div> */}
          <form>
            {/* <label htmlFor="">Search</label> */}
            <div className="relative items-center">
              <div className="absolute flex items-center justify-center pointer-events-none inset-y-1 left-0 pl-1">
                <AiOutlineSearch />
              </div>
              <input
                className="w-full block  text-center rounded-lg h-8"
                type="text"
                placeholder="Search here"
              />
              <button className="absolute top-3 -right-1   px-2 rounded-sm bg-blue-500 text-xs font-medium">
                Search
              </button>
            </div>
          </form>
          {/* </div> */}

          <div className="flex justify-center items-center">
            <div className="m-1">
              <AiOutlineFilter />
            </div>
            <p>Filter</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="m-1" onClick={showSortTabHandler}>
              <MdSort />
            </div>
            <p>Sort</p>
          </div>
        </div>
      </div>
      {showSortTab && <SortTab closeSortTab={closeSortTabHandler} />}
    </>
  );
};

export default RegisteredUsers;
