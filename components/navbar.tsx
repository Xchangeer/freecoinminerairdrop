"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Menu" },
  { href: "/about", label: "Our Story" },
]

export function Navbar() {
  const pathname = usePathname()
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-raw-silk/10 bg-obsidian/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-heading text-2xl font-black uppercase tracking-widest text-raw-silk">
          Am<span className="text-gold">ak</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  active ? "text-gold" : "text-raw-silk/70 hover:text-raw-silk"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-raw-silk/10 text-raw-silk transition-colors hover:bg-gold hover:text-obsidian"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-crimson text-[11px] font-bold text-raw-silk">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-raw-silk/10 text-raw-silk transition-colors hover:bg-raw-silk/20 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-raw-silk/10 bg-obsidian px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                    active ? "bg-raw-silk/10 text-gold" : "text-raw-silk/70 hover:bg-raw-silk/5 hover:text-raw-silk"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <CartDrawer />
    </header>
  )
}
