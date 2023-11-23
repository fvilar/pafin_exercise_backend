import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export function validationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {}
