import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import { findUsersHandler, loginHandler, registerHandler } from "./controller";
import { loginValidator } from "./validator";

const router = express.Router();

router.post("/user/login", loginValidator, validateRequest, loginHandler);
router.post("/user/register", registerHandler);
router.get("/user/all", findUsersHandler);

export { router as userRouter };
