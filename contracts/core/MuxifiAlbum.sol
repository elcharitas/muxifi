// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./MuxifiCreator.sol";
import "./ERC2981Base.sol";

interface IMuxifiMarket {
	function setPrice(uint256 _albumId, uint256 _price) external;
}

/**
 * @title MuxifiAlbum
 * @dev MuxifiAlbum is a contract for managing a collection of songs.
 * MuxifiAlbums are ERC1155s that can be minted and sold.
 * MuxifiAlbums are minted by Muxifi and sold on behalf of the owner.
 * Songs in MuxifiAlbums can be burned by the owner.
 */
contract MuxifiAlbum is ERC1155URIStorage, ERC1155Supply, ERC2981Base {
    using Counters for Counters.Counter;
    Counters.Counter private _albumIds;
    RoyaltyInfo private _royalties;

    address public immutable muxifi;
    address public immutable muxifiCreator;
    uint256 public immutable mintFee;

    mapping(uint256 => address) public albumOwner;

    modifier isCreator() {
        require(
            MuxifiCreator(muxifiCreator).balanceOf(msg.sender) > 0,
            "Sorry, only creators can create albums"
        );
        _;
    }

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
     * @param _metaCID The CID to the album's metadata
     * @param _royalty The amount to charge in percentage fron 100 - 10000
     */
    function create(string memory _metaCID, uint256 _royalty)
        external
        payable
        isCreator
        returns (uint256)
    {
        require(
            msg.value >= mintFee,
            "Sorry insufficient amount to create album"
        );

        uint256 albumId = _albumIds.current();
        albumOwner[albumId] = msg.sender;

        _setURI(albumId, _metaCID);
        _mint(msg.sender, albumId, 1 gwei, "");
        _setRoyalties(msg.sender, _royalty);
        _albumIds.increment();

        return albumId;
    }

    function freeCreate(string memory _metaCID)
        external
        isCreator
        returns (uint256)
    {
        uint256 albumId = _albumIds.current();
        albumOwner[albumId] = msg.sender;

        _setURI(albumId, _metaCID);
        _mint(msg.sender, albumId, 1 gwei, "");
        // since the user is creating an album freely, muxifi takes 30% royalty
        _setRoyalties(muxifi, 3000);
        _albumIds.increment();

        return albumId;
    }

    function list(
        address _market,
        uint256 _albumId,
        uint256 _price
    ) external isCreator {
        require(
            albumOwner[_albumId] == msg.sender,
            "Sorry, only album creator can list an album"
        );
        setApprovalForAll(_market, true);
        IMuxifiMarket(_market).setPrice(_albumId, _price);
    }

    function royaltyInfo(uint256, uint256 value)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        RoyaltyInfo memory royalties = _royalties;
        receiver = royalties.recipient;
        royaltyAmount = (value * royalties.amount) / 10000;
    }

    function mint(uint256 _albumId, uint256 _amount)
        external
        payable
        isCreator
    {
        require(
            _amount >= 1000,
            "Sorry, but you can only add a minimum of 1000 songs"
        );
        require(
            msg.value >= mintFee * (_amount / 1000),
            "Sorry, there's an insufficient amount to add more songs"
        );
        require(
            albumOwner[_albumId] == msg.sender,
            "Sorry, only album creator can add more songs"
        );

        _mint(msg.sender, _albumId, _amount, "");
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

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC2981Base)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Value is in basis points so 10000 = 100% , 100 = 1% etc
    function _setRoyalties(address recipient, uint256 value) internal {
        require(
            value <= 10000,
            "Sorry, but the percentage specified is too high"
        );
        _royalties = RoyaltyInfo(recipient, uint24(value));
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
