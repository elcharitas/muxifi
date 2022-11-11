import { useRealtime, useFilter } from "react-supabase";
import { CONFIG } from "src/config";

export const useAccountPlaylist = (address, limit = 5) => {
    const filter = useFilter(
        (query) => {
            return address ? query.eq("address", address).limit(limit) : query;
        },
        [address],
    );

    const [
        { data, fetching: isFetching, stale: isStale, ...rest },
    ] = useRealtime(CONFIG.SUPABASE.DB, {
        select: { filter },
    });

    return { records: data || [], isFetching, isStale, ...rest };
};
