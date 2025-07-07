'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart()
    const { colors, typography } = siteConfig

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className={`${colors.background} min-h-screen py-20 px-6 md:px-12 lg:px-24 ${typography.fontFamily}`}>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-white">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className={`${colors.secondaryText}`}>Your cart is empty.</p>
                ) : (
                    <div className="space-y-8">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-6 border-b border-neutral-800 pb-6"
                            >
                                <div className="relative w-24 h-24 rounded overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">{item.name}</h3>
                                    <p className={`${colors.secondaryText} text-sm`}>
                                        {item.selectedSize && <>Size: {item.selectedSize} • </>}
                                        {item.selectedColor && <>Color: {item.selectedColor}</>}
                                    </p>
                                    <p className="text-lime-400 font-bold mt-1">
                                        ${item.price.toFixed(2)} × {item.quantity}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-sm text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-10 text-right space-y-4">
                            <p className="text-xl font-bold text-white">Total: ${total.toFixed(2)}</p>

                            <button
                                className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                                onClick={() => {
                                    // You can later replace this with a Stripe redirect or route
                                    alert('Checkout coming soon!')
                                }}
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                onClick={clearCart}
                                className="block text-sm text-red-500 hover:underline"
                            >
                                Clear Cart
                            </button>
                        </div>

                    </div>
                )}

                <Link
                    href="/"
                    className="block mt-10 text-sm text-neutral-500 hover:text-white transition"
                >
                    ← Back to shopping
                </Link>
            </div>
        </div>
    )
}
