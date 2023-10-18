import React from "react";
import { Card } from "flowbite-react";
import { VscSave } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const EditClientCard = (props) => {
  const closeHandler = () => {
    props.closeDetails(false);
  };

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Client Form
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0"></div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-400 dark:text-white">
                  First name
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {props.clientDetails.first_name}
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
                {props.clientDetails.last_name}
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
                {props.clientDetails.email}
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
                {props.clientDetails.country}
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
                {props.clientDetails.city}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <VscSave />
          <button>SAVE</button>
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={closeHandler}
        >
          <VscClose />
          <button>CLOSE</button>
        </div>
      </div>
    </Card>
  );
};

export default EditClientCard;
