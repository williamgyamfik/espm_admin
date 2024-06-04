import React from "react";
import Link from "next/link";
import { useState } from "react";
import toaster, { Toast, Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const PasswordRecover = () => {
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);

  const router = useRouter();

  const formHandler = (e) => {
    e.preventDefault();
    emailSubmit();
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailSubmit = async () => {
    if (!email.trim().includes("@")) {
      return;
    }
    setSpinner(true);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `/views/profile/password-update
        }`,
      });

      if (data !== null) {
        // toast.success("Email sent", { duration: 3000 });

        router.replace();
      } else if (error) {
        // toast.error("Invalid email", { duration: 3000 });
      }
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error("user email not authenticated");
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
    <section className=" mt-10">
      <Link href="/">
        <div className="px-5">
          <p className="underline">Return to home page</p>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="text-4xl mb-10 text-center">
            Euphoria Sports Management
          </h1>
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Insert email and receive a link in your email to reset your password
          </p>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
            onSubmit={formHandler}
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
                placeholder=""
                required=""
                onChange={emailHandler}
                value={email}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  );
};

export default PasswordRecover;
