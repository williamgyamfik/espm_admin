import React from "react";
import Notification from "@/components/Notification";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";

const index = ({ ClientInquiry }) => {
  return <Notification ClientInquiry={ClientInquiry} />;
};

export default index;

export async function getServerSideProps() {
  try {
    const ClientInquiry = await supabase.from("ClientInquiry").select("*");

    return { props: { ClientInquiry } };
  } catch (error) {}
}

// revalidate this data or getServersideprops revalidates on requests?
