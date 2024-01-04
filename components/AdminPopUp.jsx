import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AdminPopUp = (props) => {
  const closeMessageHandler = () => {
    props.setCloseMessage(false);
  };
  return (
    <div className="w-64 p-2 bg-gray-200  absolute z-50 right-2 top-10 border shadow-lg rounded-lg">
      <div className="flex justify-end" onClick={closeMessageHandler}>
        <AiOutlineClose className="text-red-500 rounded-lg cursor-pointer" />
      </div>
      <div className=" border-b-2 p-2">
        <p className="text-sm">
          Signed in as <span className="font-bold">Administrator</span>
        </p>
      </div>
      <div className="p-2 cursor-pointer hover:bg-white">
        <p className="text-sm">Change Password</p>
      </div>
      <div className="p-2 cursor-pointer hover:bg-white">
        <p className="text-sm">Logout</p>
      </div>
    </div>
  );
};

export default AdminPopUp;
