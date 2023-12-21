import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
