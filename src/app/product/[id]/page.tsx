'use client'


import { useState } from 'react'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { dummyProducts } from '@/lib/dummyProducts'
import { siteConfig } from '@/lib/siteConfig'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'

export default function ProductPage() {
    const [added, setAdded] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [formError, setFormError] = useState('')

    const params = useParams()
    const id = Array.isArray(params?.id) ? params.id[0] : params?.id


    const product = dummyProducts.find((p) => p.id === id)
    const relatedProducts = dummyProducts.filter((p) => p.id !== id).slice(0, 3)
    const { colors, typography, buttons } = siteConfig

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const { addToCart } = useCart()

    if (!product) return notFound()

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            setFormError('Please select size and color before adding to cart.')
            return
        }
        setFormError('')

        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor,
        })

        setAdded(true)
        setTimeout(() => setAdded(false), 2000)

        // Reset selection
        setSelectedSize('')
        setSelectedColor('')
        setQuantity(1)
    }


    return (
        <div
            className={`${colors.background} min-h-screen py-20 px-6 md:px-12 lg:px-24 ${typography.fontFamily}`}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* IMAGE */}
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* TEXT DETAILS */}
                <div className="text-white">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className={`${colors.secondaryText} text-base mb-6`}>{product.description}</p>
                    <p className="text-lime-400 text-2xl font-bold mb-8">${product.price.toFixed(2)}</p>

                    {/* SIZE SELECTOR */}
                    {product.sizes && (
                        <div className="mb-6">
                            <p className="mb-2 text-sm text-neutral-400 uppercase">Select Size</p>
                            <div className="flex gap-3 flex-wrap">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border transition ${selectedSize === size
                                            ? 'bg-lime-400 text-black font-semibold'
                                            : 'border-neutral-700 text-white hover:bg-neutral-800'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* COLOR SELECTOR */}
                    {product.colors && (
                        <div className="mb-8">
                            <p className="mb-2 text-sm text-neutral-400 uppercase">Select Color</p>
                            <div className="flex gap-3 flex-wrap">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-2 rounded border transition ${selectedColor === color
                                            ? 'bg-lime-400 text-black font-semibold'
                                            : 'border-neutral-700 text-white hover:bg-neutral-800'
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* QUANTITY SELECTOR */}
                    <div className="mb-8">
                        <p className="mb-2 text-sm text-neutral-400 uppercase">Quantity</p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                className="w-8 h-8 text-xl rounded bg-neutral-800 text-white hover:bg-neutral-700"
                            >
                                -
                            </button>
                            <span className="text-lg">{quantity}</span>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="w-8 h-8 text-xl rounded bg-neutral-800 text-white hover:bg-neutral-700"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* ERROR MESSAGE */}
                   {formError && (
                        <p className="mb-4 text-red-500 font-medium text-sm">{formError}</p>
                    )}
                    {/* ADD TO CART */}
                    <button
                        onClick={handleAddToCart}
                        className={`${buttons.primary} bg-gradient-to-r ${colors.gradient} ${colors.buttonShadow} px-8 py-3 text-black text-lg rounded-full transition hover:scale-105`}
                    >
                        {added ? 'Added!' : 'Add to Cart'}
                    </button>


                    <Link
                        href="/"
                        className="block mt-8 text-sm text-neutral-500 hover:text-white transition"
                    >
                        ← Back to all products
                    </Link>
                </div>
            </div>

            {/* RECOMMENDED PRODUCTS */}
            <div className="mt-24">
                <h2 className="text-2xl font-bold text-white mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}
