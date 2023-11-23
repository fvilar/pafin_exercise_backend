// src/controllers/userController.ts

import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { CreateUserInput } from "../interfaces/createUserInput";
import bcrypt from "bcrypt";

export class UserController {
  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: CreateUserInput = req.body;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      // Replace the plain password with the hashed password
      const newUser = await UserService.createUser({
        ...userData,
        password: hashedPassword,
      });

      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId: string = req.params.userId;
      const user = await UserService.getUserById(userId);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId: string = req.params.userId;
      const userData: CreateUserInput = req.body;
      const updatedUser = await UserService.updateUser(userId, userData);

      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId: string = req.params.userId;
      await UserService.deleteUser(userId);
      res.status(200).send(); // No content for successful deletion
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      const usersWithoutPassword = users.map(({ password, ...user }) => user);
      res.status(200).json(usersWithoutPassword);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
