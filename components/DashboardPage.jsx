import React from "react";

import SideBar from "./SideBar";
import RegisteredUsersDisplay from "./RegisteredUsersDisplay";

const DashboardPage = () => {
  return (
    <>
      <SideBar />
      <RegisteredUsersDisplay />
    </>
  );
};

export default DashboardPage;
