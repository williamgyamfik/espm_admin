import React from "react";

import RegisteredUsersDisplay from "@/components/RegisteredUsersDisplay";

import { supabase } from "@/supabaseClientLibrary/supabaseClient";

const Index = ({ data }) => {
  return (
    <>
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
