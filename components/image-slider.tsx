"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

// Replace these with your actual images
const slides = [
  {
    src: "/celebrating.jpg",
    alt: "Photography slide 1",
  },
  {
    src: "/portrait young woman.jpg",
    alt: "Photography slide 2",
  },
  {
    src: "/wedding at see.jpg",
    alt: "Photography slide 3",
  },
  {
    src: "/wedding dancing.jpg",
    alt: "Photography slide 4",
  },
]

export function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 3500)
    return () => clearInterval(autoplay)
  }, [emblaApi])
  // ----------------------

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="relative min-w-0 flex-[0_0_100%] overflow-hidden" key={index}>
              <div className="relative aspect-[21/9]">
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto h-12 w-12 rounded-full border-none bg-white/15 text-white backdrop-blur-sm hover:bg-white/50"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto h-12 w-12 rounded-full border-none bg-white/25 text-white backdrop-blur-sm hover:bg-white/50"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full bg-white/60 transition-all hover:bg-white ${
              index === selectedIndex ? "w-4 bg-white" : ""
            }`}
            onClick={() => scrollTo(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

