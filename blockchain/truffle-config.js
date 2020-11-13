// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*",
//     },
//   },
// };

const { HD_WALLET_MNEMONIC, ETHEREUM_RPC_URL } = require("./constants.js");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      provider: () =>
        new HDWalletProvider(HD_WALLET_MNEMONIC, ETHEREUM_RPC_URL, 0, 10),
      from: "0xe311775922ccb9e5cfc7dc94aa0399c0da695d02",
      gas: 5500000,
      network_id: "*",
    },
  },

  contracts_directory: "./contracts",
  contracts_build_directory: "./build",

  compilers: {
    solc: {
      version: "0.5.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
