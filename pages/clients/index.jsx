import React, { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import RegisteredUserTable from "@/components/RegisteredUserTable";

const Index = ({ data, page, lastPage, count, totalDataCount, limit }) => {
  return (
    <>
      <RegisteredUserTable
        data={data}
        page={page}
        lastPage={lastPage}
        limit={limit}
        totalDataCount={totalDataCount}
        count={count}
      />
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const page = +context.query.page || 1;
  const limit = 50;
  const rangeStart = (page - 1) * limit;
  const rangeEnd = page * limit - 1;

  const data = await supabase
    .from("userProfile")
    .select("*", { count: "exact" })
    .range(rangeStart, rangeEnd);

  return {
    props: {
      data,
      page,
      lastPage: data.data.length < limit,
      totalDataCount: data.count,
      limit,
      count: data.data.length,
    },
  };
}
