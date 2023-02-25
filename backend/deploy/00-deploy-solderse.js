const { deployments, network } = require("hardhat")
const { verify } = require("../utils/verify")
const {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config")

const waitBlockConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const arguments = ['15000000'];

    const dc = await deploy('Solderse', {
        from: deployer,
        log: true,
        args: arguments,
        waitConfirmations: waitBlockConfirmations,
    });





    if (!developmentChains.includes(network.name) && process.env.BSC_API_KEY) {
        log("Verifying...")
        await verify(dc.address, arguments)
    }




};
module.exports.tags = ["all", "solderse"]