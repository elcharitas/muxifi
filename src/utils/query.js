import Moralis from "moralis";
import { CONFIG } from "src/config";

const evmApi = Moralis.EvmApi;
const {
    getContractNFTs,
    getWalletNFTs,
    getNFTMetadata,
    searchNFTs,
} = evmApi.nft;

const { CONTRACT_ADDRESSES } = CONFIG.WAGMI;

export const getAlbumsQuery = async ({
    pageSize = 30,
    type = "album",
} = {}) => {
    const { result, pagination, next } = await getContractNFTs({
        address: CONTRACT_ADDRESSES[type.toUpperCase()],
        limit: pageSize,
    });
    return { pagination, next, result: result.map((r) => r.toJSON()) };
};

export const getAlbumMetaQuery = async ({ address, id }) => {
    const { result } = await getNFTMetadata({
        address,
        tokenId: id,
        chain: CONFIG.WAGMI.DEFAULT_CHAIN,
    });
    return result.toJSON();
};

export const getAccountAlbumsQuery = async ({
    account = "",
    pageSize = 30,
    type = "album",
} = {}) => {
    const { result, pagination, next } = await getWalletNFTs({
        tokenAddresses: [CONTRACT_ADDRESSES[type.toUpperCase()]],
        address: account,
        limit: pageSize,
    });
    return { pagination, next, result: result.map((r) => r.toJSON()) };
};

export const getMatchingAlbumsQuery = async ({
    query = "",
    filter = "global",
    pageSize = 30,
}) => {
    const { result, pagination, next } = await searchNFTs({
        filter,
        q: query,
        chain: CONFIG.WAGMI.DEFAULT_CHAIN,
        addresses: [CONTRACT_ADDRESSES.ALBUM, CONTRACT_ADDRESSES.PODCAST],
        limit: pageSize,
    });

    return { pagination, next, result: result.map((r) => r.toJSON()) };
};
