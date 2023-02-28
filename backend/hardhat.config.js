require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
require('dotenv').config({ path: __dirname + '/../.env' });



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
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.DEPLOYER_PRIV_KEY, process.env.WALLET_PRIV_KEY],
      chainId: 5,
    },
    bscTestnet: {
      url: "https://bsc.getblock.io/3b1d846b-c686-483e-b57d-fc3a2ebf8b0b/testnet/",
      accounts: [process.env.DEPLOYER_PRIV_KEY, process.env.WALLET_PRIV_KEY],
      chainId: 97,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [process.env.DEPLOYER_PRIV_KEY, process.env.WALLET_PRIV_KEY],
      chainId: 56,
    },



  },
  //Verification of contracts
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY,
      bsc: process.env.BSC_API_KEY
    }
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: process.env.COINMARKET_API,
    token: 'BNB'
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
