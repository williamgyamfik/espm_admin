import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  // const {session} = useSessionContext();
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (session) {
      console.log(session);
      setUserLogged(true);
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      {/* <Suspense fallback={<Spinner />}> */}
      {userLogged ? null : ( // </div> //   <p>Loading.....please wait</p> // <div className="bg-white h-screen  flex flex-col  text-center justify-center">
        <LoginForm />
      )}
      {/* </Suspense> */}
    </>
  );
}
