import { findMany, findOneByEmail, insert } from "../db/handlers/user";
import { User as UserType } from "../types/user";

export const registerUser = async (
  name: string,
  email: string,
  accountType: string,
  secret: string,
  accountId: string
): Promise<UserType | undefined> => {
  const newUser: UserType = { name, email, accountType, accountId, secret };
  let user;
  try {
    user = await insert(newUser);
  } catch (error) {
    return;
  }

  return user;
};

export const findUser = async (email: string): Promise<UserType> => {
  return findOneByEmail(email);
};

export const findAllUsers = async () => {
  const limit = 50;
  const retrievedUsers = await findMany(limit);
  const users = retrievedUsers.map((user) => {
    return {
      name: user.name,
      email: user.email,
      accountType: user.accountType
    };
  });
  return users;
};
