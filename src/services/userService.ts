// src/services/userService.ts

import User from "../models/userModel";
import { CreateUserInput } from "../interfaces/createUserInput";

export class UserService {
  static async createUser(userData: CreateUserInput): Promise<User> {
    try {
      const newUser = await User.create({ ...userData });
      return newUser;
    } catch (error: any) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  static async getUserById(userId: string): Promise<User | null> {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error: any) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  static async updateUser(
    userId: string,
    userData: CreateUserInput
  ): Promise<User | null> {
    try {
      const user = await User.findByPk(userId);

      if (user) {
        // Update user properties
        await user.update({ ...userData });
        return user;
      }

      return null; // User not found
    } catch (error: any) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      const user = await User.findByPk(userId);

      if (user) {
        // Delete the user
        await user.destroy();
      } else {
        throw new Error("User not found");
      }
    } catch (error: any) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  static async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error: any) {
      throw new Error(`Error fetching all users: ${error.message}`);
    }
  }
}
