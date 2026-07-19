"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { MENU, formatNaira } from "@/lib/menu"

const FEATURED_IDS = ["jollof-big", "suya-big", "asun-big"]

export function FeaturedDishes() {
  const { addItem } = useCart()
  const dishes = FEATURED_IDS.map((id) => MENU.find((m) => m.id === id)!).filter(Boolean)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {dishes.map((d, i) => (
        <div
          key={d.id}
          className={`group flex flex-col overflow-hidden rounded-2xl bg-[#1a1713] shadow-xl transition-all duration-300 hover:-translate-y-1 ${
            i === 1
              ? "border-2 border-crimson shadow-[0_0_24px_rgba(154,27,27,0.45)]"
              : "border border-raw-silk/5"
          }`}
        >
          <div className="relative h-60 overflow-hidden">
            <Image
              src={d.img || "/placeholder.svg"}
              alt={d.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {i === 1 && (
              <span className="absolute left-4 top-4 rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wide text-raw-silk">
                Most Loved
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <h3 className="font-heading text-2xl font-bold leading-tight text-raw-silk">{d.name}</h3>
              <span className="whitespace-nowrap text-xl font-bold text-gold">{formatNaira(d.price)}</span>
            </div>
            <p className="mb-5 flex-1 text-sm text-raw-silk/60">{d.desc}</p>
            <button
              onClick={() => addItem(d)}
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-obsidian transition-colors hover:bg-raw-silk"
            >
              <Plus className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
