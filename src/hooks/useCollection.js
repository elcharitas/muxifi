import { ethers } from "ethers";
import { CONFIG } from "src/config";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import { useAbi } from "./useAbi";

export const useCollection = ({ method, args, type = "album" }) => {
    const { abi } = useAbi({ type });
    const { config } = usePrepareContractWrite({
        contractInterface: new ethers.utils.Interface(abi),
        addressOrName: CONFIG.WAGMI.CONTRACT_ADDRESSES[type.toUpperCase()],
        onError: () => {},
        ...(abi.length && {
            functionName: method,
            args,
        }),
    });
    return useContractWrite(config);
};

export const useCollectionRead = ({ method, args, type = "album" }) => {
    const { abi } = useAbi({ type });
    return useContractRead({
        contractInterface: new ethers.utils.Interface(abi),
        addressOrName: CONFIG.WAGMI.CONTRACT_ADDRESSES[type.toUpperCase()],
        onError: () => {},
        ...(abi.length && {
            functionName: method,
            args,
        }),
    });
};
