// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


// Mumbai Testnet: 0x85B6F665829932fAC2898bd2d2810ea3375C5f8E
contract PerByte {
        
    mapping(address => bool) isUserWCVerified;
    
    struct File {
        address[] users;
        address owner;
    }

    mapping(string => File) hashToFile;
    mapping(address => string[]) userToHash;


    function isWorldCoinVerified(address _address) public view returns (bool) {
        return isUserWCVerified[_address];
    }

    function verifyWorldcoinUser(address _address) public {
        isUserWCVerified[_address] = true;
    }

    function uploadFile(string memory _ipfsHash) public {
        File memory file;
        file.owner = msg.sender;
        hashToFile[_ipfsHash] = file;
        userToHash[msg.sender].push(_ipfsHash);

    }
    
    function getFiles() public view returns (File[] memory) {
        File[] memory files = new File[](userToHash[msg.sender].length);

        // for(hash in userToHash[msg.sender]) {
        //     files.push(hashToFile[hash]);
        // }

        for(uint i=0; i<userToHash[msg.sender].length; i++) {
            files[i] = (hashToFile[userToHash[msg.sender][i]]);

        }

        return files;

    }

    function shareFiles(string memory _ipfsHash, address[] memory _addresses) public {
        require(hashToFile[_ipfsHash].owner == msg.sender);

        // for (address in _addresses) {
        //     hashToFile[_iofsHash].users.push(address)
        // }

        for(uint i=0; i<_addresses.length; i++) {
            hashToFile[_ipfsHash].users.push(_addresses[i]);
            userToHash[_addresses[i]].push(_ipfsHash);
        }
    
    }
    



}