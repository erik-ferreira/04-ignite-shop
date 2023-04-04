import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { listPricesIds } = req.body as { listPricesIds: string[] };

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!listPricesIds || listPricesIds.length === 0) {
    return res.status(400).json({ error: "Prices ids not found" });
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url,
    cancel_url,
    line_items: listPricesIds.map((price) => ({ price, quantity: 1 })),
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
