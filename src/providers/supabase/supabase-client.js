import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "src/config";

const { SUPABASE } = CONFIG;
export const supabaseClient = createClient(SUPABASE.URL, SUPABASE.KEY);
