import md5 from "md5";

export const getGravatarUrl = (cid) => {
    const hash = md5(cid);
    return `https://gravatar.com/avatar/${hash}.jpg?d=robohash&s=500`;
};

export const getIpfsUrl = (cid) => {
    return cid.replace("ipfs://", "https://storry.tv/ipfs/");
};

export const getItemImage = (image) => {
    if (!image) return undefined;
    return getIpfsUrl(image);
};
