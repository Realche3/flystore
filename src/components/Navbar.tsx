'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { storeName, navLinks, colors, typography } = siteConfig
  const { cartCount } = useCart()

  return (
    <header className={`w-full px-6 py-4 flex items-center justify-between border-b border-neutral-800 sticky top-0 z-50 ${colors.background}`}>
      <h1 className="text-2xl font-bold text-white">{storeName}</h1>

      <nav className={`space-x-6 ${typography.navText} ${colors.primaryText}`}>
        {navLinks.map((link) => {
          const isCart = link.label.toLowerCase() === 'cart'
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-semibold hover:text-lime-400 transition"
            >
              {link.label}
              {isCart && cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-lime-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
