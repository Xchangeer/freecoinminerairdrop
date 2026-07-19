export type MenuItem = {
  id: string
  name: string
  price: number
  img: string
  desc: string
  category: "Rice Packs" | "Grills & Sides" | "Drinks"
  tag?: "Bestseller" | "Spicy" | "New"
}

export const MENU: MenuItem[] = [
  {
    id: "jollof-big",
    name: "Big Pack Jollof Rice",
    price: 4200,
    img: "/images/dish-jollof.png",
    desc: "Smoky party-style jollof, rich and deeply spiced, packed to fill you up.",
    category: "Rice Packs",
    tag: "Bestseller",
  },
  {
    id: "suya-big",
    name: "Big Pack Suya Rice",
    price: 4200,
    img: "/images/dish-suya.png",
    desc: "Jollof crowned with fiery suya-spiced beef and fresh onions.",
    category: "Rice Packs",
    tag: "Spicy",
  },
  {
    id: "asun-big",
    name: "Big Pack Asun Rice",
    price: 5700,
    img: "/images/dish-asun.png",
    desc: "Peppered goat asun over fragrant spiced rice — bold and unforgettable.",
    category: "Rice Packs",
    tag: "Spicy",
  },
  {
    id: "jollof-mid",
    name: "Medium Pack Jollof Rice",
    price: 2800,
    img: "/images/dish-jollof.png",
    desc: "Our signature smoky jollof in a lighter, solo-sized portion.",
    category: "Rice Packs",
  },
  {
    id: "peppered-chicken",
    name: "Peppered Chicken (6pcs)",
    price: 5000,
    img: "/images/hero-jollof.png",
    desc: "Grilled chicken tossed in a rich, fiery pepper sauce.",
    category: "Grills & Sides",
  },
  {
    id: "suya-skewers",
    name: "Beef Suya Skewers",
    price: 3500,
    img: "/images/dish-suya.png",
    desc: "Char-grilled beef skewers dusted with our house yaji spice.",
    category: "Grills & Sides",
    tag: "Bestseller",
  },
  {
    id: "plantain",
    name: "Fried Plantain (Dodo)",
    price: 1500,
    img: "/images/hero-jollof.png",
    desc: "Sweet, golden fried plantain — the perfect side.",
    category: "Grills & Sides",
  },
  {
    id: "chapman",
    name: "Chapman",
    price: 1800,
    img: "/images/dish-asun.png",
    desc: "Classic Nigerian cocktail mocktail, fruity and refreshing.",
    category: "Drinks",
    tag: "New",
  },
  {
    id: "zobo",
    name: "Chilled Zobo",
    price: 1200,
    img: "/images/dish-asun.png",
    desc: "Spiced hibiscus drink served ice cold.",
    category: "Drinks",
  },
]

export const CATEGORIES = ["Rice Packs", "Grills & Sides", "Drinks"] as const

export function formatNaira(amount: number) {
  return `\u20A6${amount.toLocaleString()}`
}
