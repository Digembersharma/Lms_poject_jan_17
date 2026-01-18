import express from "express";
import { connectDB } from "./src/config/db.js";
import { ENV } from "./src/config/env.js";

const app = express();

app.listen(ENV.PORT, () => {
    console.log("Server is working on port", ENV.PORT);
    connectDB();
});
