<p>
    <img src="src/assets/svgs/logo.svg"/>
</p>

> _Music meets DeFi_

[![Design](https://img.shields.io/badge/Figma-Design-yellowgreen)](https://www.figma.com/file/5jx1v8qqNf1JCkvsovka5Z/MuxiFi?node-id=150%3A2998)
[![license](https://img.shields.io/github/license/elcharitas/muxify)](https://github.com/elcharitas/muxify/LICENSE)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/elcharitas/muxifi/ESLint)
[![npm version](https://img.shields.io/github/status/s/pulls/elcharitas/muxify/5)](https://github.com/elcharitas/muxify/pulls)
[![activity](https://img.shields.io/github/commit-activity/w/elcharitas/muxify)](https://github.com/elcharitas/muxify)
![GitHub top language](https://img.shields.io/github/languages/top/elcharitas/muxifi?color=yellow&label=JavaScript)
[![GitHub Repo stars](https://img.shields.io/github/stars/elcharitas/muxifi?style=social)](.)

**MuxiFi** is a **serverless, distributed digital music, podcast service**, built on the **BNB Chain**,
that gives listeners access to **millions of songs and other contents** from creators all over the world.

MuxiFi is Live at https://muxifi.vercel.app.

## 💪 Motivation

Music is life, and it's part of what makes us Human. Over time, civilization has passed down much of its history through music and the ones responsible for this? Artistes. However, artists don't get compensated as they should. Music production on the centralized web is left to distributors, producing companies, and agencies, making it difficult for artists to get their music out there. That's what MuxiFi is solving. MuxiFi is creating a decentralized world for artists where from production to sales is left to the artiste. MuxiFi is allowing the audience to connect with their favorite artistes even more by bridging the distributor gap and allowing the audience to collect(at a fee) an artiste's song.

## 🚀 How it Works

MuxiFi is a decentralized music service powered strongly by IPFS. It is an NFT Marketplace for music. All metadata, including cover and audio, is hosted on IPFS using a storage service. Some of MuxiFi's features include:

-   Album Upload: Albums are immutable and can't be updated once uploaded.
-   Podcast Upload: A podcast is not immutable. Users can add new episodes or remove existing ones from a podcast.
-   Album/Podcast Collection: Users can collect albums/podcasts.
-   Creator Profiles: Users can set up creator profiles.

## 👷 Technologies and Infra used

* UI/Frontend
	* [ReactJS](https://reactjs.org/): core javascript library
	* MUI: core UI Framework
	* [NextJS 12](https://nextjs.org/): core javascript framework
	* [Figma](https://figma.com): UI/UX Design and prototyping tool
* Smart Contracts
	* Solidity
	* Hardhat
	* ethers
* Web3 Tools/Infra
	* [IPFS](https://ipfs.tech): interplanetary storage for MuxiFi
	* [nft.storage](https://nft.storage): storage for ERC1155 contracts
	* [OrbitDB](https://github.com/orbitdb/orbit-db): personalized peer to peer db
	* [Moralis EVM API](https://moralis.io): Query and indexing of smart contracts
	* Wagmi/RainbowKit: Contract interaction and Wallet authentication.
* CI/CD, Code Management
	* Github
	* Deployed on [Vercel](https://vercel.com)
* Task Management
	* Trello
	* Github Issues

## 🎊 What's Next?

- [ ] Stake on Creator Songs to earn tokens
- [ ] Share Creator Profiles
- [ ] Share playlists
- [ ] Improve feedback Loop to get feature requests

## 🛠️ Installation and Setup

Ideally, you should not need to run MuxiFi locally since we have it live at https://muxifi.vercel.app.

However, ensure to have NodeJS 15+ installed then to get muxifi running locally, follow these steps:

1. clone the github repository
    ```sh
    $ gh repo clone elcharitas/muxifi
    ```
2. change directory to access the codebase
    ```sh
    $ cd muxifi
    ```
3. You should install all necessary packages next with yarn. Please note that other package managers were also tested(pnpm, npm) but Yarn is preferred for MuxiFi
    ```sh
    $ yarn
    ```
4. Start the local server.
    ```sh
    $ yarn dev
    ```

## 📂 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Check [these guidelines](./CONTRIBUTING.md) for more.

## 🧑🏻 Team
-   [Dimeji Dada][0]: Product Designer/Music Producer
-   Yomi Oke - [@oke-yomi][1]: Frontend Developer
-   Jonathan Irhodia - [@elcharitas][3]: Web3 Developer/Team Lead
-   Daniel Onikola - [@Immortallitic][2]: Product Manager

## License

[MIT](./LICENSE)

[0]: https://linkedin.com/in/
[1]: https://github.com/oke-yomi
[2]: https://github.com/Immortallitic
[3]: https://github.com/elcharitas