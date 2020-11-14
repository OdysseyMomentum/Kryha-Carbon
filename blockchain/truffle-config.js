const { HOST, PORT } = require("./constants.js");

module.exports = {
  networks: {
    development: {
      host: HOST,
      port: PORT,
      network_id: "*",
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./build",
  compilers: {
    solc: {
      version: "0.5.1",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
