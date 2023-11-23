import { createUserSchema, updateUserSchema } from "../schemas/userSchema";
import { Request, Response, NextFunction } from "express";

export const validateCreateUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body; // Assuming the user data is in the request body

  const { error } = createUserSchema.validate(userData, { abortEarly: false });

  if (error) {
    // Validation failed, send an error response
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(400).json({ error: errorMessage });
  }

  // Validation succeeded, continue to the next middleware or route handler
  next();
};

export const validateUpdateUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body; // Assuming the user data is in the request body

  const { error } = updateUserSchema.validate(userData, { abortEarly: false });

  if (error) {
    // Validation failed, send an error response
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(400).json({ error: errorMessage });
  }

  // Validation succeeded, continue to the next middleware or route handler
  next();
};
