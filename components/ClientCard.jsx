import React from "react";
import { useRouter } from "next/router";
import { Card } from "flowbite-react";
import { AiFillEdit } from "react-icons/ai";
import EditClientForm from "./EditClientForm";
import { useState } from "react";
import Link from "next/link";

export default function ClientCard({ clientDetails }) {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const showEditHandler = () => {
    setShowEdit(true);
  };

  const closeEditHandler = (value) => {
    setShowEdit(value);
  };

  const backHandler = () => {
    router.push("/clients");
  };

  console.log(clientDetails);

  return showEdit ? (
    <EditClientForm
      clientDetails={clientDetails}
      closeDetails={closeEditHandler}
    />
  ) : (
    // <Card>
    <div className="p-5 shadow-lg">
      <div>
        <h5 className="text-xl text-center font-bold leading-none text-gray-900 dark:text-white">
          Client Details
        </h5>
      </div>
      <div className="mb-4 flex items-center justify-between p-5">
        <div>
          <button className="text-blue-500 underline" onClick={backHandler}>
            Back
          </button>
        </div>
        <div className="flex items-center text-red-500" onClick={showEditHandler}>
          <AiFillEdit />
          <button>EDIT</button>
        </div>
      </div>
      <div className="flow-root p-5">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  Email
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.email}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-4 flex-wrap">
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
    // </Card>
  );
}
