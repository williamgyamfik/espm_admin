// import React from "react";
// import { supabase } from "@/supabaseClientLibrary/supabaseClient";
// import ClientData from "../../components/ClientData";

// const ClientPage = ({ data }) => {
//   return (
//     <div>
//       <ClientData data={data} />
//     </div>
//   );
// };

// export default ClientPage;

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const start = query.start;
//   const end = query.end;
//   console.log(start, end);
//   const data = await supabase.from("userProfile").select("*").range(start, end);
//   return {
//     props: { data },
//   };
// }
