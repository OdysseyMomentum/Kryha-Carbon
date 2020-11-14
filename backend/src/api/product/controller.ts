import { Request, Response } from "express";
import { registerProduct, updateProduct } from "../../core/product";

export const registerProductHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await registerProduct(req.body.email, req.body.product);
  if (!response) {
    return res.status(500).json({ message: "Product registration failed" });
  }

  return res.status(200).json({ message: "success" });
};

export const updateProductHandler = async (req: Request, res: Response) => {
  const response = await updateProduct(req.body.productName, req.body.email);

  if (!response) {
    return res.status(500).json({ message: "Product update failed" });
  }

  return res.status(200).json({ message: "success" });
};

export const notifyHandler = async (req: Request, res: Response) => {
  const response = await notifyUpstream(req.body.productName, req.body.email);

  if (!response) {
    return res.status(500).json({ message: "Product update failed" });
  }

  return res.status(200).json({ message: "success" });
};
