import Image from "next/image"
import Link from "next/link"

export function QuoteSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute right-4 top-4 z-10 md:right-8 md:top-8">
        <Link href="/services" className="group inline-flex items-center text-l text-white/90 hover:text-white">
          SEE SERVICES
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
      <Image
        src="/kissing.jpg"
        alt="Wedding couple sharing a romantic moment"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 flex items-end p-8 md:p-16">
        <blockquote className="max-w-lg text-white">
          <p className="text-2xl font-light italic leading-relaxed md:text-3xl">
            "Today everything exists to end in a photograph."
          </p>
          <footer className="mt-4 text-sm font-light md:text-base">― Susan Sontag</footer>
        </blockquote>
      </div>
    </section>
  )
}

