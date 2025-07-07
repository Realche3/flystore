export const siteConfig = {
  storeName: 'FlyStore',

  // ----- HERO SECTION -----
  heroTitle: 'Streetwear Reimagined',
  heroSubtitle: 'Elevate your look with our limited-edition drops and bold urban styles.',
  heroButtonText: 'Shop Now',

  // ----- COLORS -----
  colors: {
    background: 'bg-black',
    primaryText: 'text-white',
    secondaryText: 'text-neutral-400',
    hoverAccent: 'hover:text-amber-400',
    gradient: 'from-lime-400 to-green-500',
    buttonShadow: 'shadow-lg shadow-lime-500/40',
  },

  // ----- TYPOGRAPHY -----
  typography: {
    fontFamily: 'font-sans',
    heroTitle: 'text-5xl sm:text-6xl font-bold',
    heroSubtitle: 'text-lg',
    navText: 'text-sm',
  },

  // ----- BUTTONS -----
  buttons: {
    primary:
      'px-6 py-3 bg-gradient-to-r text-black font-bold rounded-2xl transition hover:scale-105',
  },

  // ----- NAVIGATION -----
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Cart', href: '/cart' },
  ],
}
