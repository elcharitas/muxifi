import { ethers } from "ethers";
import { CONFIG } from "src/config";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import { useAbi } from "./useAbi";

export const useCollection = ({ type = "album", skip = true, ...rest }) => {
    const { abi } = useAbi({ type: type.replace("artiste", "creator") });
    return !skip && abi.length ? <WriteCollection type={type} {...rest} /> : {};
};

export const useCollectionRead = ({ skip = true, type = "album", ...rest }) => {
    const { abi } = useAbi({ type: type.replace("artiste", "creator") });
    return !skip && abi.length ? <ReadCollection type={type} {...rest} /> : {};
};

export const WriteCollection = ({ abi, method, args, type }) => {
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

export const ReadCollection = ({ abi, method, args, type }) => {
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
