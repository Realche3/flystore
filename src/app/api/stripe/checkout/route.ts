import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
    const body = await req.json()

    // 📝 Expecting: { cart: [...], email: "customer@example.com" }
    const { cart, email } = body

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            // 📝 TODO: Change success_url & cancel_url to new domain when selling
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
            customer_email: email,
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'GB', 'FR'],
            },
            line_items: cart.map((item: any) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        description: `${item.selectedSize || ''} ${item.selectedColor || ''}`.trim(),
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
            metadata: {
                cart: JSON.stringify(
                    cart.map((item: any) => ({
                        id: item.id,
                        qty: item.quantity,
                        size: item.selectedSize,
                        color: item.selectedColor,
                    }))
                ),
            },

        })

        return NextResponse.json({ url: session.url })
    } catch (err: any) {
        console.error('Stripe checkout error:', err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
