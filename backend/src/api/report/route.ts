import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import { validateUser } from "../validators/userValidator";
import {
  createReportHandler,
  retrieveAllHandler,
  verifyHandler
} from "./controller";
import { reportValidator } from "./validator";

const router = express.Router();

router.post(
  "/reports/create",
  validateUser,
  reportValidator,
  validateRequest,
  createReportHandler
);

router.post("/reports/verify", validateUser, validateRequest, verifyHandler);
router.post("/reports/all", validateUser, validateRequest, retrieveAllHandler);

export { router as reportRouter };
