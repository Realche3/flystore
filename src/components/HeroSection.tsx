import { siteConfig } from '@/lib/siteConfig'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const { typography, colors, buttons, heroTitle, heroSubtitle, heroButtonText, storeName } = siteConfig

  return (
    <section
      className={`relative w-full min-h-[70vh] flex items-center justify-center text-center overflow-hidden ${typography.fontFamily}`}
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover object-center brightness-[0.35]"
        priority
      />

      {/* Main Text Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-0 py-20">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white`}>
          {heroTitle}
        </h1>
        <p className={`${colors.secondaryText} text-base sm:text-lg mb-8`}>
          {heroSubtitle}
        </p>
        <Link
          href="#products"
          className={`${buttons.primary} bg-gradient-to-r ${colors.gradient} ${colors.buttonShadow} px-8 py-3 text-black text-lg rounded-full transition hover:scale-105`}
        >
          {heroButtonText}
        </Link>

      </div>

      {/* Overlay Tagline */}
      <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-md text-lime-400 text-sm uppercase tracking-widest font-semibold shadow-lg z-10">
        Drop Loud — Wear Louder
      </div>

      {/* Optional Top Brand */}
      <div className="absolute top-6 left-6 text-sm text-neutral-700 tracking-widest uppercase z-10">
        {storeName}
      </div>
    </section>
  )
}
