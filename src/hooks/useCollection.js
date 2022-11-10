import { ethers } from "ethers";
import { CONFIG } from "src/config";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import { useAbi } from "./useAbi";

export const useCollection = ({ method, args, type, value, skip }) => {
    // contract name is MuxifiCreator and not MuxifiArtiste
    const { abi } = useAbi({ type: type.replace("artiste", "creator") });
    const { config } = usePrepareContractWrite({
        contractInterface: new ethers.utils.Interface(abi),
        addressOrName: CONFIG.WAGMI.CONTRACT_ADDRESSES[type.toUpperCase()],
        onError: () => {},
        functionName: method,
        enabled: !skip,
        args,
        ...(value && { overrides: { value } }),
    });
    return useContractWrite(config);
};

export const useCollectionRead = ({ method, args, skip, type = "album" }) => {
    // contract name is MuxifiCreator and not MuxifiArtiste
    const { abi } = useAbi({ type: type.replace("artiste", "creator") });
    return useContractRead({
        contractInterface: new ethers.utils.Interface(abi),
        addressOrName: CONFIG.WAGMI.CONTRACT_ADDRESSES[type.toUpperCase()],
        onError: () => {},
        functionName: method,
        enabled: !skip && abi.length > 0,
        args,
    });
};
