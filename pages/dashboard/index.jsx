import React from "react";

import SideBar from "@/components/SideBar";
import RegisteredUsersDisplay from "@/components/RegisteredUsersDisplay";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";

const Index = ({ data }) => {
  return (
    <>
      <SideBar />
      <RegisteredUsersDisplay data={data} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const data = await supabase.from("userProfile").select("*");
  return {
    props: { data },
    revalidate: 60,
  };
}
