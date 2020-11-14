import Web3 from "web3";
import { NOTARY } from "../constants";

let web3;

export const connectNode = async () => {
  const provider = new Web3.providers.HttpProvider("http://ganache:8545");
  web3 = new Web3(provider);

  const abi = NOTARY.abi;
  const address = NOTARY.address;

  // @ts-ignore
  const contract = new web3.eth.Contract(abi, address);
  return { web3, contract };
};

export const sendHash = (
  hash: string,
  web3: Web3,
  contract: any,
  accountId: string
) => {
  web3.eth.getAccounts((error: Error, accounts: string[]) => {
    contract.methods.addDocHash(hash).send({ from: accountId });
  });
};
