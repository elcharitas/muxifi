// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./core/MuxifiAlbum.sol";

/**
 * @title Muxifi
 * @dev Muxifi is a contract for managing a collection of albums.
 */
contract Muxifi is Ownable {
    /**
     * @dev Function called to remove balance found in NFT Contract.
     * Ideally, MuxiFi address should be used to create the album contract
     */
    function claim(address _album) external onlyOwner {
        MuxifiAlbum(_album).withdraw();
    }

    /**
     * @dev This function is used to payout admins, marketers, developers, etc
     */
    function payout(address _who, uint256 _amount) external onlyOwner {
        require(
            _amount <= address(this).balance,
            "Sorry, but contract balance is lower than this amount"
        );
        (bool success, ) = payable(_who).call{value: _amount}("");

        require(success, "Something went wrong while paying out");
    }

    fallback() external payable {
        // do nothing
    }

    receive() external payable {
        // do nothing
    }
}
