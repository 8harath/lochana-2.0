import PageTransition from "@/components/page-transition"

export default function Education() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white paper-texture relative">
        <div className="main-bg-accent" aria-hidden="true"></div>
        <main className="max-w-3xl mx-auto p-6 md:p-8 animate-fade-in relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 section-title">Education</h1>

          <div className="education-timeline">
            <div className="education-item">
              <h2 className="text-2xl font-bold mb-1">Jain University</h2>
              <p className="text-lg mb-2">BCA in Data Analytics</p>
              <p className="mb-4">Present</p>
            </div>

            <hr className="section-divider" />

            <div className="education-item">
              <h2 className="text-2xl font-bold mb-1">MES Kishora Kendra</h2>
              <p className="text-lg mb-2">PU in Commerce</p>
              <p className="mb-2">2023</p>
              <p className="mb-4">
                <strong>Focus on:</strong> Computers, Statistics, Business, and Accounts
              </p>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
