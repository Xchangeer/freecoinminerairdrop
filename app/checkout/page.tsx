"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { formatNaira } from "@/lib/menu"

const DELIVERY_FEE = 1000

export default function CheckoutPage() {
  const { lines, subtotal, count, clear } = useCart()
  const router = useRouter()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" })

  const total = subtotal + (lines.length ? DELIVERY_FEE : 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clear()
  }

  if (placed) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-5 py-20">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
            <CheckCircle2 className="h-10 w-10 text-crimson" />
          </div>
          <h1 className="font-heading text-4xl font-black uppercase text-obsidian">Order Received</h1>
          <p className="mt-3 text-obsidian/60">
            Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}! Your food is being cooked fresh. We&apos;ll call
            you shortly to confirm delivery.
          </p>
          <Link
            href="/order"
            className="mt-8 inline-flex rounded-full bg-obsidian px-8 py-4 text-sm font-bold uppercase tracking-wide text-raw-silk transition-colors hover:bg-crimson"
          >
            Order Again
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      <section className="bg-obsidian py-12">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <button
            onClick={() => router.back()}
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-raw-silk/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <h1 className="font-heading text-5xl font-black uppercase tracking-tight text-raw-silk">Checkout</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-5 md:px-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3">
            <h2 className="mb-5 font-heading text-2xl font-bold uppercase text-obsidian">Delivery Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-obsidian">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-obsidian outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Adaeze Bello"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-obsidian">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-obsidian outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="+234 800 000 0000"
                />
              </div>
              <div>
                <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-obsidian">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-obsidian outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Street, area, landmark — Lokoja"
                />
              </div>
              <div>
                <label htmlFor="note" className="mb-1.5 block text-sm font-semibold text-obsidian">
                  Order Note <span className="font-normal text-obsidian/40">(optional)</span>
                </label>
                <input
                  id="note"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-obsidian outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Extra pepper, no onions..."
                />
              </div>

              <button
                type="submit"
                disabled={lines.length === 0}
                className="mt-2 rounded-full bg-crimson px-6 py-4 text-sm font-bold uppercase tracking-wide text-raw-silk transition-colors hover:bg-obsidian disabled:cursor-not-allowed disabled:opacity-40"
              >
                Place Order · {formatNaira(total)}
              </button>
            </div>
          </form>

          {/* Summary */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 font-heading text-2xl font-bold uppercase text-obsidian">Summary</h2>
              {lines.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-obsidian/50">Your cart is empty.</p>
                  <Link
                    href="/order"
                    className="mt-4 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-obsidian transition-colors hover:bg-crimson hover:text-raw-silk"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="flex flex-col gap-4">
                    {lines.map(({ item, qty }) => (
                      <li key={item.id} className="flex items-center gap-3">
                        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image src={item.img || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold leading-tight text-obsidian">{item.name}</p>
                          <p className="text-xs text-obsidian/50">
                            {qty} × {formatNaira(item.price)}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-obsidian">{formatNaira(item.price * qty)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 space-y-1 border-t border-border pt-4 text-sm text-obsidian/70">
                    <div className="flex justify-between">
                      <span>Subtotal ({count} items)</span>
                      <span className="font-semibold text-obsidian">{formatNaira(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span className="font-semibold text-obsidian">{formatNaira(DELIVERY_FEE)}</span>
                    </div>
                    <div className="mt-2 flex justify-between border-t border-border pt-3">
                      <span className="font-heading text-lg font-bold uppercase text-obsidian">Total</span>
                      <span className="font-heading text-lg font-bold text-crimson">{formatNaira(total)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
