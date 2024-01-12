import "../styles/globals.css";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  // const [excludeRoute, setExcludeRoute] = useState(false);
  // const homeRoute = router.asPath === "/";
  // useEffect(() => {
  //   if (homeRoute) {
  //     setExcludeRoute(true);
  //   }
  // }, [homeRoute]);

  return (
    <main className={roboto.className}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        {router.asPath === "/" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionContextProvider>
    </main>
  );
}
export default App;
