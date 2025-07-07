
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProductGrid from '@/components/ProductGrid'
import ContactForm from '@/components/ContactForm'



export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <ContactForm />
    </main>
  )
}

