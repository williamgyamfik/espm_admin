import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import backgroundImage from "../public/images/loginBkgrd.jpg";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = useSession();
  const [userLogged, setUserLogged] = useState(false);
  const path = usePathname();

  useEffect(() => {
    // if (!session & (path === "/views/profile/password-update")) {
    //   router.push("/");
    // } else

    if (session) {
      setUserLogged(true);
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [session, router, path]);

  return (
    <div className=" relative h-screen overflow-hidden">
      <h1 className="text-md m-2  text-white font-medium">
        Euphoria Sports Management Admin{" "}
      </h1>
      <Image
        className="-z-50"
        src={backgroundImage}
        alt="Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
        quality={100}
      />
      <LoginForm />
    </div>
  );
}
