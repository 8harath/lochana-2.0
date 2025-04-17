import PageTransition from "@/components/page-transition"

export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white paper-texture">
        <main className="max-w-3xl mx-auto p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 section-title">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6">
              <h2 className="text-xl font-bold mb-4">Coming Soon: Project Alpha</h2>
            </div>

            <div className="border-2 border-black p-6">
              <h2 className="text-xl font-bold mb-4">Coming Soon: Exploratory Dashboard</h2>
            </div>

            <div className="border-2 border-black p-6">
              <h2 className="text-xl font-bold mb-4">Coming Soon: ML Assistant Prototype</h2>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
