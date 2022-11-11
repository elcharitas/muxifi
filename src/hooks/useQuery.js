import useSWR from "swr";
import { useState } from "react";
import { pascal } from "radash";
import * as queries from "src/utils/query";

export const useQuery = (query, args) => {
    const [isLoading, setIsLoading] = useState(!!args.skip);
    const response = useSWR(`${query}${args.type || ""}`, async () => {
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
