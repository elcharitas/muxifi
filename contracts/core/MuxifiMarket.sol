// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./MuxifiAlbum.sol";
import "./MuxifiCreator.sol";

contract MuxifiMarket {
    address private immutable muxifiCreator;
    address private immutable muxifiAlbum;
    address private immutable muxifi;
    mapping(uint256 => uint256) public prices;
    mapping(address => uint256) public balances;

    event PriceSet(uint256 albumId, uint256 price);

    modifier isCreator(uint256 _ablumId) {
        require(
            msg.sender == muxifiAlbum ||
                (MuxifiCreator(muxifiCreator).balanceOf(msg.sender) > 0 &&
                    MuxifiAlbum(muxifiAlbum).albumOwner(_ablumId) ==
                    msg.sender),
            "Sorry, only creators can list albums"
        );
        _;
    }

    constructor(
        address _muxifi,
        address _muxifiCreator,
        address _muxifiAlbum
    ) {
        muxifi = _muxifi;
        muxifiCreator = _muxifiCreator;
        muxifiAlbum = _muxifiAlbum;
    }

    function setPrice(uint256 _albumId, uint256 _price)
        external
        isCreator(_albumId)
    {
        prices[_albumId] = _price;
        emit PriceSet(_albumId, _price);
    }

    function collect(uint256 _albumId, uint256 _amount) external payable {
        require(
            msg.value >= prices[_albumId],
            "Sorry, you have insufficient amount to collect this album"
        );
        MuxifiAlbum album = MuxifiAlbum(muxifiAlbum);
        require(
            album.balanceOf(album.albumOwner(_albumId), _albumId) > 1, // ensure creator can still hold an album
            "Sorry, but this album is no longer available for collection"
        );
        balances[msg.sender] = balances[msg.sender] + msg.value;
        album.safeTransferFrom(
            album.albumOwner(_albumId),
            msg.sender,
            _albumId,
            _amount,
            ""
        );
    }

    function withdraw(uint256 _albumId) external isCreator(_albumId) {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Sorry, your balance is empty");

        balances[msg.sender] = 0;

        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Sorry, an error occured while paying out");
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
