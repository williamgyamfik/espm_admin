import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";

const Dashboard = ({ data, count }) => {
  console.log(data, count);
  return (
    <div className="flex flex-col px-5 pt-5">
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
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
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
              <h5 className=" font-bold leading-none text-gray-900 dark:text-white">
                Athletes by Gender
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
                    {count}
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
                    {count}
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <FcQuestions />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Other
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {count}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Card>
      <Card className=" mt-10">
        {/* <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 border-b-4">
            <li className="pb-0 pt-3 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <FcApproval />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Total registered athletes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {count}
                </div>
              </div>
            </li>
          </ul>
        </div> */}

        <div className="w-full ">
          <div className="flow-root">
            <div className="mb-4 flex items-center justify-between">
              <h5 className=" font-bold leading-none text-gray-900 dark:text-white">
                Age distribution
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
                    {count}
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
                    {count}
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
