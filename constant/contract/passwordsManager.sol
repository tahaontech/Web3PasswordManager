// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract passwordsManager {
    struct Pass {
        string title;
        string data;
    }

    mapping(address => Pass[]) public tables;

    function addPass(string memory _title, string memory _data) public {
        tables[msg.sender].push(Pass(_title, _data));
    }

    function getDatas() public view returns(Pass[] memory) {
        Pass[] memory datas = tables[msg.sender];
        return datas;
    }

    function restoreData(address _addr) public view returns(Pass[] memory) {
        Pass[] memory datas = tables[_addr];
        return datas;
    }

}