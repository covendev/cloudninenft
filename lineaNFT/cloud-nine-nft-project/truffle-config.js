require("dotenv").config();
const { MNEMONIC, INFURA_API_KEY } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    goerli: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`
        ),
      network_id: 59140, // Goerli's network id
      chain_id: 59140, // Goerli's chain id
      gas: 5500000, // Gas limit used for deploys.
      confirmations: 2, // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};