import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages/send", messageRoutes);
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  connectToMongoDb();
  console.log("Server started on port " + PORT);
});
