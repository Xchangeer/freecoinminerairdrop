import type { Metadata } from "next"
import { MenuBrowser } from "@/components/menu-browser"

export const metadata: Metadata = {
  title: "Menu | Amak",
  description: "Browse Amak's full menu — rice packs, grills, sides, and drinks. Add to cart and order in minutes.",
}

export default function OrderPage() {
  return (
    <div className="bg-background">
      {/* Header band */}
      <section className="bg-obsidian py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Order Online</span>
          <h1 className="mt-2 font-heading text-5xl font-black uppercase tracking-tight text-raw-silk md:text-7xl">
            The Menu
          </h1>
          <p className="mt-4 max-w-xl text-raw-silk/70">
            Everything cooked to order. Pick your plates, build your pack, and we&apos;ll get it to you hot across
            Lokoja.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <MenuBrowser />
        </div>
      </section>
    </div>
  )
}
