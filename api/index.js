import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import hotelRouter from "./routes/hotel.js";
import roomRouter from "./routes/rooms.js";
import paymentRouter from "./routes/payment.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cors());
/* Routing */
app.use(express.json());
app.use(cookieParser());
app.use("/api/payment", paymentRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

/* Error Handler */

const errorHandler = (err, req, res, next) => {
  console.log("Error Handling MiddleWare");
  const response = {
    success: false,
    status: err.status || 500,
    message: err.message || "somethg went wrong",
    stack: err.stack,
  };
  return res.status(500).json(response);
};
app.use(errorHandler);
/* listening to ports */
app.listen(3000, () => {
  console.log("Connected to backend...!");
  connectDB();
});
