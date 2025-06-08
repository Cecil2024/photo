"use client"

import { useEffect, useState } from "react"


function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false)
  useEffect(() => {
    function handleResize() {
      setIsMdUp(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return isMdUp
}


const testimonials = [
  {
    name: "Sarah S.",
    text: "Connie captured our wedding beautifully! The photos are stunning and truly reflect the joy of the day.",
  },
  {
    name: "Vicky L.",
    text: "Connie was kind and knowledgeable! She made us feel at ease, creating a comfortable experience. We highly recommend her for making amazing memories with your family!",
  },
  {
    name: "Maria T.",
    text: "Connie is a wonderful photographer! She made us feel very comfortable and sent us the finished photographs in just a couple of days, highly recommended 😊",
  },
  {
    name: "Dan P.",
    text: "Connie was such an amazing photographer. I’d recommend her for a wonderful experience with an accomplished artist.",
  },
  {
    name: "Ah-Janai",
    text: "Connie was amazing!!!! She made me feel comfortable! As a solo traveler or pair, you can’t beat Connie’s prices, professionalism, or charm!",
  },
]

const VISIBLE = 3

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const isMdUp = useIsMdUp()
  const VISIBLE = isMdUp ? 3 : 1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Get the testimonials to show, wrapping around the array
  const visibleTestimonials = Array.from({ length: VISIBLE }).map((_, idx) => {
    return testimonials[(current + idx) % testimonials.length]
  })

  return (
    <section className="mx-[40px] my-8 rounded-2xl bg-[#FAF4F4] p-8">
      <h2 className="font-title text-2xl font-semibold mb-8 text-center tracking-wide">Testimonials</h2>
      <div className={`grid gap-6 grid-cols-1 ${isMdUp ? "md:grid-cols-3" : ""}`}>
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow p-8 transition-all duration-700"
          >
            <p className="text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
            <span className="font-semibold text-primary">{t.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}