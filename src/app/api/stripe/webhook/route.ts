import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { resend } from '@/lib/resend'
import Stripe from 'stripe'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: Request) {
  const buf = await req.arrayBuffer()
  const rawBody = Buffer.from(buf)
  const sig = req.headers.get('stripe-signature')!

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      const customerEmail = session.customer_details?.email
      const shipping = (session as any).shipping?.address

      const cart = JSON.parse(session.metadata?.cart || '[]')

      // ✅ Send email to store owner
      await resend.emails.send({
        from: 'Orders <onboarding@resend.dev>',
        to: 'delivered@resend.dev', // 📝 TODO: Change this on resale
        subject: 'New Order Received',
        html: `
          <h2>New Order from ${customerEmail}</h2>
          <p><strong>Shipping:</strong> ${shipping?.line1}, ${shipping?.city}, ${shipping?.country}</p>
          <p><strong>Items:</strong></p>
          <ul>
            ${cart.map((item: any) => 
              `<li>${item.qty} x ${item.id} (${item.size || ''} ${item.color || ''})</li>`
            ).join('')}
          </ul>
        `
      })

      // ✅ Send confirmation email to customer
      if (customerEmail) {
        await resend.emails.send({
          from: 'FlyStore <onboarding@resend.dev>',
          to: customerEmail,
          subject: 'Thank you for your order!',
          html: `
            <h2>Order Confirmation</h2>
            <p>Thanks for shopping with us. We'll start preparing your order right away.</p>
          `
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error('Webhook error:', err)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }
}
