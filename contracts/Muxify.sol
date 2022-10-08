// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "./core/MuxifyCreator.sol";

/**
 * @title Muxify
 * @dev Muxify is a contract for managing a collection of albums.
 * MuxifyAlbums are ERC1155s that can be minted and sold.
 * MuxifyAlbums are minted by Muxify and sold on behalf of the owner.
 * MuxifyAlbums are sold for a fixed price of 1 ETH.
 */
contract Muxify {
    address private immutable MUXIFY_CREATOR;

    constructor(address creator) {
        MUXIFY_CREATOR = creator;
    }

    /**
     * @dev Collect songs from an album.
     * @param album The address of the album.
     * @param songIds The id of the song.
     * @param amounts The amount of songs to collect.
     */
    function collectSongs(
        address album,
        uint256[] memory songIds,
        uint256[] memory amounts
    ) external payable {
        require(
            MuxifyCreator(MUXIFY_CREATOR).splitter[album] != address(0),
            "Album does not exist"
        );
        require(songIds.length > 0, "No songs to collect");
        require(songIds.length == amounts.length, "Invalid songIds or amounts");

        PaymentSplitter splitterContract = PaymentSplitter(
            payable(MuxifyCreator(MUXIFY_CREATOR).splitter[album])
        );

        // collect the songs from the album
        MuxifyAlbum(album).safeBatchTransferFrom(
            splitterContract.payee(1),
            msg.sender,
            songIds,
            amounts,
            ""
        );
    }

    fallback() external payable {
        // do nothing
    }

    receive() external payable {
        // do nothing
    }
}
