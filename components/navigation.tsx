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
    <header className="w-full py-6 px-4 md:px-8 bg-white paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg font-serif ${
                pathname === item.path
                  ? "font-bold border-b-2 border-black"
                  : "hover:border-b-2 hover:border-black transition-all duration-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMobileMenu} className="retro-button p-2 bg-black text-white" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu paper-texture">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-4 retro-button p-2 bg-black text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xl font-serif my-2 ${
                    pathname === item.path ? "font-bold border-b-2 border-black" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
