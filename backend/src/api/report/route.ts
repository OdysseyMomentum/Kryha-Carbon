import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import { validateUser } from "../validators/userValidator";
import { createReportHandler } from "./controller";
import { reportValidator } from "./validator";

const router = express.Router();

router.post(
  "/reports/create",
  validateUser,
  reportValidator,
  validateRequest,
  createReportHandler
);

export { router as reportRouter };
