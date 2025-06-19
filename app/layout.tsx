import type React from "react"
import "./globals.css"
import { Merriweather } from "next/font/google"
import Navigation from "@/components/navigation"
import Loading from "@/components/loading"
import Footer from "@/components/footer"

const serif = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Lochan S - Portfolio",
  description: "Personal portfolio of Lochan S - A data-driven thinker",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} font-serif bg-white paper-texture`}>
        <Loading />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'