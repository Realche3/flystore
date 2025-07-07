import { dummyProducts } from '@/lib/dummyProducts'
import ProductCard from './ProductCard'
import { siteConfig } from '@/lib/siteConfig'

export default function ProductGrid() {
  const { colors, typography } = siteConfig

  return (
    <section
      id="products"
      className={`w-full py-24 px-6 md:px-12 lg:px-24 ${colors.background} ${typography.fontFamily}`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold ${colors.primaryText}`}>All Drops</h2>
        <p className={`${colors.secondaryText} text-base mt-3 max-w-xl mx-auto`}>
          Explore our latest drops, from heavyweight hoodies to essential street tees — all limited, all loud.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
