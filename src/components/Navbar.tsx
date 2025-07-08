'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import { useCart } from '@/context/CartContext'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { storeName, navLinks, colors, typography } = siteConfig
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`w-full px-6 py-4 flex items-center justify-between border-b border-neutral-800 sticky top-0 z-50 ${colors.background}`}>
      <h1 className="text-2xl font-bold text-white">{storeName}</h1>

      {/* Desktop Nav */}
      <nav className={`hidden md:flex space-x-6 ${typography.navText} ${colors.primaryText}`}>
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

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-neutral-400 hover:text-white transition"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-neutral-800 flex flex-col items-center space-y-6 py-6 z-40">
          {navLinks.map((link) => {
            const isCart = link.label.toLowerCase() === 'cart'
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-semibold text-lg hover:text-lime-400 transition"
                onClick={() => setMenuOpen(false)}
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
        </div>
      )}
    </header>
  )
}
