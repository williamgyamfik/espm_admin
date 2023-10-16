import React, { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";

import { useRouter } from "next/router";

const Details = ({ data }) => {
  const router = useRouter();
  const clientId = +router.query.id;

  const clientDetails = data.find((client) => client.id === clientId);
  console.log(clientDetails);
  if (!clientDetails) {
    return <div>....Loading</div>;
  }

  return (
    <div>
      details id: {router.query.id} :{clientDetails.email}:
      {/* :{email} : {country} */}
    </div>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const clientId = context.params.id;
  console.log(clientId);
  const { data, error } = await supabase
    .from("userProfile")
    .select()
    .eq("id", clientId);

  return {
    props: {
      data,
    },
  };
}