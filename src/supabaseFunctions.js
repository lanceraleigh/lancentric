import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://zhvrljcjqgbfzroslhgy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodnJsamNqcWdiZnpyb3NsaGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjczOTYsImV4cCI6MTk4MDUwMzM5Nn0.AoX49ksU8h7bYf3AJZftiT289Xyd4Y_uYhawuaueFHE"
);

export default async function readAllRows() {
  let { data: lessonprogress, error } = await supabase
    .from("lessonprogress")
    .select("*");
  return lessonprogress || error;
}
