import "../styles/globals.css";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={roboto.className}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        {router.asPath === "/" ||
        router.asPath === "/views/password-recover" ||
        router.asPath === "/views/profile/password-update" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionContextProvider>
    </div>
  );
}
export default App;
