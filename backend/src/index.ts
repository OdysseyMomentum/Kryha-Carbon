import http from "http";
import { app } from "./app";
import { PORT, NODE_ENV } from "./constants";
import { startMongo } from "./services/mongo";

const server = http.createServer(app);

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection", err);
  throw err;
});

process.on("uncaughtException", (err) => {
  console.error("uncaughtException", err);
  throw err;
});

const start = async () => {
  await startMongo();

  server.listen(PORT, async () => {
    console.log(
      `** HTTP service listening on port ${PORT} ${NODE_ENV} mode **`
    );
  });
};

start();
