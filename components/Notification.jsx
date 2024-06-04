import React from "react";

const Notification = ({ ClientInquiry }) => {
  const inquiryHandler = () => {};
  return (
    <div className="flex flex-grow min-h-0 overflow-auto">
      <table className="w-full relative text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 hidden sm:table-cell uppercase"
            >
              First name
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Surname
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              email
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              message
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell uppercase px-6 py-3"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {ClientInquiry.data?.map((inquiry) => {
            return (
              <tr
                key={inquiry.id}
                className="bg-white  border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                onClick={() => {
                  inquiryHandler(inquiry);
                }}
              >
                <td className="sm:hidden border-b-2 border-b-sky-500 w-full p-5 max-w-0 sm:w-auto sm:max-w-none">
                  <dd className="mb-4 ">
                    <b> First name:</b> {inquiry.first_name}
                  </dd>
                  <dd className="mb-4">
                    <b>Last name:</b> {inquiry.last_name}
                  </dd>
                  <dd className="mb-4">
                    <b>Email:</b> {inquiry.email}
                  </dd>
                  <dd className="mb-4">
                    <b>Message:</b> {inquiry.message}
                  </dd>
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {inquiry.first_name}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {inquiry.last_name}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {inquiry.email}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {inquiry.message}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  <p
                    onClick={() => {
                      inquiryHandler(inquiry);
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    View email
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Notification;
