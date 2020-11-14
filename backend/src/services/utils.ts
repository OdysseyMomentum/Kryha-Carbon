import { IContracts } from '../constants'
import {MetaCoinABI} from '../static/contract-abi/MetaCoin'

export const getContracts = async (web3: any) => {
  const networkId = await web3.eth.net.getId()
  const jsonInterfaces: [{[key: string]: any}] = [MetaCoinABI]
  const contracts: {[key: string]: any} = {}

  for (const jsonInterface of jsonInterfaces) {
    const { contractName, abi, bytecode, networks } = jsonInterface
    const address = networks[networkId] && networks[networkId].address

    const defaultAccount = (await web3.eth.getAccounts())[0]

    contracts[contractName as string] = new web3.eth.Contract(abi, address, { from: defaultAccount, data: bytecode })
  }
  return contracts
}


export const getStateMutability = (contracts: IContracts, contractName: string, methodName: string) => {
  const contract = contracts[contractName]

  if (!Array.isArray(contract.abi)) { return undefined }

  const method = contract.abi.find((element, index, array) => element.type === 'function' && element.name === methodName)

  return method && method.stateMutability
}

// export const getCertificateType = (materialIdOrName) => {
//   const maybeId = parseInt(materialIdOrName)
//   if (maybeId) {
//     return materialIdToCertificateType[materialIdOrName]
//   } else {
//     const materialId = materialNameToId[materialIdOrName]
//     return materialIdToCertificateType[materialId]
//   }
// }

// export const getProvenanceId = (provenanceName) => {
//   return provenanceNameToId[provenanceName]
// }

// export const getProvenanceName = (provenanceId) => {
//   const [provenanceName] = Object.entries(provenanceNameToId).find(([key, value]) => value === provenanceId)
//   return provenanceName
// }
