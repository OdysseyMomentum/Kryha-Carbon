import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<Record<string, string>[]> | void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.error(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }

  return next();
};
