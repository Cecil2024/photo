import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-64 w-full aspect-square lg:aspect-square lg:h-full">
        <Image
          src="/selfie Connie.jpg"
          alt="Connie Ram self portrait through car mirror"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
      <div className="flex items-center bg-[#FAF4F4] px-6 py-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="font-title mb-12 text-left text-2xl tracking-[0.2em] after:mt-4 after:block after:h-px after:w-16 after:bg-black/50 after:content-[''] md:text-3xl">
            ABOUT ME
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-gray-600 md:text-base text-justify">
            <p>
              My name is Connie. I am a{" "}
              <Link href="#" className="underline underline-offset-4">
                visual artist
              </Link>{" "}
              and master in Art History and 10 years ago I found in photography the perfect language.
            </p>
            <p>
              I love to be able to capture those moments where the spontaneity and sentiments remain displayed in
              magical images. I move away from the convention of portrait photography and give it an artistic and
              contemporary touch.
            </p>
            <p>
              I am a traveling soul and I love challenges, so if you want me to move for your photo session, I will do
              it with even greater pleasure.
            </p>
            <p>Don&apos;t hesitate to contact me for more information!</p>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link href="https://tidycal.com/connieramirezphotography" className="px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors inline-block">
              BOOK SESSION
            </Link>
            <Link href="/services" className="px-4 py-2 rounded-full bg-[#777278] text-white font-normal shadow hover:bg-primary/90 transition-colors inline-block">
              SEE PRICES
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

