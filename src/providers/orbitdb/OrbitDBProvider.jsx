import React, { useEffect, useState } from "react";
import { useIPFS, useOrbitInstance } from "src/hooks";
import { orbit } from "./orbit-context";

const OrbitDBProvider = ({ children }) => {
    const ipfsInstance = useIPFS({
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
    });
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
