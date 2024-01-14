import React from "react";
import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import EditClientForm from "./EditClientForm";
import { useState } from "react";
import Link from "next/link";

export default function ClientCard({ clientDetails }) {
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);

  const showEditHandler = () => {
    setShowEdit(true);
  };

  const closeEditHandler = (value) => {
    setShowEdit(value);
  };

  const backHandler = () => {
    router.push("/clients");
  };

  return showEdit ? (
    <EditClientForm
      clientDetails={clientDetails}
      closeDetails={closeEditHandler}
    />
  ) : (
    <div className="p-5 shadow-lg">
      <div>
        <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
          Client Details
        </h5>
      </div>
      <div className="mb-4 flex items-center justify-between p-5 cursor-pointer ">
        <div className="flex items-center underline" onClick={backHandler}>
          <svg
            class="w-2 h-4 text-blue-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          <p className="text-blue-600 ">Back to registered users</p>
        </div>
        <div
          className="flex items-center text-red-500"
          onClick={showEditHandler}
        >
          <AiFillEdit />
          <button>EDIT</button>
        </div>
      </div>
      <div className="flow-root p-5">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0">
                {/* <No Display Name
                  alt="Neil image"
                  className="rounded-full"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  First name
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.first_name}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Surname
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.last_name}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-wrap text-sm font-medium text-gray-400 dark:text-white ">
                  Email
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.email}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Age
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.age}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Gender
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.gender}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Phone
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.phone}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Sports type
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.sports_type}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 flex-wrap whitespace-normal">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Video link
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white ">
                <Link href={clientDetails.video_link} target="_blank">
                  <span className="cursor-pointer underline ">
                    {clientDetails.video_link}
                  </span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
