import React from "react";
import { Card } from "flowbite-react";
import { FcApproval } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";
import { GiSoccerKick } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { MdOutlineSportsScore } from "react-icons/md";

const Dashboard = ({ data, count }) => {
  console.log(data.data, count);

  let maleCount = 0;
  let femaleCount = 0;
  let otherCount = 0;
  let boxingCount = 0;
  let soccerCount = 0;
  let otherSportsCount = 0;

  data.data.forEach((person) => {
    const gender = person.gender ? person.gender.toLowerCase() : null;
    const sportsType = person.sports_type
      ? person.sports_type.toLowerCase()
      : null;

    if (gender === "female") {
      femaleCount++;
    } else if (gender === "male") {
      maleCount++;
    } else {
      otherCount++;
    }

    if (sportsType === "soccer") {
      soccerCount++;
    } else if (sportsType === "boxing") {
      boxingCount++;
    } else {
      otherSportsCount++;
    }
  });

  console.log(
    maleCount,
    femaleCount,
    otherCount,
    boxingCount,
    soccerCount,
    otherSportsCount
  );

  return (
    <div className="p-5 flex flex-col sm:justify-center">
      <div className="pb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>

      <Card>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 border-b-4">
            <li className="pb-0 pt-3 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <FcApproval />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white ">
                    Total registered athletes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {count}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>

      <Card className=" mt-10">
        <div className="w-full ">
          <div className="flow-root">
            <div className="mb-4 flex items-center justify-between">
              <h5 className=" font-bold leading-none text-gray-900 dark:text-white ">
                Athletes by gender
              </h5>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <FcBusinessman />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Male
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {maleCount}
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <FcBusinesswoman />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Female
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {femaleCount}
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4 ">
                  <div className="shrink-0">
                    <FcQuestions />
                  </div>
                  <div className="min-w-0 flex-1 ">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white ">
                      Other
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {otherCount}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>
      <Card className=" mt-10">
        <div className="w-full ">
          <div className="flow-root">
            <div className="mb-4 flex items-center justify-between">
              <h5 className=" font-bold leading-none text-gray-900 dark:text-white ">
                Sports type count
              </h5>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <GiSoccerKick />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Soccer
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {soccerCount}
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <GiBoxingGlove />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Boxing
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {boxingCount}
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <MdOutlineSportsScore />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white ">
                      Other sports
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {otherSportsCount}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
