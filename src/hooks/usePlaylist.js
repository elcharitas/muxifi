import { useCallback, useMemo } from "react";
import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useRealtime, useFilter, useUpsert } from "react-supabase";

export const usePlaylist = (listId) => {
    const { address } = useAccount();
    const filter = useFilter(
        (query) => (listId ? query.eq("id", listId).limit(1) : query),
        [listId],
    );
    const [
        {
            data: selectData,
            error: selectError,
            fetching: isFetching,
            stale: isStale,
        },
    ] = useRealtime(CONFIG.SUPABASE.DB, { select: { filter } });
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
            return execute(
                {
                    id: list.id,
                    name: list.title,
                    description: list.description,
                    tags: list.tags || list.title?.toLowerCase().split(" "),
                    address,
                },
                { onConflict: "id" },
            );
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
