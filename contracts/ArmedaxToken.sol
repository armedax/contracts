// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ArmedaxToken is ERC20 {
    constructor() ERC20("Armedax Token", "AMDX") {
        _mint(msg.sender, 30_000_000 * 10 ** decimals());
    }
}
