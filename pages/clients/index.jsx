import React, { useState } from "react";

import RegisteredUsersDisplay from "@/components/RegisteredUsersDisplay";

import { supabase } from "@/supabaseClientLibrary/supabaseClient";

const Index = ({ data }) => {
  // const [page, setPage] = useState(0);

  // const usersPerPage = 4;
  // const [start, setStart] = useState(0);

  // const [end, setEnd] = useState(usersPerPage);

  // const nextUsers = () => {
  //   if (data.data.length < usersPerPage) {
  //     return;
  //   }
  //   setStart((prevValue) => end + 1);
  //   setEnd((prevValue) => start + usersPerPage);
  // };

  // const prevUsers = () => {
  //   if (start === 0 && end === usersPerPage) {
  //     return;
  //   }
  //   setStart((prevValue) => start - 1 - usersPerPage);
  //   setEnd((prevValue) => end - usersPerPage - 1);
  // };

  return (
    <>
      <RegisteredUsersDisplay data={data} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const data = await supabase.from("userProfile").select("*").range(start, end);
  return {
    props: { data },
    revalidate: 1,
  };
}
