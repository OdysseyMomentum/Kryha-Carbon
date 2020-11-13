import express from "express";
import { test } from "./controller";

const router = express.Router();

router.get("/home", test);

export { router as testRouter };
