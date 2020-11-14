import dotenvFlow from "dotenv-flow";
import {MetaCoinABI} from './static/contract-abi/MetaCoin'

dotenvFlow.config();
export const HOST = process.env.HOST || "localhost";
export const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL || ""
export const HD_WALLET_MNEMONIC = process.env.HD_WALLET_MNEMONIC || ""
export const HD_WALLET_DEFAULT_ACCOUNT = process.env.HD_WALLET_DEFAULT_ACCOUNT || "0x0a34eb2426e75271B3d1718E227Ee9D10b69E6E7"

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = Number(process.env.PORT) || "5000";
export const MONGO = process.env.MONGO || "mongodb://localhost:27017";
export const DB_NAME = "kryha";
export const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",") || [
  "http://localhost:3000"
];

export interface IContracts { [key: string]: { name: string, address: string, abi: typeof MetaCoinABI } }

export const CONTRACTS = {
  MetaCoin: {
    name: "MetaCoin",
    address: "0xBf334D85Bc3244755976de81A8c7A46b7CbA7909",
    abi: MetaCoinABI
  }
} as IContracts

export const CONTRACT_NAMES = ["MetaCoin"]


