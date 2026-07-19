import Link from "next/link"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-obsidian text-raw-silk">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <span className="font-heading text-3xl font-black uppercase tracking-widest">
            Am<span className="text-gold">ak</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-raw-silk/60">
            Bold Nigerian flavours, made to order. Taste the fire of Lokoja.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-gold">Explore</h3>
          <ul className="flex flex-col gap-2 text-sm text-raw-silk/70">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/order" className="transition-colors hover:text-gold">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-gold">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-gold">Visit</h3>
          <ul className="flex flex-col gap-3 text-sm text-raw-silk/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>Adankolo, Lokoja, Kogi State</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
              <span>+234 800 000 0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 flex-shrink-0 text-gold" />
              <span>Daily · 10am – 11pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-gold">Follow</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-raw-silk/20 px-4 py-2 text-sm text-raw-silk/70 transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            @amaklokoja
          </a>
        </div>
      </div>

      <div className="border-t border-raw-silk/10 py-6 text-center text-xs text-raw-silk/40">
        {`\u00A9 ${new Date().getFullYear()} Amak. All rights reserved.`}
      </div>
    </footer>
  )
}
