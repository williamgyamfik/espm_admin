import { createClient } from "@supabase/supabase-js";

const URL = "https://buhqjvmyysivisponsbc.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aHFqdm15eXNpdmlzcG9uc2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2OTQ1NTYsImV4cCI6MTk5NTI3MDU1Nn0.2iXMvTiplgglDIfJpX7MNIP6KmDIDPZtKew4o9djKjg";

export const supabase = createClient(URL, ANON_KEY);
