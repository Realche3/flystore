import { Resend } from 'resend'

// 📝 TODO: Change RESEND_API_KEY in your .env file when selling
export const resend = new Resend(process.env.RESEND_API_KEY)
