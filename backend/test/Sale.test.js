const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const INITIAL_SUPPLY = 100000000000;
require('dotenv').config({ path: __dirname + '/../../.env' });

describe("Sale Contract", function () {

    let solderseFactory, solderse,
        saleFactory, sale,
        owner, user2, user3, user4, wallet,
        transferAmount, decimals;

    beforeEach(async function () {
        [owner, wallet, user2, user3, user4] = await ethers.getSigners();

        //Get Initial contract
        solderseFactory = await ethers.getContractFactory("Solderse");
        solderse = await solderseFactory.deploy(INITIAL_SUPPLY);
        decimals = await solderse.decimals();


        saleFactory = await ethers.getContractFactory("Sale");
        const solderseAddress = solderse.address;

        sale = await saleFactory.deploy(ethers.utils.parseEther("5"),
            wallet.address,
            solderseAddress,
            decimals
        );
        console.log((await solderse.totalSupply()).toString());
        transferAmount = ethers.utils.parseEther("100000");
        await solderse.transfer(sale.address, transferAmount);

        //ICO Parameter 

    })


    it("Deploy main token and check if sale owner is deployed with owner ", async function () {
        const ownerBalance = await solderse.balanceOf(owner.address);
        const saleBalance = await solderse.balanceOf(sale.address);
        const solderseTotalSUpply = await solderse.totalSupply();
        const postTotal = BigNumber.from(ownerBalance).add(BigNumber.from(saleBalance));



        expect(solderseTotalSUpply).to.equal(postTotal);

        await expect(sale.connect(wallet).setMinPurchase(500)).to.be.reverted;
    });

    it("Transfer liquidity from main token to sale token", async function () {
        const saleBalance = await solderse.balanceOf(sale.address);
        expect(saleBalance).to.equal(transferAmount);
    });




    it("buyTokens and forward funds and claim tokens not ICO version", async function () {


        const beforeStopIcoWalletBalance = ethers.utils.formatEther(await wallet.getBalance());
        const sendingEthers = ethers.utils.parseEther("15");
        let endingIco = new Date()
        endingIco.setMonth(endingIco.getMonth() + 2)
        endingIco = endingIco.valueOf();


        await sale.startICO(
            endingIco,
            ethers.utils.parseUnits(process.env.MIN, decimals),
            ethers.utils.parseUnits(process.env.MAX, decimals),
            ethers.utils.parseUnits(process.env.SOFTCAP, decimals),
            ethers.utils.parseUnits(process.env.HARDCAP, decimals)

        );
        await sale.connect(user2).buyTokens({ value: sendingEthers });

        //Forward Funds
        const walletBalance = ethers.utils.formatEther(await wallet.getBalance());
        expect(new Number(walletBalance)).to.be.above(new Number(beforeStopIcoWalletBalance));

        //Claim tokens
        const tokenAmount = await sale._getTokenAmount(sendingEthers);
        solderseBalance = await solderse.balanceOf(user2.address);

        expect(tokenAmount).to.equal(await solderse.balanceOf(user2.address));


    });




});