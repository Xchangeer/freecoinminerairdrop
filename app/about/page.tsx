import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Flame, Heart, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story | Amak",
  description:
    "The story of Amak — a Lokoja kitchen built on bold Nigerian flavours, fresh ingredients, and food cooked to order with fire.",
}

const VALUES = [
  {
    icon: Flame,
    title: "Cooked with Fire",
    desc: "Real smoke, real heat. We cook the traditional way for that unmistakable party-pot flavour.",
  },
  {
    icon: Leaf,
    title: "Fresh, Always",
    desc: "We shop the market daily. Nothing frozen, nothing reheated — only fresh ingredients.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    desc: "Every pack is plated like it's for family, because to us, every customer is.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kitchen.png" alt="The Amak kitchen at work" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Story</span>
          <h1 className="mt-2 max-w-2xl font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-raw-silk md:text-7xl">
            The Fire Behind Amak
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src="/images/dish-asun.png" alt="A signature Amak plate" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold uppercase text-obsidian md:text-5xl">
              Born in Lokoja, built on flavour
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-obsidian/70">
              <p>
                Amak started with a simple belief: Nigerian food deserves to be served bold, fresh, and without
                compromise. What began as weekend cook-ups for friends grew into Lokoja&apos;s go-to kitchen for
                unforgettable jollof, suya rice, and peppered asun.
              </p>
              <p>
                We don&apos;t do shortcuts. Every pack is made to order over open flame, seasoned with the same spice
                blends passed down in our kitchen. From the first scoop of smoky rice to the last bite of tender goat,
                you taste the difference.
              </p>
              <p>
                Today, we deliver that same fire across Lokoja — hot, fast, and made just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">What We Stand For</span>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-raw-silk md:text-5xl">
              The Amak Promise
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-raw-silk/10 bg-[#1a1713] p-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                  <v.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold text-raw-silk">{v.title}</h3>
                <p className="text-sm leading-relaxed text-raw-silk/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="mb-4 font-heading text-5xl font-bold uppercase text-raw-silk md:text-6xl">Come Taste It</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-raw-silk/80">
            Words can only do so much. The real story is on the plate — order today and taste the fire of Lokoja.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-full bg-obsidian px-10 py-4 text-sm font-bold uppercase tracking-wide text-gold transition-all hover:bg-gold hover:text-obsidian"
          >
            See the Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
