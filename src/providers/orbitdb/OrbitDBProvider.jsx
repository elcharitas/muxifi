import React, { useEffect, useState } from "react";
import { useIPFS, useOrbitInstance } from "src/hooks";
import { orbit } from "./orbit-context";

const IPFS_CONFIG = {
    start: true,
    relay: {
        enabled: false, // enable relay dialer/listener (STOP)
        hop: {
            enabled: false, // make this node a relay (HOP)
        },
    },
    preload: {
        enabled: false,
    },
};

const OrbitDBProvider = ({ children }) => {
    const ipfsInstance = useIPFS(IPFS_CONFIG);
    const orbitInstance = useOrbitInstance(ipfsInstance);

    const [value, setValue] = useState(null);

    useEffect(() => {
        if (orbitInstance) {
            setValue(orbitInstance);
        }
    }, [orbitInstance]);

    return <orbit.Provider value={value}>{children}</orbit.Provider>;
};

export default OrbitDBProvider;
