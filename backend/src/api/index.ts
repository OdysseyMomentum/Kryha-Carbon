import { Router } from "express";
import { testRouter } from "./home/route";

const router: Router = Router();

router.use(testRouter);

export default router;
