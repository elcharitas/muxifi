// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./MuxifiCreator.sol";

/**
 * @title MuxifiAlbum
 * @dev MuxifiAlbum is a contract for managing a collection of songs.
 * MuxifiAlbums are ERC1155s that can be minted and sold.
 * MuxifiAlbums are minted by Muxifi and sold on behalf of the owner.
 * Songs in MuxifiAlbums can be burned by the owner.
 */
contract MuxifiAlbum is ERC1155URIStorage, ERC1155Supply {
    using Counters for Counters.Counter;
    Counters.Counter private _albumIds;

    address public immutable muxifi;
    address public immutable muxifiCreator;
    uint256 public immutable mintFee;

    mapping(uint256 => address) public albumOwner;

    constructor(
        address _muxifi,
        address _muxifiCreator,
        uint256 _mintFee
    ) ERC1155("") {
        muxifi = _muxifi;
        mintFee = _mintFee;
        muxifiCreator = _muxifiCreator;
    }

    /**
     * @dev create an album
     */
    function create(string memory _metaCID) external payable returns (uint256) {
        require(
            msg.value >= mintFee,
            "Sorry insufficient amount to create album"
        );

        require(
            MuxifiCreator(muxifiCreator).balanceOf(msg.sender) > 0,
            "Sorry, only creators can create albums"
        );

        uint256 albumId = _albumIds.current();
        albumOwner[albumId] = msg.sender;

        _setURI(albumId, _metaCID);
        _mint(msg.sender, albumId, 1 ether, "");
        _albumIds.increment();

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

    /**
     * @dev gets count of albums
     */
    function count() external view returns (uint256) {
        return _albumIds.current() + 1;
    }

    function uri(uint256 _albumId)
        public
        view
        override(ERC1155, ERC1155URIStorage)
        returns (string memory)
    {
        return super.uri(_albumId);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
