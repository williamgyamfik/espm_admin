import "../styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </Layout>
  );
}
export default App;
