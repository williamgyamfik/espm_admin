import React, { useState } from "react";

import SideBar from "./SideBar";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const DashboardPage = ({ session }) => {
  const supabase = useSupabaseClient();

  const router = useRouter();

  async function signOutHandler() {
    try {
      const { error } = await supabase.auth.signOut();
      router.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div>
        <SideBar />
        {/* <button onClick={signOutHandler}>Sign out</button> */}
      </div>
    </>
  );
};

export default DashboardPage;
