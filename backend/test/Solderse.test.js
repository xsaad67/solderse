const { expect } = require("chai");
const { ethers } = require("hardhat");
const INITIAL_SUPPLY = 10000;
describe("Token contract", function () {

    let solderseFactory, solderse, owner, user2;

    beforeEach(async function () {
        solderseFactory = await ethers.getContractFactory("Solderse");
        solderse = await solderseFactory.deploy(INITIAL_SUPPLY);
        [owner, user2] = await ethers.getSigners();
    })


    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const ownerBalance = await solderse.balanceOf(owner.address);
        expect(await solderse.totalSupply()).to.equal(ownerBalance);
    });

    it("Can Transfer between two accounts", async function () {
        const transfer = await solderse.transfer(user2.address, 500);
        const user2Balance = await solderse.balanceOf(user2.address);
        expect(500).to.equal(user2Balance);
    })

});