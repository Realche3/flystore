export type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
  sizes?: string[]
  colors?: string[]
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Shadow Hoodie',
    price: 59.99,
    image: '/images/shadow-hoodie.jpg',
    description: 'Oversized black hoodie with urban edge.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '2',
    name: 'Neon Pulse Tee',
    price: 34.99,
    image: '/images/neon-pulse.jpg',
    description: 'Vibrant street tee with neon gradient.',
     sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '3',
    name: 'Midnight Joggers',
    price: 49.99,
    image: '/images/midnight-joggers.jpg',
    description: 'Slim fit black joggers for daily wear.',
     sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
   {
    id: '4',
    name: 'Rebel Windbreaker',
    price: 64.99,
    image: '/images/rebel-windbreaker.jpg',
    description: 'Lightweight, waterproof windbreaker.',
     sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '5',
    name: 'Concrete Beanie',
    price: 19.99,
    image: '/images/concrete-beanie.jpg',
    description: 'Cozy ribbed knit beanie for all seasons.',
     sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '6',
    name: 'Urban Crossbody Bag',
    price: 39.99,
    image: '/images/crossbody-bag.jpg',
    description: 'Utility crossbody bag for street and travel.',
     sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
  },
]
