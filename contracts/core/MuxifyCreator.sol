// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "./MuxifyAlbum.sol";

/**
 * @title Muxify
 * @dev Muxify is a contract for managing a collection of albums.
 * MuxifyAlbums are ERC1155s that can be minted and sold.
 * MuxifyAlbums are minted by Muxify and sold on behalf of the owner.
 * MuxifyAlbums are sold for a fixed price of 1 ETH.
 */
contract MuxifyCreator {
    // amount required to mint per album
    uint256 public constant MINT_FEE = 35000 gwei;

    /**
     * @dev Emitted when a new album is minted.
     * @param owner The address of the owner of the album.
     * @param album The address of the album.
     */
    event AlbumCreated(address indexed owner, address album);

    /**
     * @dev a mapping of album addresses to their payment split contract
     * addresses. This is used to keep track of the payment split contracts
     */
    mapping(address => address) public splitter;

    /**
     * @dev Create a new album.
     * @param count The number of songs in the album.
     * @return album The address of the album.
     */
    function createAlbum(uint8 count) external payable returns (address) {
        require(
            msg.value >= (count > 1 ? MINT_FEE * 2 : MINT_FEE),
            "You have sent an insufficient creation fee! Please try again"
        );

        // create and mint albums to creator
        address album = address(new MuxifyAlbum(msg.sender, count));

        // create the splitter to handle payments
        _createSplitter(album);

        emit AlbumCreated(msg.sender, album);

        return album;
    }

    function _createSplitter(address album) internal {
        address[] memory payees;
        uint256[] memory shares;

        payees[0] = address(this);
        payees[1] = msg.sender;

        shares[0] = 30;
        shares[1] = 70;
        // initiate the payment splitter
        splitter[album] = address(new PaymentSplitter(payees, shares));
    }

    fallback() external payable {
        // do nothing
    }

    receive() external payable {
        // do nothing
    }
}
