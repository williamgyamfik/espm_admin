import React, { useState } from "react";
// import Image from "next/image";
import { useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const DashboardPage = ({ session }) => {
  const supabase = useSupabaseClient();

  async function signOutHandler() {
    try {
      const { error } = await supabase.auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div>
        <button onClick={signOutHandler}>Sign out</button>
      </div>
    </>
  );
};

export default DashboardPage;
