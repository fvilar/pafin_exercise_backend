// src/routes/userRouter.ts

import express from "express";
import { UserController } from "../controllers/userController";
import {
  validateCreateUserMiddleware,
  validateUpdateUserMiddleware,
} from "../middlewares/validateUser";
const userRouter = express.Router();

// Create a new user
userRouter.post("/", validateCreateUserMiddleware, UserController.createUser);

// Get user by ID
userRouter.get("/:userId", UserController.getUserById);

// Update user by ID
userRouter.put(
  "/:userId",
  validateUpdateUserMiddleware,
  UserController.updateUser
);

// Delete user by ID
userRouter.delete("/:userId", UserController.deleteUser);

// Get all users
userRouter.get("/", UserController.getAllUsers);

export { userRouter };
