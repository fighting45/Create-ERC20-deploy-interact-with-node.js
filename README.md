# 🪙 MyToken - ERC20 Token Project

This project demonstrates how to create, deploy, and interact with an **ERC20 standard token** using Solidity, Hardhat, and Node.js. The token is built with the help of OpenZeppelin's secure and audited contracts.

## 📌 Overview

- Implements a basic ERC20 token named **MyToken (MT)**.
- Total supply of **1,000,000 MT** is minted to the deployer's address.
- Scripts provided to:
  - **Deploy** the smart contract.
  - **Interact** with the contract (check balances).

---

## 🧱 Smart Contract

### `MyToken.sol`
```solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint constant _initial_supply = 1000000 * (10 ** 18);

    constructor() ERC20("MyToken", "MT") {
        _mint(msg.sender, _initial_supply);
    }
}
✅ Uses OpenZeppelin’s implementation of ERC20.
✅ Mints 1,000,000 MT to the deployer.

🚀 Deployment
deploy.js
js
Copy
Edit
const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    const contractAddress = await myToken.getAddress();

    console.log("MyToken deployed to:", contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
💡 Run with:

bash
Copy
Edit
npx hardhat run scripts/deploy.js --network <network-name>
🧪 Interaction
interact.js
js
Copy
Edit
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

    const MyToken = await hre.ethers.getContractAt("MyToken", contractAddress);
    const balance = await MyToken.balanceOf(deployer.address);

    console.log(`Balance of deployer: ${deployer.address} is:`, hre.ethers.formatUnits(balance, 18));
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
💡 Make sure the deployed address is correct before running the script.

📦 Prerequisites
Node.js installed

Hardhat project initialized

OpenZeppelin contracts installed:

bash
Copy
Edit
npm install @openzeppelin/contracts
🧠 Key Concepts
ERC20 standard token creation

Using OpenZeppelin libraries

Deploying smart contracts using Hardhat and Node.js

Interacting with deployed contracts via getContractAt

🔐 Security Notice
This project is for learning and testing purposes. Do not use real private keys or deploy to mainnet without proper audits.

📄 License
This project is open-source and available under the MIT License.
