import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { userRouter } from "./routes/userRoutes";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { authenticationMiddleware } from "./middlewares/authenticationMiddleware";

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yml"));

app.use(express.json());
app.use("/api/users", authenticationMiddleware, userRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
