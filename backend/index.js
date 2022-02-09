import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";
import Users from "./models/UserModel.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log("database connected...");
  await Users.sync();
} catch (error) {
  console.error("connection error", error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(5000, () => console.log("server running at port 5000"));
