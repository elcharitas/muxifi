import useSWR from "swr";
import { useState } from "react";
import { pascal } from "radash";
import * as queries from "src/utils/query";

export const useQuery = (query, args) => {
    const [isLoading, setIsLoading] = useState(!!args.skip);
    const key = `${query}${args.id || ""}${args.type || ""}`;
    const response = useSWR(key, async () => {
        if (args.skip) {
            setIsLoading(false);
            return null;
        }
        setIsLoading(true);
        return queries[`get${pascal(query)}Query`]?.(args)?.finally(() => {
            setIsLoading(false);
        });
    });

    return { isLoading, ...response };
};
