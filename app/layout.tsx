import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Manrope } from "next/font/google"
import { CartProvider } from "@/components/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Amak | Bold Nigerian Flavours in Lokoja",
  description:
    "Amak serves bold, made-to-order Nigerian food in Lokoja — from smoky party jollof to sizzling suya rice and peppered asun. Order hot, fresh, and fast.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#14110f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable} bg-background antialiased`}>
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
