import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = Number(process.env.PORT) || "5000";
export const MONGO = process.env.MONGO || "mongodb://localhost:27017";
export const DB_NAME = "kryha";
export const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",") || [
  "http://localhost:3000"
];
