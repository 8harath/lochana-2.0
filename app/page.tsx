import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white paper-texture">
        <main className="text-center p-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-serif mb-8 text-black">
            Hi, I&apos;m Lochan S – A data-driven thinker building meaningful digital futures.
          </h1>

          <Link href="/about" className="inline-block">
            <Button className="retro-button text-lg px-8 py-6 mt-4 bg-black text-white hover:bg-black/90 font-serif">
              Enter Portfolio
            </Button>
          </Link>
        </main>
      </div>
    </PageTransition>
  )
}
