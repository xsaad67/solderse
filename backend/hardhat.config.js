require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require('dotenv').config({ path: __dirname + '/../.env' });

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

console.log(GOERLI_RPC_URL);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [process.env.DEPLOYER_PRIV_KEY, process.env.WALLET_PRIV_KEY],
      chainId: 5,
    },
    testnetbsc: {
      url: "https://bsc.getblock.io/3b1d846b-c686-483e-b57d-fc3a2ebf8b0b/testnet/",
      accounts: [process.env.DEPLOYER_PRIV_KEY, process.env.WALLET_PRIV_KEY],
      chainId: 97,
    },


  },

  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      "goerli": 0,
      "testnetbsc": 0
    },
    wallet: {
      default: 1,
      "goerli": 1,
      "testnetbsc": 1
    },
    player: {
      default: 2,

    }
  }
};
