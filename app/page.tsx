import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Flame, Star, UtensilsCrossed, Truck, Clock } from "lucide-react"
import { FeaturedDishes } from "@/components/featured-dishes"

const FEATURES = [
  { icon: Flame, title: "Bold Flavours", desc: "Every dish crafted with authentic Nigerian spice and fire." },
  { icon: Truck, title: "Fast Delivery", desc: "Hot, fresh, and at your door across Lokoja." },
  { icon: Clock, title: "Open Late", desc: "Cravings don't keep hours — neither do we." },
  { icon: UtensilsCrossed, title: "Made to Order", desc: "Nothing sits under a lamp. Cooked when you order." },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-jollof.png"
            alt="Amak signature smoky jollof rice"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/20" />
          <div className="steam-overlay absolute inset-0" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
              <Star className="h-3 w-3 fill-gold" /> Lokoja&apos;s Boldest Kitchen
            </span>
            <h1 className="animate-fade-in font-heading text-7xl font-black leading-[0.9] tracking-tight text-raw-silk md:text-9xl">
              AMAK
            </h1>
            <p className="mt-4 max-w-lg text-lg font-light text-raw-silk/80 md:text-xl">
              Bold Nigerian flavours, made to order. From smoky jollof to sizzling suya rice — taste the fire of
              Lokoja.
            </p>
            <div className="animate-fade-in mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/order"
                className="group flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-obsidian transition-all hover:bg-crimson hover:text-raw-silk"
              >
                Order Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-raw-silk/30 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-raw-silk transition-all hover:bg-raw-silk hover:text-obsidian"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-xs uppercase tracking-widest text-raw-silk/40">
          Scroll
        </div>
      </section>

      {/* Features */}
      <section className="bg-raw-silk py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-obsidian transition-colors group-hover:bg-crimson">
                  <f.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mb-1 font-heading text-xl font-bold text-obsidian">{f.title}</h3>
                <p className="text-sm text-obsidian/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Signature Plates</span>
              <h2 className="mt-2 font-heading text-5xl font-bold text-raw-silk md:text-6xl">Crowd Favourites</h2>
            </div>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-gold transition-all hover:bg-gold hover:text-obsidian"
            >
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <FeaturedDishes />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-heading text-5xl font-bold text-raw-silk md:text-6xl">Hungry Yet?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-raw-silk/80">
            Your next meal is just a few taps away. Browse the menu, build your order, and we&apos;ll handle the rest.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-full bg-obsidian px-10 py-4 text-sm font-bold uppercase tracking-wide text-gold transition-all hover:bg-gold hover:text-obsidian"
          >
            Start Your Order <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
