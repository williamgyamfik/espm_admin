import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AdminNotification = (props) => {
  const closeNotificationhandler = () => {
    props.setCloseNotification(false);
  };
  return (
    <div className="w-64  absolute z-50 bg-white right-10 top-20 cursor-pointer p-8 border shadow-lg rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Notification</h2>
        <div onClick={closeNotificationhandler}>
          <AiOutlineClose className="bg-red-500 rounded-lg" />
        </div>
      </div>
      <div>
        <ul>
          <li>
            {/* Map incoming messages here */}
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">Marta {`O\'Brian`} subscribed to Espm</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">David Ansong subscribed to Espm</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-5 border-b-2 cursor-pointer mb-5">
              {/* <p> Email</p> */}
              <p className="text-sm">Obeng subscribed to Espm</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-1 bg-green-500 text-center text-white rounded cursor-pointer">
        <button>See all notifications</button>
      </div>
    </div>
  );
};

export default AdminNotification;
