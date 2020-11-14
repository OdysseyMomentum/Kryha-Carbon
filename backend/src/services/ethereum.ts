import Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'
import * as web3eth from 'web3/types'

import { ETHEREUM_RPC_URL, HD_WALLET_MNEMONIC, HD_WALLET_DEFAULT_ACCOUNT, CONTRACTS} from '../constants.js'
// HD_WALLET_DEFAULT_ACCOUNT, CONTRACT_NAMES, CERTIFICATE_NAMES } from '../constants.js'
import { getStateMutability } from './utils.js'
// import setupSubscriptions from './ethereum/subscriptions.js'

// fixme: hdwallet-provider still broken with websockets, using second provider for events
const web3 = new Web3(new HDWalletProvider(HD_WALLET_MNEMONIC, new Web3.providers.WebsocketProvider(ETHEREUM_RPC_URL)))
web3.eth.defaultAccount = HD_WALLET_DEFAULT_ACCOUNT
const web3Events = new Web3(new Web3.providers.WebsocketProvider(ETHEREUM_RPC_URL))

const subscriptions = {}

export const getMethods = async function getMethods(contractName: string) {
  const contractABI = (CONTRACTS)[contractName].abi
  const methods = {} as {[key: string]: any}
  if (!Array.isArray(contractABI)) { return undefined }

  // TODO: revisit logic
  for (const element of contractABI) {
    if (element.type === 'function') { methods[element.name||""] = element.stateMutability }
  }
  return methods
}

// method that does the appropriate call or send depending on the functions state mutability,
// optionally signing the transaction using a private key provided in options.from
export const callMethod = async (contractName: string, methodName: string, params: any, options: any) => {
  const contract = (CONTRACTS)[contractName]
  if (!contract) { throw new Error(`Contract Not Found: ${contractName}`) }
  const { contractAddress, from, gas, ..._options } = options || {}
  if (contractAddress) { contract.abi.options.address = contractAddress }
  const stateMutability = await getStateMutability(CONTRACTS, contractName, methodName)

  if (from && !web3.utils.isAddress(from)) {
    // if from is defined, but not an address, assume it is a private key
    const tx = {
      to: contract.abi.options.address,
      data: contract.abi.methods[methodName](...params).encodeABI(),
      ..._options
    }
    const { gasLimit } = await web3.eth.getBlock('latest')
    // todo: figure out why estimateGas fails on Ganache, Parity AND Geth => web3 issue?
    // const _gas = gas || Math.min((await this.web3.eth.estimateGas(tx) * 4), gasLimit)
    // const { rawTransaction } = await this.web3.eth.accounts.signTransaction({ gas: _gas, ...tx }, from)
    const transaction = await web3.eth.accounts.signTransaction({ gas: gasLimit, ...tx }, from)
    if (stateMutability === 'pure' || stateMutability === 'view') {
      return web3.eth.call(transaction.rawTransaction as any)
    } else {
      return web3.eth.sendSignedTransaction(transaction.rawTransaction as string)
    }
  } else {
    // if options.from is not defined or an address, assume it is passed into the contract instance and controlled by the node
    if (stateMutability === 'pure' || stateMutability === 'view') {
      return contract.abi.methods[methodName](...params).call({ from, ..._options })
    } else {
      return contract.abi.methods[methodName](...params).send({ from, ..._options })
    }
  }
}
