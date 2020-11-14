import { body } from "express-validator";

export const reportValidator = [
  body("report").notEmpty().withMessage("The request should contain a report"),
  body("report.emissions")
    .notEmpty()
    .withMessage("The report should contain emissions"),
  body("report.year").notEmpty().withMessage("The report should contain a year")
];
