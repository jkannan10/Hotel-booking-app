import makePayment, { verifyPayment } from "../utils/payment.js";

import express from "express";
const router = express.Router();
router.post("/order", makePayment);
// router.post("/verify", verifyPayment);

export default router;
