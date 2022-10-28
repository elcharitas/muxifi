import React, { useEffect, useState } from "react";
import { useIPFS, useOrbitInstance } from "src/hooks";
import { orbit } from "./orbit-context";

const OrbitDBProvider = ({ children }) => {
    const [ipfs] = useIPFS({});
    const orbitInstance = useOrbitInstance(ipfs);

    const [value, setValue] = useState(null);
    useEffect(() => {
        if (ipfs && orbitInstance) {
            setValue(orbitInstance);
        }
    }, [ipfs, orbitInstance]);
    return <orbit.Provider value={value}>{children}</orbit.Provider>;
};

export default OrbitDBProvider;
