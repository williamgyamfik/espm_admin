import React, { useState } from "react";
import Spinner from "./Spinner";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const RegisterAdminUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  const supabase = useSupabaseClient();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      return;
    }
    setSpinner(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (data === null || data === undefined) {
        alert("data not available");
        return;
      }
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
    setSpinner(false);
  };

  if (spinner) {
    return (
      <div className="mt-40 flex  justify-center">
        <div className="mt-20">
          <Spinner />
          <p>Sending request....</p>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-5">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <div className="mb-10">
            <h2 className="mb-1 text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Admin Form
            </h2>
          </div>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={submitHandler}
          >
            <div className="">
              <label
                htmlFor="email1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email1"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={email}
                onChange={emailHandler}
                placeholder="Enter a valid email"
              />
            </div>
            <div className="">
              <label
                htmlFor="password1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password1"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <div className="">
              <label
                htmlFor="confirm-password1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password1"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                // value={password}
                onChange={passwordHandler}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Admin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterAdminUser;
