// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title MuxifiCreator
 * @dev creator contract used to mint unique nfts to users
 * Only holders of this NFT can create albums and such.
 */
contract MuxifiCreator is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _creatorIds;

    constructor() ERC721("MuxifiCreator", "MCRT") {}

    function join(string memory _metaCID) external returns (uint256) {
        require(
            balanceOf(msg.sender) == 0,
            "Sorry, you can only join the program once."
        );

        uint256 _creatorId = _creatorIds.current();
        _mint(msg.sender, _creatorId);
        _setTokenURI(_creatorId, _metaCID);

        return _creatorId;
    }
}
