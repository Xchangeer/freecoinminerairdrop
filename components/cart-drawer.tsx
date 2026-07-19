"use client"

import Link from "next/link"
import Image from "next/image"
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { formatNaira } from "@/lib/menu"

const DELIVERY_FEE = 1000

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, removeItem, subtotal, count } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-obsidian/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-raw-silk shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-obsidian">
            Your Order
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 text-obsidian/60 transition-colors hover:bg-obsidian/10 hover:text-obsidian"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-obsidian/5">
              <ShoppingBag className="h-7 w-7 text-obsidian/40" />
            </div>
            <p className="text-obsidian/60">Your cart is empty. Time to fix that.</p>
            <Link
              href="/order"
              onClick={closeCart}
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-obsidian transition-colors hover:bg-crimson hover:text-raw-silk"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {lines.map(({ item, qty }) => (
                  <li key={item.id} className="flex gap-3">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image src={item.img || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading text-base font-bold leading-tight text-obsidian">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-obsidian/40 transition-colors hover:text-crimson"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-crimson">{formatNaira(item.price)}</span>
                      <div className="mt-auto flex items-center gap-2">
                        <button
                          onClick={() => setQty(item.id, qty - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-obsidian transition-colors hover:bg-obsidian hover:text-raw-silk"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-obsidian">{qty}</span>
                        <button
                          onClick={() => setQty(item.id, qty + 1)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-obsidian transition-colors hover:bg-obsidian hover:text-raw-silk"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border bg-raw-silk px-5 py-4">
              <div className="flex justify-between text-sm text-obsidian/70">
                <span>Subtotal ({count} items)</span>
                <span className="font-semibold text-obsidian">{formatNaira(subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm text-obsidian/70">
                <span>Delivery</span>
                <span className="font-semibold text-obsidian">{formatNaira(DELIVERY_FEE)}</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-border pt-3">
                <span className="font-heading text-lg font-bold uppercase text-obsidian">Total</span>
                <span className="font-heading text-lg font-bold text-crimson">
                  {formatNaira(subtotal + DELIVERY_FEE)}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wide text-raw-silk transition-colors hover:bg-obsidian"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
