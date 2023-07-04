import LoginForm from "@/components/LoginForm";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import DashboardPage from "@/components/DashboardPage";

export default function Home() {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const session = useSession();

  // useEffect(() => {
  //   if (session) {
  //     setUser(true);
  //     console.log(session);

  //     return;
  //   } else {
  //     setUser(false);
  //   }
  // }, [session]);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    } else {
      setUser(true);
      return;
    }
  }, [session, router]);
  return (
    <>
      {/* {user ? <DashboardPage /> : <LoginForm />} */}

      {<LoginForm />}
    </>
  );
}
