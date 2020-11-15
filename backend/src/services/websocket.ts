import io from "socket.io";
import type * as http from "http";
import type { Message } from "../types/message";

export let ioServer: io.Server;

const defaultOptions: io.ServerOptions = {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
};

export const setupWebSocket = (
  server: http.Server,
  options?: io.ServerOptions
): io.Server => {
  const _options = {
    ...defaultOptions,
    ...options
  };
  ioServer = io(server, _options);
  ioServer.on("connection", (socket: io.Socket) => {
    console.log("Connected");
  });
  return ioServer;
};

export const emitMessage = <T extends Message>(
  message: T
): ReturnType<typeof ioServer["emit"]> =>
  ioServer.emit(message.message, message.content);
