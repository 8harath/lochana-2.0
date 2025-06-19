"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="w-full py-4 px-2 md:px-6 bg-white paper-texture border-b border-black/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-base font-serif transition-colors duration-200 px-1 pb-1 ${
                pathname === item.path
                  ? "font-bold border-b-2 border-black"
                  : "hover:text-black/70 focus-visible:underline"
              }`}
              tabIndex={0}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMobileMenu} className="retro-button p-2 bg-black text-white focus-visible:outline focus-visible:ring-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu paper-texture animate-fade-in">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-4 retro-button p-2 bg-black text-white focus-visible:outline focus-visible:ring-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center mt-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg font-serif my-2 transition-colors duration-200 ${
                  pathname === item.path ? "font-bold border-b-2 border-black" : "hover:text-black/70 focus-visible:underline"
                }`}
                onClick={toggleMobileMenu}
                tabIndex={0}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navigation
