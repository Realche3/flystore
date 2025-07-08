'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '@/lib/dummyProducts'

type CartItem = Product & {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // ✅ On mount, load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) {
      setCart(JSON.parse(stored))
    }
  }, [])

  // ✅ Sync back to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find(
        (p) =>
          p.id === item.id &&
          p.selectedSize === item.selectedSize &&
          p.selectedColor === item.selectedColor
      )
      if (exists) {
        return prev.map((p) =>
          p.id === item.id &&
          p.selectedSize === item.selectedSize &&
          p.selectedColor === item.selectedColor
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      }
      return [...prev, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
