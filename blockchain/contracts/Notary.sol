pragma solidity >=0.4.25 <0.7.0;

contract Notary {
  struct Record {
    uint256 mineTime;
    uint blockNumber; 
  }
  mapping(bytes32 => Record) private docHashes;

  constructor() public{}
  
  function addDocHash(bytes32 hash) public {
        Record memory newRecord = Record(now, block.number);
        docHashes[hash] = newRecord;
    }

    function findDocHash(bytes32 hash) public view returns (uint256, uint256) {
        return (docHashes[hash].mineTime, docHashes[hash].blockNumber);
    }
}