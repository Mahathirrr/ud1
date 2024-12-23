import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

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

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
