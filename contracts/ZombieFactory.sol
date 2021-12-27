// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ZombieFactory is Ownable {
	// event that fires whenever a new zombie is created
	event NewZombie(uint zombieId, string name, uint dna);

	// no of digits in zombie dna
	uint dnaDigits = 16;
	uint dnaModulus = 10**dnaDigits;
	// cooldown time
	uint cooldownTime = 1 days;

	// a structure that contains information for a particular instance of Zombie
	struct Zombie {
		string name;
		uint dna;
		uint32 level;
		uint32 readyTime;
		uint16 winCount;
		uint16 lossCount;
	}

	// list of all created zombies
	Zombie[] public zombies;

	// map to store the owner of the zombies
	mapping(uint => address) public zombieToOwner;

	// map to store the no of zombies owned by an owner
	mapping(address => uint) ownerZombieCount;

	// instantiates a new zombie and pushes it to the array
	function _createZombie(string memory _name, uint _dna) internal {
		zombies.push(Zombie(_name, _dna, 1, uint32(block.timestamp + cooldownTime), 0, 0));
		uint id = zombies.length - 1;
		zombieToOwner[id] = msg.sender;
		ownerZombieCount[msg.sender]++;
		emit NewZombie(id, _name, _dna);
	}

	// function to generate random number from string using hashing
	function _generateRandomDna(string memory _str) private view returns (uint) {
		uint rand = uint(keccak256(abi.encodePacked(_str)));
		uint randDna = rand % dnaModulus;
		return randDna;
	}

	// public function that lets people create zombies with unique dna
	// generated from the given name
	function createRandomZombie(string memory _name) public {
		require(ownerZombieCount[msg.sender] == 0);
		uint randDna = _generateRandomDna(_name);
		_createZombie(_name, randDna);
	}
}
