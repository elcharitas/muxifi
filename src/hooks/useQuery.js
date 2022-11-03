import useSWR from "swr";
import { pascal } from "radash";
import * as queries from "src/utils/query";

export const useQuery = (query, args) => {
    return useSWR(query, async () => {
        return queries[`get${pascal(query)}Query`]?.(args);
    });
};
