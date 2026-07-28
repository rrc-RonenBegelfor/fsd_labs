import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware} from "@clerk/express";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import leaderRoutes from "./api/v1/routes/leaderRoutes";

import corsOptions from "../config/cors";
import setupSwagger from "../config/swagger";
import errorHandler from "./api/v1/middleware/errorHandler";

const app: Express = express();

dotenv.config();
app.use(morgan("combined"));

app.use(express.json());

app.use(cors(corsOptions));

app.use(clerkMiddleware());

setupSwagger(app);

app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

app.use("/api/v1", employeeRoutes);
app.use("/api/v1", leaderRoutes);

app.use(errorHandler); 

export default app;