import { body } from "express-validator";

export const productValidator = [
  body("product")
    .notEmpty()
    .withMessage("The request should contain a product"),
  body("product.name")
    .notEmpty()
    .withMessage("The product should contain a product name"),
  body("product.category")
    .notEmpty()
    .withMessage("The product should contain a product category"),
  body("product.partner")
    .notEmpty()
    .withMessage("The product should contain a partner")
];

export const updateValidator = [
  body("productName")
    .notEmpty()
    .withMessage("The request should contain the product name")
];
