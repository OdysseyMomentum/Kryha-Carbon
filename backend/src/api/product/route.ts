import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import { validateUser } from "../validators/userValidator";
import {
  notifyHandler,
  registerProductHandler,
  retrieveProductsHandler,
  updateProductHandler
} from "./controller";
import { productValidator, updateValidator } from "./validator";

const router = express.Router();

router.post(
  "/product/register",
  validateUser,
  productValidator,
  validateRequest,
  registerProductHandler
);

router.post(
  "/product/update",
  updateValidator,
  validateUser,
  validateRequest,
  updateProductHandler
);

router.post("/product/notify", validateUser, validateRequest, notifyHandler);

router.post(
  "/product/all",
  validateUser,
  validateRequest,
  retrieveProductsHandler
);

export { router as productRouter };
