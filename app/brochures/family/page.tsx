'use client'

import { MainNav } from "@/components/main-nav"

export default function FamilyBrochurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-lg font-light tracking-[0.1em] pl-8">Family Brochure</h1>
          <MainNav />
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/Family Prices.pdf#toolbar=1&navpanes=0&scrollbar=1"
            className="w-full"
            style={{ height: 'calc(100vh - 150px)' }}
            title="Family Photography Brochure"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href="/Family Prices.pdf"
            download
            className="px-6 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-8">
        <div className="mx-[40px] flex h-16 items-center justify-between">
          <p className="text-sm text-gray-500">© 2026 Connie Ramirez Photography. London, UK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
