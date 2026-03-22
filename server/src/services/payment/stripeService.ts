import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-04-10" as any,
});

export const PLANS: Record<
  string,
  { name: string; price: number; priceInCents: number; interval?: string }
> = {
  monthly: {
    name: "Pro Monthly",
    price: 9.99,
    priceInCents: 999,
    interval: "month",
  },
  yearly: {
    name: "Pro Yearly",
    price: 49.99,
    priceInCents: 4999,
    interval: "year",
  },
  lifetime: {
    name: "Pro Lifetime",
    price: 99.99,
    priceInCents: 9999,
  },
};

export async function createCheckoutSession(planKey: string, userId: string) {
  const plan = PLANS[planKey];
  if (!plan) {
    throw new Error(`Invalid plan: ${planKey}`);
  }

  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
    price_data: {
      currency: "usd",
      product_data: {
        name: plan.name,
      },
      unit_amount: plan.priceInCents,
      ...(plan.interval
        ? { recurring: { interval: plan.interval as "month" | "year" } }
        : {}),
    },
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: plan.interval ? "subscription" : "payment",
    line_items: [lineItem],
    metadata: {
      userId,
      planKey,
    },
    success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/payment/cancel`,
  });

  return session;
}

export async function handleWebhook(payload: string | Buffer, signature: string) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const planKey = session.metadata?.planKey;
      return {
        type: "checkout.session.completed",
        userId,
        planKey,
        customerId: session.customer,
        subscriptionId: session.subscription,
      };
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      return {
        type: "invoice.payment_succeeded",
        customerId: invoice.customer,
        subscriptionId: invoice.subscription,
      };
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      return {
        type: "customer.subscription.deleted",
        customerId: subscription.customer,
        subscriptionId: subscription.id,
      };
    }

    default:
      return { type: event.type, handled: false };
  }
}
