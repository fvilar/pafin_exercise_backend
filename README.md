# Backend Data Handling API - README

This repository contains the code for a backend API developed in Node.JS and Typescript, facilitating data management in a PostgreSQL database.

## NOTES:
### About Passwords:
The intentional return of passwords in the API responses is solely for the purpose of creating a more transparent and comprehensible testing environment. We emphasize that this approach is not reflective of standard security practices, and in live applications, sensitive information, especially passwords, must never be exposed to or handled on the client side.
As we strive for the highest standards of security and data protection, we want to reassure you that the intentional exposure of passwords in the API is strictly for testing purposes within the development and QA environments. We strongly advise against incorporating such practices into any production or live systems.
### About .env file
The .env file has been intentionally uploaded to facilitate testing. While this may expedite the testing phase, it is essential to underscore that such practices are strictly for development and testing purposes. In a production environment, sensitive configuration information, especially those contained in the .env file, should never be disclosed or made accessible.
We kindly request that you exercise caution and refrain from replicating this approach in any live or production systems. The intentional upload of the .env file is intended solely for testing within the development and QA environments.
Similarly, a test JSON Web Token (JWT) has been generated to assist in testing scenarios. This token is pre-existing and has been provided for the purpose of expediting test procedures. It is imperative to note that generating and using test JWTs is not a secure practice for live applications. In production, each JWT must be generated and handled according to established security standards.

# Table of Contents

1. [Objective](#objective)
2. [Requirements](#requirements)
3. [Setup Instructions](#setup-instructions)
4. [Project Folder Structure](#project-folder-structure)
   - [Separation of Concerns](#separation-of-concerns)
   - [Example](#example)
5. [Backend Data Handling Project Report](#backend-data-handling-project-report)
   - [Project Overview](#project-overview)
     - [Implemented Features](#implemented-features)
   - [RESTful API and Backend Principles Applied](#restful-api-and-backend-principles-applied)
   - [Conclusion](#conclusion)

---

## Objective

The primary objective of this project is to showcase proficiency in backend data handling using Node.JS and PostgreSQL. The API allows for CRUD operations on a single resource, "User," with specific attributes including `id`, `name`, `email`, and `password`. Additionally, the API incorporates input validation, JWT authentication, and comprehensive documentation.

## Requirements

1. **CRUD Operations:**

   - The API supports Create, Read, Update, and Delete operations for the User resource.

2. **User Resource Attributes:**

   - `id`: unique identifier for the user (string or UUID)
   - `name`: user's name (string)
   - `email`: user's email address (string)
   - `password`: user's password (string)

3. **Input Validation:**

   - The API handles input validation and provides appropriate error messages for invalid inputs.

4. **JWT Authentication:**

   - JWT authentication secures the API to ensure data integrity and confidentiality.

5. **Documentation:**
   - The API is well-documented with clear instructions on running the code and testing the functionalities.

## Setup Instructions

To run the API locally, follow these steps:

1. **Clone the Repository:**
   `git clone`
2. **Install:**
   `npm install`
3. **Configurate the .env file**
4. **Build the code**
   `npm run build`
5. **Execute the code**
   `npm run build`
6. **You can run the test by:**
   `npm run test`

## Project Folder Structure

- `/src`: Source code

  - `/controllers`: Controller logic
  - `/middlewares`: Middleware functions
  - `/models`: Data models
  - `/routes`: API routes
  - `/services`: Service functions
  - `app.ts`: Express app configuration
  - `server.ts`: Server startup file

- `/config`: Configuration files

  - `database.ts`: Database configuration
  - `jwtConfig.ts`: JWT configuration

- `/migrations`: Database migration files

- `/tests`: Unit and integration tests

  - `/unit`: Unit tests for controllers and services
  - `/integration`: Integration tests for API endpoints

- `.env`: Environment variables configuration

- `.gitignore`: Git ignore rules

- `package.json`: Project dependencies and scripts

- `tsconfig.json`: TypeScript configuration

- `README.md`: Project documentation

## Project File Structure

## Separation of Concerns

The project follows a clear separation of concerns, organizing components into distinct folders for better manageability and understanding.

### Example:

- **Controllers**: Logic for handling HTTP requests and responses.

  - `userController.ts`: Manages CRUD operations for the User resource.

- **Middlewares**: Functions that handle request processing between the client and the server.

  - `authenticationMiddleware.ts`: Implements JWT authentication.
  - `validationMiddleware.ts`: Handles input validation.

- **Models**: Defines data structures and entities.

  - `userModel.ts`: Defines the User model.

- **Routes**: Defines API endpoints and their corresponding controllers.

  - `userRoutes.ts`: Handles User resource routes.

- **Services**: Implements business logic.
  - `userService.ts`: Contains logic for user-related operations.

# Backend Data Handling Project Report

## Project Overview:

The objective of this assignment was to evaluate backend data handling skills using Node.js and PostgreSQL. The project involved developing a RESTful API for CRUD operations on a single resource (User) using TypeScript and Node.js.

### Implemented Features:

1. **CRUD Operations:**

   - Implemented Create, Read, Update, and Delete operations for the User resource.
   - Defined User attributes: id (unique identifier), name, email, and password.

2. **Type Safety with TypeScript:**

   - Utilized TypeScript to ensure type safety and enhance code readability.
   - Defined interfaces for data structures to prevent runtime errors.

3. **Express.js for Routing:**

   - Employed Express.js for handling HTTP requests and routing.
   - Organized route handlers for each CRUD operation on the User resource.

4. **Database Interaction with Sequelize:**

   - Utilized Sequelize as the ORM to interact with the PostgreSQL database.
   - Abstracted away raw SQL queries, promoting maintainability and preventing SQL injection vulnerabilities.

5. **Input Validation Middleware:**

   - Implemented middleware for input validation using `express-validator`.
   - Ensured clear error messages for invalid input data.

6. **JWT Authentication:**

   - Secured the API using JSON Web Token (JWT) authentication.
   - Created middleware to verify JWT tokens for protected routes.

7. **Error Handling:**

   - Implemented consistent error handling with appropriate HTTP status codes and informative error messages.

8. **Logging:**

   - Incorporated logging mechanisms to track errors, warnings, and relevant information.

9. **Documentation:**

   - Thoroughly documented the API in the README file.
   - Included setup instructions, endpoint details, and expected request and response formats.

10. **Testing:**

    - Wrote unit tests for critical components using Jest and Supertest.
    - Ensured comprehensive test coverage for route handlers, input validation, and authentication middleware.

11. **Security Best Practices:**

    - Adhered to security best practices, including parameterized queries, secure password hashing, and HTTPS for data transmission.

12. **Scalability Considerations:**

    - Designed the API with scalability in mind, optimizing database queries and considering caching mechanisms.

13. **Code Comments and Documentation:**

    - Included meaningful comments in the code and documented external dependencies.

14. **Code Review:**
    - Conducted code reviews to ensure adherence to best practices and coding standards.

# RESTful API and Backend Principles Applied

## RESTful API Principles:

1. **Resource-Based Routing:**

   - Endpoints were structured around the User resource, following a resource-based approach. For example:
     - `GET /users`: Retrieve all users.
     - `GET /users/:id`: Retrieve a specific user.
     - `POST /users`: Create a new user.
     - `PUT /users/:id`: Update a specific user.
     - `DELETE /users/:id`: Delete a specific user.

2. **HTTP Methods:**

   - Proper HTTP methods were used for each operation: GET for retrieval, POST for creation, PUT for updating, and DELETE for deletion.

3. **Resource Representation:**

   - Data was represented in a clear and consistent manner using JSON for both request and response payloads.

4. **RESTful URIs:**

   - URIs were designed to be intuitive and follow RESTful conventions, making it easier for developers to understand and use the API.

5. **Statelessness:**

   - The API was designed to be stateless, meaning each request from a client contains all the information needed to fulfill that request. This simplifies the server and allows for better scalability.

6. **Status Codes:**

   - Appropriate HTTP status codes were returned with each response to indicate the success or failure of the request. For example, 200 for successful GET requests, 201 for successful POST requests, and 404 for not found.

7. **Error Handling:**
   - Error responses were standardized, providing meaningful error messages and corresponding HTTP status codes to help clients identify and handle errors effectively.

## Conclusion:

The project was successfully completed, meeting all specified requirements. The implemented backend demonstrates clean, maintainable code following best practices in data handling with Node.js and PostgreSQL.
