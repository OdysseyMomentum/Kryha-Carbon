import mongoose, { Schema, Document } from "mongoose";
import type { User as UserType } from "../../types/user";

export const userSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    accountType: {
      type: String,
      required: true
    },
    secret: {
      type: String,
      required: true,
      unique: true
    },
    accountId: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const User = mongoose.model<UserType & Document>("User", userSchema);

export { User };
