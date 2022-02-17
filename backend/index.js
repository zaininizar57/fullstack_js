import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";
import Users from "./models/UserModel.js";
import cookieParser from "cookie-parser";

// var cors = require("cors");

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

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.use(router);

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.listen(5000, () => console.log("server running at port 5000"));
