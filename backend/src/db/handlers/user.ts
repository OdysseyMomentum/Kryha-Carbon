import type { User as UserType } from "../../types/user";
import { User } from "../models/user";

export const insert = (user: UserType): Promise<UserType> => {
  return new User(user).save().catch((e) => {
    console.log(e);
    throw e;
  });
};

export const _findOne = async (
  query: Record<string, unknown>
): Promise<UserType> => {
  return User.findOne(query).catch((e) => {
    console.log(e);
    throw e;
  });
};

export const findOneByEmail = async (email: string): Promise<UserType> => {
  return _findOne({ email });
};

export const findMany = async (limit: number): Promise<UserType[]> => {
  return User.find()
    .limit(limit)
    .catch((e) => {
      console.log(e);
      throw e;
    });
};
