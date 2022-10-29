import { CONFIG } from "src/config";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useAbi } from "./useAbi";

export const useCollection = ({ method, args, type = "album" }) => {
    const { abi } = useAbi({ type });
    const { config } = usePrepareContractWrite({
        abi,
        address: CONFIG.WAGMI.CONTRACT_ADDRESSES.ALBUM,
        ...(Object.values(abi).length && {
            functionName: method,
            args,
        }),
    });
    return useContractWrite(config);
};
