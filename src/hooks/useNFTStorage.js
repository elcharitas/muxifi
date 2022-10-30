import { useEffect, useState } from "react";
import { NFTStorage, File } from "nft.storage";
import { CONFIG } from "src/config";

const client = new NFTStorage({ token: CONFIG });

export const useNFTStorage = (metadata) => {
    const [meta, setMeta] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (metadata) {
            client
                .store({
                    ...metadata,
                    image: new File([metadata.image], "image.png", {
                        type: "image/png",
                    }),
                })
                .then(setMeta)
                .catch(setError);
        }
    }, [metadata]);

    return { metadata: meta, error };
};
