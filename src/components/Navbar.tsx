'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import { useCart } from '@/context/CartContext'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const { storeName, navLinks, colors, typography } = siteConfig
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`w-full px-6 py-4 flex items-center justify-between border-b border-neutral-800 sticky top-0 z-50 ${colors.background}`}>
      
      {/* LEFT: Hamburger + Brand */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-400 hover:text-white transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <h1 className="text-2xl font-bold text-white">{storeName}</h1>
      </div>

      {/* CENTER: Nav Links for desktop */}
      <nav className={`hidden md:flex gap-8 ${typography.navText} ${colors.primaryText}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative font-semibold hover:text-lime-400 transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* RIGHT: Cart icon always */}
      <Link
        href="/cart"
        className="relative text-neutral-400 hover:text-lime-400 transition ml-4"
      >
        <ShoppingCart size={26} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-neutral-800 flex flex-col items-center space-y-6 py-6 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-semibold text-lg hover:text-lime-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
