const hre = require("hardhat");

async function main() {

    //destructuring array happening
    ////const [deployer, user1, user2] = await hre.ethers.getSigners();
    //cont [,,deployer,]
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