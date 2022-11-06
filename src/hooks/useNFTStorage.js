import { useEffect, useState } from "react";
import { NFTStorage, File } from "nft.storage";
import { CONFIG } from "src/config";

const client = new NFTStorage({ token: CONFIG.WAGMI.NFT_STORAGE });

export const useNFTStorage = (metadata) => {
    const [meta, setMeta] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (metadata) {
            setLoading(true);
            client
                .store({
                    ...metadata,
                    image: new File([metadata.image], "image.png", {
                        type: "image/png",
                    }),
                })
                .then(setMeta)
                .catch(setError)
                .finally(() => setLoading(false));
        }
    }, [metadata]);

    return { metadata: meta, isLoading, error };
};
