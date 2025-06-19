import PageTransition from "@/components/page-transition"

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white paper-texture relative">
        <div className="main-bg-accent" aria-hidden="true"></div>
        <main className="max-w-3xl mx-auto p-6 md:p-8 animate-fade-in relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 section-title">Contact</h1>

          <div className="content-section">
            <p className="mb-2">
              <strong>Email:</strong> lochan1917@gmail.com
            </p>
            <p className="mb-6">
              <strong>Phone:</strong> +91 9901489XXX
            </p>
          </div>

          <hr className="section-divider" />

          <div className="contact-form content-section">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold">
                  Name
                </label>
                <input type="text" id="name" name="name" required className="w-full" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold">
                  Email
                </label>
                <input type="email" id="email" name="email" required className="w-full" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-bold">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className="w-full"></textarea>
              </div>

              <button
                type="submit"
                className="retro-button"
                aria-label="Submit Contact Form"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
