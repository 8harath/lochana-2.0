import PageTransition from "@/components/page-transition"

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white paper-texture relative">
        <div className="main-bg-accent" aria-hidden="true"></div>
        <main className="max-w-3xl mx-auto p-6 md:p-8 animate-fade-in relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 section-title">Experience</h1>

          <div className="experience-timeline">
            <div className="experience-item">
              <h2 className="text-2xl font-bold mb-1">1M1B</h2>
              <p className="text-lg italic mb-2">Intern</p>
              <p className="mb-2">2024–Present</p>
              <p className="mb-4">Worked on sustainability campaigns, energy audits, and Tableau visualizations</p>
            </div>

            <hr className="section-divider" />

            <div className="experience-item">
              <h2 className="text-2xl font-bold mb-1">GenX Reality</h2>
              <p className="text-lg italic mb-2">Project Manager Intern</p>
              <p className="mb-2">2024–Present</p>
              <p className="mb-4">Oversaw website development and team coordination</p>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
