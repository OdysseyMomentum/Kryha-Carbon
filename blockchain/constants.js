require("dotenv-flow").config();

const HOST = process.env.HOST || localhost;
const PORT = process.env.PORT || 8545;

module.exports = {
  HD_WALLET_MNEMONIC,
  HD_WALLET_DEFAULT_ACCOUNT,
  HOST,
  PORT,
};
