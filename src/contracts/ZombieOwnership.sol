// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ZombieAttack.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/// @title Implementation of IERC721 for Zombies
/// @author Noman5237
/// @notice This contract enables owners to transfer zombie tokens safely
/// @dev This contract manually implements the ERC721 standard, checkout for bugs!
contract ZombieOwnership is ZombieAttack, IERC721 {
	using SafeMath for uint;
	using SafeCast for uint;

	mapping(uint => address) zombieApprovals;

	function balanceOf(address _owner) external view returns (uint balance) {
		return ownerZombieCount[_owner];
	}

	function ownerOf(uint _tokenId) external view returns (address owner) {
		return zombieToOwner[_tokenId];
	}

	function _transfer(
		address _from,
		address _to,
		uint _tokenId
	) private {
		ownerZombieCount[_to] = ownerZombieCount[_to].add(1);
		ownerZombieCount[_from] = ownerZombieCount[_from].sub(1);
		zombieToOwner[_tokenId] = _to;
		emit Transfer(_from, _to, _tokenId);
	}

	function transferFrom(
		address _from,
		address _to,
		uint _tokenId
	) external {
		require(zombieToOwner[_tokenId] == msg.sender || zombieApprovals[_tokenId] == msg.sender);
		_transfer(_from, _to, _tokenId);
	}

	function approve(address _to, uint _tokenId) external onlyOwnerOf(_tokenId) {
		zombieApprovals[_tokenId] = _to;
		emit Approval(msg.sender, _to, _tokenId);
	}
}
