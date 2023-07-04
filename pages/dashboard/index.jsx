import DashboardPage from "@/components/DashboardPage";
import React, { useState } from "react";
// import { supabase } from "../supabaseClientLibrary/supabaseClient";

// import SideBar from "./SideBar";
// import RegisteredUsersDisplay from "./RegisteredUsersDisplay";
import SideBar from "@/components/SideBar";
import RegisteredUsersDisplay from "@/components/RegisteredUsersDisplay";

const Index = () => {
  return (
    <>
      {/* <DashboardPage /> */}
      <h1>DASHBOARD Page </h1>

      <SideBar />
      <RegisteredUsersDisplay />
    </>
  );
};

export default Index;

// export async function getStaticProps() {}
