const { deployments, network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const dc = await deploy('Solderse', {
        from: deployer,
        log: true,
        args: [15000000]
    });


};
module.exports.tags = ["all", "solderse"]