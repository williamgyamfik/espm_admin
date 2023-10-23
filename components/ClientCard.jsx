import React from "react";

import { Card } from "flowbite-react";
import { AiFillEdit } from "react-icons/ai";
import EditClientForm from "./EditClientForm";
import { useState } from "react";

export default function ClientCard({ clientDetails }) {
  const [showEdit, setShowEdit] = useState(false);

  const showEditHandler = () => {
    setShowEdit(true);
  };

  const closeEditHandler = (value) => {
    setShowEdit(value);
  };

  return showEdit ? (
    <EditClientForm
      clientDetails={clientDetails}
      closeDetails={closeEditHandler}
    />
  ) : (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Client Details
        </h5>
        <div className="flex items-center" onClick={showEditHandler}>
          <AiFillEdit />
          <button>EDIT</button>
        </div>
      </div>
      <div className="flow-root">
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
                  Country
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.country}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  City
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {clientDetails.city}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
