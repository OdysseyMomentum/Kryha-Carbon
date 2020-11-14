import { body } from "express-validator";

export const validateUser = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("The request body email should contain a valid email address")
];
