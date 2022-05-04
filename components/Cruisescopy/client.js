import { createClient } from "@supabase/supabase-js";

export const supabase= createClient(
 "https://emcrtbikrhufjrhnroyw.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY3J0Ymlrcmh1ZmpyaG5yb3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAxMTkwMjgsImV4cCI6MTk2NTY5NTAyOH0.HgpJqat_DG62-jN7nAaSTlU66vEpey39UggJJGMhq0Q"
)