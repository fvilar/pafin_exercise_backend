import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .pattern(/^[^0-9]+$/)
    .required()
    .messages({
      "string.base": "Name must be a string",
      "string.empty": "Name is required",
      "string.min": "Name should have at least {#limit} characters",
      "string.max": "Name should not exceed {#limit} characters",
      "string.pattern.base": "Name should not contain numbers",
      "any.required": "Name is required",
    }),
  email: Joi.string().trim().email().required().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password should have at least {#limit} characters",
    "any.required": "Password is required",
  }),
});

export const updateUserSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .pattern(/^[^0-9]+$/)
    .messages({
      "string.base": "Name must be a string",
      "string.empty": "Name is required",
      "string.min": "Name should have at least {#limit} characters",
      "string.max": "Name should not exceed {#limit} characters",
      "string.pattern.base": "Name should not contain numbers",
    }),
  email: Joi.string().trim().email().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  password: Joi.string().min(6).messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password should have at least {#limit} characters",
  }),
});
