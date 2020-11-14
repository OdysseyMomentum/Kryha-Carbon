require("dotenv-flow").config();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8545;
const HD_WALLET_MNEMONIC =
  process.env.HD_WALLET_MNEMONIC ||
  "stem yellow father provide afraid either embark stock note budget school lens";
const HD_WALLET_DEFAULT_ACCOUNT =
  process.envHD_WALLET_DEFAULT_ACCOUNT ||
  "0x0a34eb2426e75271B3d1718E227Ee9D10b69E6E7";

module.exports = {
  HD_WALLET_MNEMONIC,
  HD_WALLET_DEFAULT_ACCOUNT,
  HOST,
  PORT,
};
