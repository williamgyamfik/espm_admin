import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { Suspense } from "react";

import Spinner from "@/components/Spinner";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (session) {
      setUserLogged(true);
      router.push("/dashboard");
    } else {
      return;
    }
  }, [session, router]);

  console.log(session);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {userLogged ? (
          <div className="bg-white h-screen  flex flex-col  text-center justify-center">
            <Spinner />
            <p>Loading.....please wait</p>
          </div>
        ) : (
          <LoginForm />
        )}
      </Suspense>
    </>
  );
}
