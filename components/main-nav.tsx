"use client"

import { useState } from "react"
import { Facebook, Instagram, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "https://tidycal.com/connieramirezphotography", label: "Book Now" },
]

export function MainNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex items-center justify-between w-full px-6 py-2 relative">
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo.png"
          alt="Connie Ramirez Photography Logo"
          width={200}
          height={180}
          className="rounded-full"
        />
        <span className="sr-only">Home</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-3">
        <nav className="flex items-center gap-6">
          {links.map((link) =>
            link.label === "Book Now" ? (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors",
                  pathname === link.href ? "ring-2 ring-primary" : ""
                )}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2 border-l pl-6">
          <Link
            href="https://www.facebook.com/connieramphoto"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com/connieramphoto/"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6 w-full items-center">
            {links.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors w-4/5 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium transition-colors hover:text-primary w-4/5 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="https://www.facebook.com/connieramphoto"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/connieramphoto/"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}