import React from "react";
import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import { AiOutlineFilter } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import SortTab from "./SortTab";
import FilterTab from "./FilterTab";
import RegisteredUserList from "./RegisteredUserTable";

const RegisteredUsersDisplay = () => {
  const [showSortTab, setShowSortTab] = useState(false);
  const [showFilterTab, setFilterTab] = useState(false);
  const [active, setActive] = useState("");

  const closeSortTabHandler = (value) => {
    setShowSortTab(value);
  };

  const closeFilterHandler = (value) => {
    setFilterTab(value);
  };

  const showSortTabHandler = () => {
    setShowSortTab(true);
    setActive("TAB1");
  };

  const showFilterTabHandler = () => {
    setFilterTab(true);
    setActive("TAB2");
  };

  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full mt-5">
        <div className="relative bottom-8">
          {active === "TAB1" && showSortTab && (
            <SortTab closeSortTab={closeSortTabHandler} />
          )}
        </div>

        <div className="relative bottom-8">
          {active === "TAB2" && showFilterTab && (
            <FilterTab closeFilter={closeFilterHandler} />
          )}
        </div>

        <div className="flex  sm:justify-between justify-around items-center">
          {/* <div> */}

          <form onClick={searchHandler}>
            {/* <label htmlFor="">Search</label> */}
            <div className="relative flex items-center">
              <div className="absolute flex items-center justify-center pointer-events-none inset-y-1 left-0 pl-1">
                <AiOutlineSearch />
              </div>
              <input
                className="w-full block text-center rounded-lg h-8"
                type="search"
                placeholder="Search here"
              />
              <div className="absolute right-2 top-1 text-center ">
                <button className=" px-2 rounded-sm bg-blue-500 text-xs text-white font-medium">
                  Search
                </button>
              </div>
            </div>
          </form>
          {/* </div> */}

          <div className="flex justify-center items-center">
            <div className="m-1" onClick={showFilterTabHandler}>
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
        <div>
          <RegisteredUserList />
        </div>
      </div>
    </>
  );
};

export default RegisteredUsersDisplay;