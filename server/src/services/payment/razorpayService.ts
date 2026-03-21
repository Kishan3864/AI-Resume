import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export const PLANS_INR: Record<
  string,
  { name: string; price: number; priceInPaise: number; interval?: string }
> = {
  monthly: {
    name: "Pro Monthly",
    price: 499,
    priceInPaise: 49900,
    interval: "monthly",
  },
  yearly: {
    name: "Pro Yearly",
    price: 2999,
    priceInPaise: 299900,
    interval: "yearly",
  },
  lifetime: {
    name: "Pro Lifetime",
    price: 4999,
    priceInPaise: 499900,
  },
};

export async function createOrder(planKey: string, userId: string) {
  const plan = PLANS_INR[planKey];
  if (!plan) {
    throw new Error(`Invalid plan: ${planKey}`);
  }

  const order = await razorpay.orders.create({
    amount: plan.priceInPaise,
    currency: "INR",
    receipt: `receipt_${userId}_${Date.now()}`,
    notes: {
      userId,
      planKey,
      planName: plan.name,
    },
  });

  return order;
}

export function verifyPayment(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
  const generatedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return generatedSignature === signature;
}
