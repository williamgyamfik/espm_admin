import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { initFlowbite } from "flowbite";

const SideBar = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [session]);

  const signOutHandler = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    initFlowbite();
  }, []);

  const path = usePathname();


  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed  sm:flex top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        // className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${theme.root.base} ${theme.root.inner}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 mt-20">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className={`${
                  path === "/dashboard" ? "bg-green-200" : "null"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href="/clients"
                className={`${
                  path === "/clients" ? "bg-green-200" : "null"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Registered Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin_roles"
                className={`${
                  path === "/admin_roles" ? "bg-green-200 " : "null"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Admin Roles
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/reset_admin_password"
                className={`${
                  path === "/reset_admin_password" ? "bg-green-200" : "null"
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Reset Password
                </span>
              </Link>
            </li>
            <li>
              <div
                className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={signOutHandler}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
