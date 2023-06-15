import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const supabaseUrl = "https://buhqjvmyysivisponsbc.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

const RegisteredUserCard = () => {
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        let { data: userProfile, error } = await supabase
          .from("userProfile")
          .select("*");
        console.log(data);
        setUserData(userProfile);
      } catch (error) {
        // Handle the error
      }
    };
    getUser();
  }, [setUserData, supabase]);

  console.log(userData);

  return (
    <>
      {userData?.map((user) => {
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>;
      })}
    </>
  );
};

export default RegisteredUserCard;
