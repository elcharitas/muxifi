import { Provider } from "react-supabase";
import { supabaseClient } from "./supabase-client";

const SupabaseProvider = ({ children }) => {
    return <Provider value={supabaseClient}>{children}</Provider>;
};

export default SupabaseProvider;
