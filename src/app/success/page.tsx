'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function SuccessPage() {
  const { colors, typography } = siteConfig

  return (
    <div
      className={`${colors.background} min-h-screen flex flex-col items-center justify-center px-6 text-center ${typography.fontFamily}`}
    >
      {/* Big animated checkmark */}
      <CheckCircle
        className="text-lime-400 mb-8 animate-bounce"
        size={80}
        strokeWidth={1.5}
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-lime-400">
        Thank You for Your Order!
      </h1>

      <p className={`${colors.secondaryText} max-w-lg mb-10`}>
        Your purchase was successful. We’ve emailed you a confirmation and will start preparing your order right away.
      </p>

      <Link
        href="/#products"
        className="inline-block bg-lime-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
