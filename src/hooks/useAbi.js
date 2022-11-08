import { pascal } from "radash";
import { useState, useEffect } from "react";

export const useAbi = ({ type = "album" } = {}) => {
    const [abi, setAbi] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        import(`src/contracts/Muxifi${pascal(type)}.json`)
            .then((i) => setAbi(Array.from(i.abi)))
            .catch(setError);
    }, [type]);

    return { abi, error };
};
