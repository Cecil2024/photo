import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

export default function ServicesPage() {
  const services = [
    {
      title: "PORTRAIT PHOTOGRAPHY",
      description:
        "Portrait photography is a way to tell your story through images. I love to capture the essence of people, their personality, and their emotions. My style is natural and relaxed, focusing on creating authentic moments that reflect who you are.",
      details: [
        "30-minute session",
        "5 edited high-resolution digital images",
        "2 black & white edits included",
        "Print release",
      ],
      price: "£79",
      image: "/greenwich.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography/30-minute-portrait"
    },
    {
      title: "COUPLE PHOTOGRAPHY",
      description:
        "Whether it's an engagement, anniversary, or just because, couple photography is about capturing the love and connection between two people. I focus on creating natural, candid moments that showcase your unique relationship.",
      details: [
        "45-minute session",
        "6 edited high-resolution digital images",
        "1 social media teaser clip",
        "Print release",
      ],
      price: "£89",
      image: "/couple.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography/45-minute-couple"
    },
    {
      title: "FAMILY PHOTOGRAPHY",
      description:
        "Family photography sessions are all about capturing the love, connection, and fun between family members. I create a relaxed environment so everyone feels comfortable, resulting in natural and joyful images you’ll cherish forever.",
      details: [
        "45-minute session",
        "8 edited high-resolution digital images",
        "Print release",
      ],
      price: "Starting from £97",
      image: "/dad and daugther.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography"
    },
    {
      title: "WEDDING PHOTOGRAPHY",
      description:
        "Your wedding day is one of the most important days of your life. I provide comprehensive coverage from preparation to reception, ensuring every special moment is captured. My approach combines documentary-style photography with artistic portraits.",
      details: [
        "An initial consultation via phone/zoom to learn about each other with no obligation to book","Ceremony coverage (up to 1 hour)",
        "80 pics professionally edited",
        "Print release",
        "Anywhere in London",
        "Additional hours available",
      ],
      price: "Starting from £300",
      image: "/wedding blue sky.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography/15-minute-meeting"
    },
    {
      title: "EVENT PHOTOGRAPHY",
      description:
        "From corporate events to private celebrations, I provide professional coverage that captures the atmosphere and key moments of your event. My unobtrusive approach ensures natural, candid photographs that tell the story of your special occasion.",
      details: [
        "Flexible hourly coverage",
        "Quick turnaround",
        "All edited high-resolution digital images",
        "Commercial usage rights available",
      ],
      price: "Starting from £130/hour",
      image: "/stand up.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography/15-minute-meeting"
    },
    {
      title: "PRODUCT PHOTOGRAPHY",
      description:
        "Showcase your products with professional photography that highlights their quality and appeal. I offer creative setups and clean backgrounds to make your products stand out for your website, social media, or catalog.",
      details: [
        "Flexible session length",
        "Studio or on-location options",
        "High-resolution edited images",
        "Multiple angles and setups",
        "Fast turnaround",
      ],
      price: "Starting from £110/session",
      image: "/merengues.jpg?height=600&width=800",
      link: "https://tidycal.com/connieramirezphotography/15-minute-meeting"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-end">
          <MainNav />
        </div>
      </header>
      <div className="mx-[40px] my-8">
        <h1 className="font-title mb-16 text-center text-3xl font-light tracking-[0.2em] after:mt-4 after:block after:h-px after:w-16 after:mx-auto after:bg-black/50 after:content-[''] md:text-4xl">
          SERVICES
        </h1>
        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
           <div
            key={index}
            className="rounded-2xl bg-[#FAF4F4] p-0 overflow-hidden shadow-md">
            <div className={`flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center`}>
              <div className="relative aspect-[4/3] w-full md:rounded-l-2xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6 p-8 bg-[#FAF4F4] w-full">
                <h2 className="font-title text-2xl font-light tracking-[0.2em]">{service.title}</h2>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base text-justify">{service.description}</p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium uppercase tracking-wider">What&apos;s Included:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-light">{service.price}</p>
                  {service.title === "FAMILY PHOTOGRAPHY" && (
                    <a
                      href="/Family Prices.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-2 px-4 py-2 rounded-full bg-[#777278] text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
                    >
                      Download Family Brochure (PDF)
                    </a>
                  )}
                  {service.title === "WEDDING PHOTOGRAPHY" && (
                    <a
                      href="/wedding-prices.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-2 px-4 py-2 rounded-full bg-[#777278] text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
                    >
                      Download Wedding Brochure (PDF)
                    </a>
                  )}
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors inline-flex items-center"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
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