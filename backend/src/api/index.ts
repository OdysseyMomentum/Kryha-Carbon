import { Router } from "express";
import { reportRouter } from "./report/route";
import { userRouter } from "./user/route";

const router: Router = Router();

router.use(userRouter);
router.use(reportRouter);

export default router;
