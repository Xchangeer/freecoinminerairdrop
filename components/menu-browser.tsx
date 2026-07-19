"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { MENU, CATEGORIES, formatNaira, type MenuItem } from "@/lib/menu"

const TAG_STYLES: Record<NonNullable<MenuItem["tag"]>, string> = {
  Bestseller: "bg-gold text-obsidian",
  Spicy: "bg-crimson text-raw-silk",
  New: "bg-obsidian text-raw-silk",
}

function AddButton({ item }: { item: MenuItem }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handle = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <button
      onClick={handle}
      className="flex items-center gap-2 rounded-full bg-obsidian px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-raw-silk transition-colors hover:bg-crimson"
    >
      {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      {added ? "Added" : "Add"}
    </button>
  )
}

export function MenuBrowser() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number] | "All">("All")

  const filters = ["All", ...CATEGORIES] as const
  const items = active === "All" ? MENU : MENU.filter((m) => m.category === active)

  return (
    <div>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
              active === f
                ? "bg-gold text-obsidian"
                : "border border-border bg-card text-obsidian/70 hover:border-gold hover:text-obsidian"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.img || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.tag && (
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${TAG_STYLES[item.tag]}`}
                >
                  {item.tag}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <h3 className="font-heading text-xl font-bold leading-tight text-obsidian">{item.name}</h3>
                <span className="whitespace-nowrap font-bold text-crimson">{formatNaira(item.price)}</span>
              </div>
              <p className="mb-4 flex-1 text-sm text-obsidian/50">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-obsidian/40">
                  {item.category}
                </span>
                <AddButton item={item} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
