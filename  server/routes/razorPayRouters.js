import Razorpay from "razorpay";
import express from "express";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();
const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// Create Payment Order
router.post("/payment-create", async (req, res) => {
   
  try {
    const options = {
      amount: 1* 100, 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    res.json({ orderId: order.id });
  } catch (err) {
    res.status(500).json({ message: "Payment failed", error: err.message });
  }
});

// Verify Payment Signature
router.post("/payment-verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Payment verification failed" });
  }
});

export default router;
