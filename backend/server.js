import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/course.js";
import instructorRoutes from "./routes/instructor.js";
import userRoutes from "./routes/user.js";

// Create express app
const app = express();
dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((e) => console.error(e));

// Apply Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API available at /api");
});

// Routes
app.use("/api", authRoutes);
app.use("/api", courseRoutes);
app.use("/api", instructorRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
