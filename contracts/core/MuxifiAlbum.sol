// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

/**
 * @title MuxifiAlbum
 * @dev MuxifiAlbum is a contract for managing a collection of songs.
 * MuxifiAlbums are ERC1155s that can be minted and sold.
 * MuxifiAlbums are minted by Muxifi and sold on behalf of the owner.
 * Songs in MuxifiAlbums can be burned by the owner.
 */
contract MuxifiAlbum is ERC1155, ERC1155Burnable {
    // max number of songs in this album
    uint8 public immutable MAX_SONGS;

    constructor(address owner, uint8 count)
        ERC1155("https://Muxifi.vercel.app/api/albums/{id}.json")
    {
        require(count > 0, "Album must have at least one song");

        // set max songs
        MAX_SONGS = count;

        // mint songs to owner
        _mintSongs(owner);

        // allow Muxifi to sell songs on behalf of owner
        _setApprovalForAll(owner, msg.sender, true);
    }

    /**
     * @dev Mint songs for the owner.
     * @param owner The address of the owner of the songs.
     */
    function _mintSongs(address owner) internal {
        for (uint8 songId = 0; songId < MAX_SONGS; i++) {
            _mint(owner, songId, 1 ether, "");
        }
    }
}
