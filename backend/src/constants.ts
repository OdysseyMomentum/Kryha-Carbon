import dotenvFlow from "dotenv-flow";

dotenvFlow.config();
export const HOST = process.env.HOST || "localhost";
export const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL || "";
export const HD_WALLET_MNEMONIC = process.env.HD_WALLET_MNEMONIC || "";
export const HD_WALLET_DEFAULT_ACCOUNT =
  process.env.HD_WALLET_DEFAULT_ACCOUNT ||
  "0x0a34eb2426e75271B3d1718E227Ee9D10b69E6E7";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = Number(process.env.PORT) || "5000";
export const MONGO = process.env.MONGO || "mongodb://localhost:27017";
export const DB_NAME = "kryha";
export const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",") || [
  "http://localhost:3000"
];

export const NOTARY = {
  contractName: "Notary",
  address: "0x39A3D1A744a723BA330A327Dc0f04D72246E16C6",
  abi: [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      constant: false,
      inputs: [
        {
          name: "hash",
          type: "bytes32"
        }
      ],
      name: "addDocHash",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "hash",
          type: "bytes32"
        }
      ],
      name: "findDocHash",
      outputs: [
        {
          name: "",
          type: "uint256"
        },
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
};
