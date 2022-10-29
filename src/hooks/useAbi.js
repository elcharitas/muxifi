import { pascal } from "radash";

const { useState, useEffect } = require("react");

export const useABI = ({ type = "album" } = {}) => {
    const [abi, setAbi] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        import(`src/contracts/Muxifi${pascal(type)}.json`)
            .then((i) => setAbi(i.abi))
            .catch(setError);
    }, [type]);

    return { abi, error };
};