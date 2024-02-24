import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET!);

export async function POST(req: Request, res: NextResponse) {
  const { title, price, productId, userId } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      metadata: {
        productId: productId,
      },
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: title,
            },
            unit_amount: price,
          },
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            maximum: 3,
          },
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["JP"],
      },
      mode: "payment",
      success_url: `https://kz-shop.vercel.app/product/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "https://kz-shop.vercel.app",
    });

    return NextResponse.json({ checkout_url: session.url });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
