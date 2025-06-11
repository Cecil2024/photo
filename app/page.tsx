"use client"

import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { Gallery } from "@/components/gallery"
import { ImageSlider } from "@/components/image-slider"
import { BookingSection } from "@/components/booking-section"
import { MainNav } from "@/components/main-nav"
import { TestimonialsSection } from "@/components/testimonials-section"
import { QuoteSection } from "@/components/quote-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5EDFO]">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-end">
          <MainNav />
        </div>
      </header>
      <div className="mx-[40px] my-4 rounded-2xl overflow-hidden">
        <ImageSlider />
      </div>
      <BookingSection />
      <main>
        <div id="about" className="mx-[40px] my-8 rounded-2xl overflow-hidden">
        <AboutSection />
        </div>
        <TestimonialsSection />
        <QuoteSection />
        <section id="contact" className="bg-[#FAF4F4] px-6 py-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-md4">
            <div className="mx-auto max-w-md">
              <h2 className="font-title mb-8 text-2xl font-light tracking-[0.2em] after:mt-4 after:block after:h-px after:w-16 after:bg-black/50 after:content-[''] md:text-3xl">
                GET IN TOUCH
              </h2>
              <p className="font-sans mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
                I&apos;d love to hear from you. Please fill out the form below and I&apos;ll get back to you as soon as
                possible. 
                <br>
                </br>
                <br>
                </br>
                Tel: (+44) 7594 980913  <span></span>
                <a
                href="https://wa.me/447594980913"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-2 py-1 rounded-full bg-green-400 text-white text-sm font-semibold shadow hover:bg-green-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.68.96.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.74 4.06.66.23 1.18.37 1.58.47.66.17 1.26.15 1.73.09.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                </svg>
              </a>
                <br>
                </br>
                Email: connieramirezphotography@gmail.com
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between">
          <p className="text-sm text-gray-500">© 2025 Connie Ramirez Photography. London, UK. All rights reserved.</p>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </footer>
    </div>
  )
}

