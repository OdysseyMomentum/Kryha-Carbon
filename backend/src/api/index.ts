import { Router } from "express";
import { productRouter } from "./product/route";
import { reportRouter } from "./report/route";
import { userRouter } from "./user/route";

const router: Router = Router();

router.use(userRouter);
router.use(reportRouter);
router.use(productRouter);

export default router;
