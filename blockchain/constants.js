require("dotenv-flow").config();

const HOST = process.env.HOST || localhost;
const PORT = process.env.PORT || 8545;

module.exports = {
  HOST,
  PORT,
};
