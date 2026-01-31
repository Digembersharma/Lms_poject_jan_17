import express from "express";
import { connectDB } from "./src/config/db.js";
import { ENV } from "./src/config/env.js";
import cookieParser from "cookie-parser";
import userRoute from "./src/routers/user.route.js";

const app = express();

// ✅ Middleware
app.use(cookieParser());          // ✅ call function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Test route
app.get("/test", (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("Server is working");
});

// ✅ Router
app.use('/api', userRoute);

// ✅ Log port correctly
console.log("PORT:", process.env.PORT);

// ✅ Start server
app.listen(ENV.PORT, () => {
    console.log("Server is working on port", ENV.PORT);
    connectDB();
});
