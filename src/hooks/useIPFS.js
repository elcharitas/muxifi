import { useCallback, useEffect, useState } from "react";
import IPFS from "ipfs";

// window.ipfsLoaded hack to keep a global ipfs instance
export const useIPFS = (config) => {
    const [ipfs, setIpfs] = useState(null);

    const ipfsInit = useCallback(async () => {
        if (typeof window !== "undefined" && window.ipfsLoaded) {
            setIpfs(window.ipfsLoaded);
            return;
        }

        const ipfsInstance = await IPFS.create(config);
        if (typeof window !== "undefined") window.ipfsLoaded = ipfsInstance;
        // const peerId = (await ipfs.id()).id;
        setIpfs(ipfsInstance);
    }, [config]);

    useEffect(() => {
        ipfsInit();
        return () => ipfs?.stop();
    }, [ipfs, ipfsInit]);

    return [ipfs];
};
