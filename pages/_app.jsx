import "../styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Layout />
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default App;
