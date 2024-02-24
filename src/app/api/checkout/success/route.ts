import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET || "");

export async function POST(req: Request, res: NextResponse) {
  const { sessionId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const purchase = await prisma.purchase.create({
      data: {
        userId: session.client_reference_id || "",
        productId: session.metadata?.productId || "",
      },
    });

    return NextResponse.json({ purchase });
  } catch (err) {
    return NextResponse.json(err);
  }
}
