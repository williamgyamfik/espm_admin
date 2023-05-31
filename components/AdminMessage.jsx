import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AdminMessage = (props) => {
  const closeMessageHandler = () => {
    props.setCloseMessage(false);
  };

  return (
    <div className="w-64   absolute z-50 bg-white right-10 top-10 cursor-pointer p-8 border shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Message</h2>
        <div onClick={closeMessageHandler}>
          <AiOutlineClose className="bg-red-500 rounded-lg" />
        </div>
      </div>
      <div>
        <ul>
          <li>
            {/* Map incoming messages here */}
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">Email from David Ansong to Espm</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">Email from Jorge Mendes</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">Email from Obeng to Espm</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-1 bg-green-500 text-center text-white rounded cursor-pointer">
        <button>See all messgaes</button>
      </div>
    </div>
  );
};

export default AdminMessage;
