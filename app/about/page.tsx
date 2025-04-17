import PageTransition from "@/components/page-transition"

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white paper-texture">
        <main className="max-w-3xl mx-auto p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 section-title">About Me</h1>

          <div className="content-section">
            <h2 className="text-2xl font-bold mb-2">Lochan S</h2>
            <p className="mb-1">
              <strong>Location:</strong> Bangalore, India
            </p>
            <p className="mb-4">
              <strong>Academic Status:</strong> Pursuing BCA in Data Analytics at Jain University
            </p>
          </div>

          <div className="content-section">
            <h3 className="text-xl font-bold mb-2">Summary</h3>
            <p className="mb-4">
              Transition from commerce to tech through statistical and computational foundations. Focused on
              innovation-driven technology.
            </p>
          </div>

          <div className="content-section">
            <h3 className="text-xl font-bold mb-2">Core Competencies</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Programming</li>
              <li>Object-Oriented Programming</li>
              <li>Database Management Systems</li>
              <li>Operating Systems</li>
              <li>Networks</li>
            </ul>
          </div>

          <div className="content-section">
            <h3 className="text-xl font-bold mb-2">Interests</h3>
            <p className="mb-4">AI, sustainability, software development, analytics, collaborative building</p>
          </div>

          <div className="content-section">
            <h3 className="text-xl font-bold mb-2">Career Objective</h3>
            <p className="mb-4">Seeking internship opportunities to apply skills in dynamic tech teams</p>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
