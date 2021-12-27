// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ZombieAttack.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract ZombieOwnership is ZombieAttack, IERC721 {
	function balanceOf(address _owner) external view returns (uint balance) {
		return ownerZombieCount[_owner];
	}

	function ownerOf(uint _tokenId) external view returns (address owner) {
		return zombieToOwner[_tokenId];
	}
}
