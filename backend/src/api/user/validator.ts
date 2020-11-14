import { body } from "express-validator";

export const loginValidator = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("The request body should contain a valid email address")
];

export const registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("The request body name should contain a name"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("The request body email should contain a valid email address"),
  body("accountType")
    .notEmpty()
    ?.trim()
    .isIn(["upstream", "distributor", "midstream", "downstream"])
    .withMessage(
      "The request body role should be one of: upstream, distributor, midstream, downstream"
    ),
  body("secret")
    .notEmpty()
    .withMessage("The request body secret should contain a secret"),
  body("accountId")
    .notEmpty()
    .withMessage("The request body secret should contain an account Id")
];
