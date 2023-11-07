import React, { useState } from "react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Index;
