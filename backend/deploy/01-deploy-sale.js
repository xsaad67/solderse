const { deployments, network } = require("hardhat");
require('dotenv').config();


module.exports = async ({ getNamedAccounts, deployments }) => {

    const solderse = await ethers.getContract("Solderse")
    const decimals = await solderse.decimals();


    const { deploy } = deployments;
    const { deployer, wallet } = await getNamedAccounts();
    await deploy('Sale', {
        from: deployer,
        log: true,
        args: [ethers.utils.parseUnits("5000".toString(), "ether"), wallet, solderse.address, decimals]
    });


    // Starting ICO 
    let endingIco = new Date()
    endingIco.setMonth(endingIco.getMonth() + 2)
    endingIco = endingIco.valueOf();



    const sale = await ethers.getContract("Sale");

    //Transfering the presale amount to sale token
    await solderse.transfer(sale.address, ethers.utils.parseUnits("1000000", "ether"));

    //Starting the ICO
    const txResponse = await sale.startICO(
        endingIco,
        ethers.utils.parseUnits(process.env.MIN, decimals),
        ethers.utils.parseUnits(process.env.MAX, decimals),
        ethers.utils.parseUnits(process.env.SOFTCAP, decimals),
        ethers.utils.parseUnits(process.env.HARDCAP, decimals),
    );
    const txReceipt = await txResponse.wait();
    console.log((await sale._rate()).toString());

};
module.exports.tags = ["all", "sale"]