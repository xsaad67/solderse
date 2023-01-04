const { expect } = require("chai");
const { ethers } = require("hardhat");
const INITIAL_SUPPLY = 100000000000;
describe("Token contract", function () {

    let solderseFactory, solderse,
        saleFactory, sale,
        owner, user2, user3, user4, wallet,
        transferAmount;

    beforeEach(async function () {
        [owner, wallet, user2, user3, user4] = await ethers.getSigners();

        solderseFactory = await ethers.getContractFactory("Solderse");
        solderse = await solderseFactory.deploy(INITIAL_SUPPLY);

        //console.log((await owner.getBalance()).toString());

        saleFactory = await ethers.getContractFactory("Sale");
        const solderseAddress = solderse.address;


        sale = await saleFactory.deploy(ethers.utils.parseEther("5"),
            wallet.address,
            solderseAddress,
            18
        );

        transferAmount = ethers.utils.parseEther("100000");
        await solderse.transfer(sale.address, transferAmount);


    })


    it("Deploy main token and check if sale owner is deployed with owner ", async function () {
        const ownerBalance = await solderse.balanceOf(owner.address);
        expect(await solderse.totalSupply()).to.equal(ownerBalance);
        //
        await expect(sale.connect(wallet).setMinPurchase(500)).to.be.reverted;
    });

    it("Transfer liquidity from main token to sale token", async function () {
        const saleBalance = await solderse.balanceOf(sale.address);
        expect(saleBalance).to.equal(transferAmount);
    });


    it("Starts Ico and Ends Ico", async function () {
        await sale.startICO();
        expect(new Number((await sale.endICO()).toString())).to.greaterThan(0);
        await sale.stopICO();
        // expect((await sale.endICO()).toString()).to.equal(0);

    })

    it("buyTokens and forward funds and claim tokens", async function () {
        const sendingEthers = ethers.utils.parseEther("15");
        await sale.startICO();
        await sale.connect(user2).buyTokens({ value: sendingEthers });
        const contractEtherBalance = (await sale.provider.getBalance(sale.address)).toString();
        expect(sendingEthers.toString()).to.equals(contractEtherBalance);

        //Forward Funds
        const beforeStopIcoWalletBalance = ethers.utils.formatEther(await wallet.getBalance());
        const stopICO = await sale.stopICO();
        const walletBalance = ethers.utils.formatEther(await wallet.getBalance());
        expect(new Number(walletBalance)).to.be.above(new Number(beforeStopIcoWalletBalance));

        //Claim tokens

        const checkContributions = await sale.checkContribution(user2.address);
        const tokenAmount = await sale._getTokenAmount(checkContributions);
        await sale.connect(user2).claimTokens();
        solderseBalance = await solderse.balanceOf(user2.address);

        expect(tokenAmount).to.equal(await solderse.balanceOf(user2.address));


    });




});