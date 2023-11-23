// config/database.ts

import { Sequelize } from "sequelize";
const DB_HOST = process.env.DB_HOST || "";
const DB_PORT = process.env.DB_PORT || "";
const DB_USERNAME = process.env.DB_USERNAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// const sequelize = new Sequelize({
//     dialect: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "your_username",
//     password: "your_password",
//     database: "your_database",
//   });

export { sequelize };
