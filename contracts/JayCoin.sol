// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JayCoin is ERC20 {
    
    constructor(uint256 initialSupply) ERC20("JayCoin", "JAY"){
       _mint(msg.sender, initialSupply * 10 ** decimals());
    }
    
}