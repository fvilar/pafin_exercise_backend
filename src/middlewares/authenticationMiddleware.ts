import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export function authenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Implement JWT authentication logic here

  const token = req.header("Authorization");

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET + "", (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    next();
  });
}
