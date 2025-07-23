"use client"

import Image from "next/image"
import { useState } from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
  {
    src: "/young man.jpg",
    alt: "Portrait of a young man",
  },
  {
    src: "/kissing shoulder.jpg",
    alt: "Romantic portrait of a couple kissing on the shoulder",
  },
  {
    src: "/nido 1.jpg",
    alt: "Mouthwatering jam at nest merengue",
  },
  {
    src: "/mr n mrs.jpg",
    alt: "Wedding decoration with Mr and Mrs sign",
  },
  {
    src: "/young woman.jpg",
    alt: "Portrait of a young woman",
  },
  {
    src: "/wedding cake.jpg",
    alt: "Wedding cake",
  },
  {
    src: "/wedding hug.jpg?height=600&width=800",
    alt: "A couple hugging at a wedding",
  },
  {
    src: "/kiss in London.jpg?height=600&width=800",
    alt: "Lifestyle photo 2",
  },
  {
    src: "/wedding rings.jpg",
    alt: "Wedding rings",
  },
  {
    src: "/taco 1.jpg",
    alt: "Taco with chili and lime",
  },
  {
    src: "/young londoner.jpg?height=600&width=800",
    alt: "Lifestyle photo 2",
  },
  {
    src: "/wedding bridge.jpg?height=600&width=800",
    alt: "Bridge with wedding belonging",
  },
  {
    src: "/Mom n daugther.jpg?height=600&width=800",
    alt: "Lifestyle photo 2",
  },
  {
    src: "/young woman in London.jpg?height=600&width=800",
    alt: "Lifestyle photo 2",
  },
  {
    src: "/Birra.jpg",
    alt: "Lager beer in a glass",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected photo"
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

