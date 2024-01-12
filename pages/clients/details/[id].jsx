import React from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";
import ClientCard from "@/components/ClientCard";

const Details = ({ data }) => {
  const router = useRouter();
  const clientId = +router.query.id;

  const clientDetails = data.find((client) => client.id === clientId);

  if (!clientDetails) {
    return <div>....Loading</div>;
  }

  return <ClientCard clientDetails={clientDetails} />;
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
