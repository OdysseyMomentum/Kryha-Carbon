const { HOST, PORT } = require("./constants.js");

module.exports = {
  networks: {
    development: {
      host: HOST,
      port: PORT,
      network_id: "*",
    },
  },
};
