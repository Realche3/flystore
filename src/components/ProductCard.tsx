'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import type { Product } from '@/lib/dummyProducts'

export default function ProductCard({ product }: { product: Product }) {
  const { colors } = siteConfig

  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className={`text-xl font-semibold mb-1 ${colors.primaryText}`}>{product.name}</h3>
          <p className={`${colors.secondaryText} text-sm mb-2`}>{product.description}</p>
          <span className="text-lime-400 font-bold">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  )
}
