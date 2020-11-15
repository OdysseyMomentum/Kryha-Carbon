import { Product } from "./product";

export type MessageTypes = "approve" | "error";

interface MessageBase {
  message: MessageTypes;
  content: {};
}

export interface ApproveMessage extends MessageBase {
  message: "approve";
  content: {
    sender: string;
    receiver: string;
    product: Product;
  };
}

export interface ErrorMessage extends MessageBase {
  message: "error";
  content: {
    msg: string;
  };
}

export type Message = ApproveMessage | ErrorMessage;
