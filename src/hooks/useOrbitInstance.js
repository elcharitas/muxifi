import { useCallback, useEffect, useState } from "react";
import OrbitDB from "orbit-db";

export const useOrbitInstance = (ipfs) => {
    const [orbit, setOrbit] = useState(null);

    const createInstance = useCallback(async () => {
        if (orbit || !ipfs) return;
        const instance = await OrbitDB.createInstance(ipfs);
        setOrbit(instance);
    }, [ipfs, orbit]);

    const cleanInstance = useCallback(() => {
        if (orbit && orbit.stop) {
            orbit.stop();
        }
    }, [orbit]);

    useEffect(() => {
        createInstance();
        return () => cleanInstance();
    }, [createInstance, cleanInstance]);

    return orbit;
};
