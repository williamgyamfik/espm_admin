import React from "react";

const Alert = ({ message, success, duplicateEmail }) => {
  return (
    <div
      className={`${
        success ? "text-green-800 dark:text-green-400 " : "text-red-500 "
      } p-4 mb-4 text-xl text-center`}
      role="alert"
    >
      <span className="font-bold">{message}</span>
    </div>
  );
};

export default Alert;
