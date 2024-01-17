import React from "react";
import { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Spinner from "../components/Spinner";
import { useSession } from "@supabase/auth-helpers-react";

const ResetPassword = () => {
  const session = useSession();
  console.log(session.user.email);

  const adminEmail = session.user.email;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    passwordResetHandler();
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const passwordResetHandler = async () => {
    if (
      !email.trim().includes("@") ||
      password.trim() !== confirmPassword.trim()
    ) {
      return;
    }
    setSpinner(true);
    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        console.log(error.message);
      }
    } catch {
      (error) => {
        console.log(error.message);
      };
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
              Reset Password Form
            </h2>
          </div>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={submitHandler}
          >
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
              className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={adminEmail ? adminEmail : email}
              onChange={emailHandler}
              disabled
            />

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
              required=""
              value={password}
              onChange={passwordHandler}
            />

            <label
              htmlFor="password1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="password"
              id="password1"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={confirmPassword}
              onChange={confirmPasswordHandler}
            />

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
