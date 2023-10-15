import React from "react";
// import ClientCard from "./ClientCard";

const ClientData = ({ data: users }) => {
  return (
    <div div className="flex items-center flex-col pt-5">
      <div className="mb-5">
        <input type="text" placeholder="search here" />
      </div>
      {users.data.map((user) => {
        return (
          <>
            <div key={user.id} className="overflow-auto">
              {/* <ClientCard /> */}
            </div>
            <div className="">
              <p>{user.country}</p>
              <p>{user.first_name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

// component used to display every clients Details

export default ClientData;
