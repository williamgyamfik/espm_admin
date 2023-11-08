import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

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

        <div className="w-full ">
          <div className="flow-root">
            <div className="mb-4 flex items-center justify-between">
              <h5 className=" font-bold leading-none text-gray-900 dark:text-white">
                Gender
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
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Neil image"
                    height="32"
                    src="/images/people/profile-picture-1.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Neil Sims
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Bonnie image"
                    height="32"
                    src="/images/people/profile-picture-3.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Michael image"
                    height="32"
                    src="/images/people/profile-picture-2.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Michael Gough
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $67
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Lana image"
                    height="32"
                    src="/images/people/profile-picture-4.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $367
                </div>
              </div>
            </li>
            <li className="pb-0 pt-3 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Thomas image"
                    height="32"
                    src="/images/people/profile-picture-5.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    Thomes Lean
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
