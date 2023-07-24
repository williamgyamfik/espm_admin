import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";

const RegisterUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeRegisterUserForm = () => {
    props.closeRegisterUser(false);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const signUpAdmin = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if(data === null || data === undefined){
        alert("data not available")
        return
      }
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen  absolute -z-20 w-full  p-3 shadow-2xl mt-10  min-h-fit">
      <div className="flex justify-end items-center ">
        <div className="w-10 flex justify-end " onClick={closeRegisterUserForm}>
          <AiOutlineClose className="text-red-500 bg-white rounded-lg " />
        </div>
      </div>
      <form className="p-3 rounded p-3" onSubmit={signUpAdmin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder=""
            value={email}
            onChange={emailHandler}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-black dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new admin
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
