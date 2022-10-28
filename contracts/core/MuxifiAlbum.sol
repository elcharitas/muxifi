// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title MuxifiAlbum
 * @dev MuxifiAlbum is a contract for managing a collection of songs.
 * MuxifiAlbums are ERC1155s that can be minted and sold.
 * MuxifiAlbums are minted by Muxifi and sold on behalf of the owner.
 * Songs in MuxifiAlbums can be burned by the owner.
 */
contract MuxifiAlbum is ERC1155, ERC1155Burnable {
    using Counters for Counters.Counter;
    Counters.Counter private _albumIds;

    address public immutable muxifi;
    uint256 public immutable mintFee;

    struct AlbumDetail {
        address owner;
        string metaCID;
    }

    mapping(uint256 => AlbumDetail) public metaData;

    constructor(address _muxifi, uint256 _mintFee) ERC1155("") {
        muxifi = _muxifi;
        mintFee = _mintFee;
    }

    /**
     * @dev create an album
     */
    function create(string memory _metaCID) external payable returns (uint256) {
        require(
            msg.value >= mintFee,
            "Sorry insufficient amount to create album"
        );

        uint256 albumId = _albumIds.current();
        metaData[albumId] = AlbumDetail(msg.sender, _metaCID);

        _mint(msg.sender, albumId, 1 ether, "");

        return albumId;
    }

    /**
     * @dev called by an external contract to remove fees paid in
     */
    function withdraw() external {
        require(
            msg.sender == muxifi,
            "You are not authorised to call this function"
        );
        (bool success, ) = payable(muxifi).call{value: address(this).balance}(
            ""
        );

        require(success, "Something went wrong while withdrawing");
    }
}
