// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./MuxifiAlbum.sol";
import "./MuxifiCreator.sol";

contract MuxifiMarket {
    address public immutable muxifiCreator;
    address public immutable muxifiAlbum;
    mapping(uint256 => uint256) public prices;

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

    constructor(address _muxifiCreator, address _muxifiAlbum) {
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
        MuxifiAlbum album = MuxifiAlbum(muxifiAlbum);
        album.safeTransferFrom(
            album.albumOwner(_albumId),
            msg.sender,
            _albumId,
            _amount,
            ""
        );
    }
}
