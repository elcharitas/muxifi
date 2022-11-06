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
    EXPERIMENTAL: { pubsub: true },
    config: {
        Addresses: {
            Swarm: [
                "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
                "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
                "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
            ],
        },
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
