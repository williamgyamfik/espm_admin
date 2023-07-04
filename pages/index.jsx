import LoginForm from "@/components/LoginForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    } else {
      setUser(true);
      return;
    }
  }, [session, router]);
  return <>{<LoginForm />}</>;
}
