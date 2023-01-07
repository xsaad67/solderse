const { frontEndContractsFile, frontEndAbiFile } = require("../helper-hardhat-config")
const fs = require("fs")
const path = require('path');
const { network, ethers } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        await updateContractAddresses()
        // await getContractAddresses();
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {

    let fileNames = fs.readdirSync('./contracts');
    for (let fileName of fileNames) {
        const path = require('path');
        fileName = path.parse(fileName).name;

        try {

            let contractToBeWritten = await ethers.getContract(fileName)
            fs.writeFileSync(frontEndAbiFile + fileName, contractToBeWritten.interface.format(ethers.utils.FormatTypes.json))

        } catch (error) { }

    }
}


async function updateContractAddresses() {

    let contractAddresses = {};
    try {
        contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    } catch (error) { }

    let fileNames = fs.readdirSync('./contracts');
    let objectItem = {};
    for (let fileName of fileNames) {
        fileName = path.parse(fileName).name;

        try {
            let contractToBeWritten = await ethers.getContract(fileName);
            fileName = fileName.toLowerCase();
            objectItem[fileName] = [contractToBeWritten.address];
            if (network.config.chainId.toString() in contractAddresses) {
                delete contractAddresses[network.config.chainId.toString()];
            }
            contractAddresses[network.config.chainId.toString()] = objectItem;

        } catch (error) { }

    }

    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))


}



module.exports.tags = ["all", "frontend"]