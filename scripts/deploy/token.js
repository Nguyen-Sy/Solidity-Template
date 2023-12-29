const Web3Utils = require("../../deployments/utils");
const { ethers, network } = require("hardhat");
const { getContract, deployContract, delay } = new Web3Utils();

(async () => {
    const [owner, signer] = await ethers.getSigners();
    await deployContract("USDT", ["USDT", "USDT"]);
})().catch((err) => {
    console.log(err);
});
