import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
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
      router.push("/");
    }
  }, [session, router]);

  return <LoginForm />;
}
