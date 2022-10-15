import { ec } from "elliptic";

export class PersistedKeystore {
    constructor(privKey) {
        this.keyPair = this.genKeyPair(privKey);
        this.key = this.createKey();
    }

    hasKey() {
        return this.key !== undefined ? true : false;
    }

    genKeyPair(privKey) {
        return new ec("secp256k1").keyPair({
            priv: Buffer.from(privKey),
            privEnc: "hex",
            pubEnc: "hex",
        });
    }

    createKey() {
        return {
            public: {
                marshal: () => this.keyPair.getPublic("hex"),
            },
            priv: this.keyPair.getPrivate("hex"),
            privEnc: "hex",
            pubEnc: "hex",
        };
    }

    getKey() {
        return this.key;
    }

    sign(_key, data) {
        return this.keyPair.sign(data);
    }

    verify() {
        return Promise.resolve(true);
    }

    getPublic(key) {
        return key.public.marshal();
    }

    close() {}
}
