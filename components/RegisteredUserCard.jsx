import React, { useState, useEffect } from "react";

import { supabase } from "../supabaseClientLibrary/supabaseClient";

const RegisteredUserCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        let { data, error } = await supabase.from("userProfile").select("*");

        if (error) {
          throw error("Data not available on server");
        }

        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [setUserData]);

  const zip = userData?.map((user) => user.zip);
  console.log(zip);
  return (
    <>
      {userData?.map((user) => {
        <tr key={user.id}>
          <td>{user.first_name}name</td>
          <td>{user.last_name}</td>
          <td>{user.video_link}</td>
          <td>{user.email}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
        </tr>;
      })}
    </>
  );
};

export default RegisteredUserCard;
