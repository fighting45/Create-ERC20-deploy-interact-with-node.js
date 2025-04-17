const hre = require("hardhat");

async function main() {
    //const MyToken becomes a factory object that can deploy instances of the contract
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    myToken.deployed;

    const contractAddress = await myToken.getAddress();

    console.log("MyToken deployed to:", contractAddress);

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



