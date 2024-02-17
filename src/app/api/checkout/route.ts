import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET!)


export default async function handler(req: Request, res: NextResponse){
    if(req.method === 'POST'){

        const {title, price} = await req.json()
        try{
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'jpy',
                            product_data: {
                                name: title
                            },
                            unit_amount: price
                        },
                        quantity: 1
                    }
                ],
                mode: 'payment',
                success_url: `http://localhost:3000/product/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: 'http://localhost:3000'
            })
        }catch(err){
           return NextResponse.json({err}, {status: 500})
        }
    }
}