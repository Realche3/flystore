import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'

export default function AboutSection() {
  const { colors, typography } = siteConfig

  return (
    <section
      id="about"
      className={`w-full py-28 px-6 md:px-12 lg:px-24 ${colors.background} ${typography.fontFamily}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <div className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/about-photo.jpg"
            alt="FlyStore Brand"
            fill
            className="object-cover object-center brightness-[0.6]"
          />
          {/* Overlay Tagline */}
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-md text-lime-400 text-sm uppercase tracking-widest font-semibold shadow-lg">
            Built in the Shadows — Worn in the Light
          </div>
        </div>

        {/* MANIFESTO */}
        <div className="text-white text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            We&apos;re not just a brand — <br /> we&apos;re the drop before the storm.
          </h2>
          <p className={`${colors.secondaryText} text-lg leading-relaxed`}>
            Born from basement beats and rooftop views, FlyStore doesnt whisper — it roars.
            <br /><br />
            Every piece is a rebellion. A message. A stand against rinse-repeat fashion.
            We design for the bold. The unfiltered. The ones who lead from the underground up.
            <br /><br />
            This isn&apos;t fast fashion. This is FlyStore — where fabric meets fire.
          </p>
        </div>
      </div>
    </section>
  )
}
