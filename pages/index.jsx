import LoginForm from "@/components/LoginForm";
import { useState, useEffect } from "react";

import { useSession } from "@supabase/auth-helpers-react";
import DashboardPage from "@/components/DashboardPage";

export default function Home() {
  const [user, setUser] = useState(false);

  const session = useSession();

  useEffect(() => {
    if (session) {
      setUser(true);
      return;
    } else {
      setUser(false);
    }
  }, [session]);

  return <>{user ? <DashboardPage /> : <LoginForm />}</>;
}
