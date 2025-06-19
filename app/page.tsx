import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white paper-texture relative">
        <div className="main-bg-accent" aria-hidden="true"></div>
        <main className="text-center p-6 max-w-3xl animate-fade-in relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-black">
            Hi, I&apos;m Lochan S – A data-driven thinker building meaningful digital futures.
          </h1>

          <Link href="/about" className="inline-block">
            <button className="retro-button mt-4" aria-label="Enter Portfolio">
              Enter Portfolio
            </button>
          </Link>
        </main>
      </div>
    </PageTransition>
  )
}
