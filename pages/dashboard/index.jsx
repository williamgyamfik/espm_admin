import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Dashboard from "@/components/Dashboard";
import { useSession } from "@supabase/auth-helpers-react";
import { Alert } from "flowbite-react";

const Index = ({ data, count }) => {
  const session = useSession();
  console.log(session);
  const [sessionInfo, setSessionInfo] = useState(null);

  useEffect(() => {
    if (session) {
      const utcTimeString = session.user.last_sign_in_at;
      const utcDate = new Date(utcTimeString);
      const localDate = utcDate.toLocaleString();
      setSessionInfo(localDate);
    }
  }, [session]);

  return (
    <div className="flex flex-col  ">
      {sessionInfo ? (
        <Alert className="bg-green-200 text-red-500">
          <span className="font-medium">
            Welcome, your session started on:{" "}
          </span>{" "}
          {sessionInfo}
        </Alert>
      ) : (
        <p>Loading session info.....</p>
      )}

      <Dashboard
        data={data}
        // totalDataCount={totalDataCount}
        count={count}
      />
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  const data = await supabase.from("userProfile").select("*");
  console.log(data);
  return {
    props: {
      data,
      // totalDataCount: data.count,
      count: data.data.length,
    },
  };
}
