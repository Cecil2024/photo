import { MainNav } from "@/components/main-nav"
import { Gallery } from "@/components/gallery"
import { Instagram } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-end">
          <MainNav />
        </div>
      </header>
      <div className="mx-[40px] my-8"></div>
      <h1 className="font-title mb-16 text-center text-3xl font-light tracking-[0.2em] after:mt-4 after:block after:h-px after:w-16 after:mx-auto after:bg-black/50 after:content-[''] md:text-4xl">
        PORTFOLIO
      </h1>
      <div className="mx-[40px] mb-8 rounded-2xl bg-[#FAF4F4] p-8">
        <Gallery />
      </div>

 {/* Instagram Section */}
      <section className="mx-[40px] mb-8 rounded-2xl bg-white p-8 flex flex-col items-center text-center border border-gray-100">
        <h2 className="font-title text-2xl mb-4 tracking-[0.2em]">See More On Instagram</h2>
        <p className="mb-6 text-gray-600">Follow me for my latest work, behind the scenes, and more inspiration!</p>
        <a
          href="https://instagram.com/connieramphoto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#F58E92] text-white font-semibold shadow hover:bg-primary/90 transition-colors"
        >
          <Instagram className="w-5 h-5 mr-2" />
          Visit Instagram
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8">
        <div className="mx-[40px] flex h-16 items-center justify-between">
          <p className="text-sm text-gray-500">© 2025 Connie Ramirez Photography. London, UK. All rights reserved.</p>
          <div className="flex items-center gap-4"></div>
        </div>
      </footer>
    </div>
  )
}