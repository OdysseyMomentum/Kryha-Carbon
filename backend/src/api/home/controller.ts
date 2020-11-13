import { Request, Response } from "express";

export const test = async (req: Request, res: Response): Promise<Response> => {
  const response = "Hello API";

  if (!response) {
    return res.status(500).json({ message: "Test not working" });
  }

  return res.status(200).json({ message: "success", result: response });
};
