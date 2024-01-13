import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Spinner from "../components/Spinner";
import { useRouter } from "next/router";

const PasswordUpdate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validForm, setValidForm] = useState(false);

  const router = useRouter();

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
    } else {
      setValidForm(true);
    }

    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
      });

      if (data !== null) {
        await supabase.auth.signOut();

        router.push("/");
      } else {
        router.replace("/views/profile/password-update");
      }

      if (error) {
        console.log(error.message);
      }
    } catch {
      (error) => {
        console.log(error.message);
      };
    }

    setValidForm(false);
  };

  return (
    <>
      {validForm ? (
        <Spinner />
      ) : (
        <section className="mt-10">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
            <Link
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <h1 className="text-4xl text-center mb-10">
                Euphoria Sports Management
              </h1>
            </Link>
            <div className="w-full p-6 bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                action="#"
                onSubmit={submitHandler}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your email"
                    required=""
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="insert password here"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={passwordHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="insert same password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={confirmPassword}
                    onChange={confirmPasswordHandler}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset passwod
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PasswordUpdate;
