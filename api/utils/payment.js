import Razorpay from "razorpay";
import crypto from "crypto";
const makePayment = async (req, res, next) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZOR_KEY,
    key_secret: process.env.RAZOR_SECRETKEY,
  });
  const options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log(order);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + " " + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("jk123", process.env.RAZOR_KEY)
      .update(sign.toString())
      .digest("hex");
    if (razorpay_signature === expectedSign) {
      res.status(200).json({ message: "Payment verfied Successfully" });
    } else {
      res.status(400).json({ message: "Invalid payment" });
    }
  } catch (err) {
    next(err);
  }
};
export default makePayment;
