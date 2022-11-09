import { useCallback, useMemo } from "react";
import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useRealtime, useUpsert } from "react-supabase";

export const usePlaylist = () => {
    const { address } = useAccount();
    const [
        {
            data: selectData,
            error: selectError,
            fetching: isFetching,
            stale: isStale,
        },
    ] = useRealtime(CONFIG.SUPABASE.DB);
    const [
        { count, data: insertData, error: insertError, fetching: isUpdating },
        execute,
    ] = useUpsert(CONFIG.SUPABASE.DB);

    const records = useMemo(() => selectData || insertData || [], [
        selectData,
        insertData,
    ]);

    const savePlaylist = useCallback(
        (list) => {
            return execute({
                id: list.id,
                name: list.title,
                description: list.description,
                tags: list.tags || list.title?.toLowerCase().split(" "),
                address,
            });
        },
        [execute, address],
    );

    const read = useCallback(
        (id) => {
            if (!records) return [{}];
            return records.filter((doc) => doc.id === id);
        },
        [records],
    );

    return {
        records,
        error: selectError || insertError,
        isFetching,
        isUpdating,
        isStale,
        count,
        savePlaylist,
        read,
    };
};
