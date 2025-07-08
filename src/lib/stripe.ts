import Stripe from 'stripe'

// 📝 TODO: When selling this site, change your STRIPE_SECRET_KEY in the .env file
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
