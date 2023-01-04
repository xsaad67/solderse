const { frontEndContractsFile, frontEndAbiFile } = require("../helper-hardhat-config")
const fs = require("fs")
const { network, ethers } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        // await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {

    console.log(__dirname);
    let fileNames = fs.readdirSync('./contracts');
    for (let fileName of fileNames) {
        const path = require('path');
        fileName = path.parse(fileName).name;

        try {

            let contractToBeWritten = await ethers.getContract(fileName)
            fs.writeFileSync(frontEndAbiFile + fileName, contractToBeWritten.interface.format(ethers.utils.FormatTypes.json))

        } catch (error) {

        }

    }

    // try {

    //     const solderse = await ethers.getContract("Solderse1")
    //     fs.writeFileSync(frontEndAbiFile + 'solderse', solderse.interface.format(ethers.utils.FormatTypes.json))
    // } catch (error) {
    //     // console.log(error);
    // }

    // const sale = await ethers.getContract("Sale")
    // fs.writeFileSync(frontEndAbiFile + 'sale', sale.interface.format(ethers.utils.FormatTypes.json))
}

// async function updateContractAddresses() {
//     const raffle = await ethers.getContract("Raffle")
//     const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
//     if (network.config.chainId.toString() in contractAddresses) {
//         if (!contractAddresses[network.config.chainId.toString()].includes(raffle.address)) {
//             contractAddresses[network.config.chainId.toString()].push(raffle.address)
//         }
//     } else {
//         contractAddresses[network.config.chainId.toString()] = [raffle.address]
//     }
//     fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
// }
module.exports.tags = ["all", "frontend"]