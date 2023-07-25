import React from "react";

const Alert = ({ message, success }) => {
  return (
    <div
      className={`${
        success
          ? "text-green-800 dark:text-green-400 bg-green-50"
          : "text-red-800 dark:text-red-400 bg-red-50"
      } p-4 mb-4 text-sm  rounded-lg  dark:bg-gray-800 text-center`}
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Alert;
