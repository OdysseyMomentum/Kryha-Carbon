import { Request, Response } from "express";
import { findAllUsers, findUser, registerUser } from "../../core/user";

export const loginHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const email = req.body.email;
  const response = await findUser(email);
  if (!response) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "success",
    result: {
      email: response.email,
      accountType: response.accountType,
      name: response.name
    }
  });
};

export const findUsersHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await findAllUsers();

  if (!response) {
    return res.status(404).json({ message: "Users not found" });
  }

  return res.status(200).json({ result: response });
};

export const registerHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, accountType, accountId, secret } = req.body;

  const response = await registerUser(
    name,
    email,
    accountType,
    secret,
    accountId
  );

  if (!response) {
    return res.status(400).json({ message: "User registration error" });
  }

  return res.status(200).json({ message: "success" });
};
