import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const { storeName, navLinks, colors, typography } = siteConfig

  return (
    <footer className={`w-full px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-800 ${colors.background} ${typography.fontFamily}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT: Brand + Socials */}
        <div>
          <h2 className="text-2xl font-bold text-white">{storeName}</h2>
          <p className={`${colors.secondaryText} text-sm mt-2 max-w-sm`}>
            Made for the bold. Limited drops, street-certified.
          </p>
          <div className="flex gap-4 mt-4 text-neutral-400">
            <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-white" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-white" /></Link>
            <Link href="#" aria-label="YouTube"><Youtube className="w-5 h-5 hover:text-white" /></Link>
          </div>
        </div>

        {/* RIGHT: Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-neutral-400 hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-xs text-neutral-600 text-center mt-10">
        © {new Date().getFullYear()} {storeName}. All rights reserved.
      </div>
    </footer>
  )
}
