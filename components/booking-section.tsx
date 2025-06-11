import Image from "next/image"

export function BookingSection() {
  return (
    <section className="mx-[40px] my-8 rounded-2xl bg-[#F9BEC1] p-8 flex flex-col items-center text-center">
      <h2 className="font-title text-2xl font-semibold mb-8 tracking-wide">Book Your Session</h2>
      <div className="grid gap-8 md:grid-cols-3 w-full">
        {/* Free Consultation */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide flex items-center gap-2">
            <Image
              src="/consultation icon.png"
              alt="Consultation Icon"
              width={38}
              height={38}
              className="inline-block"
            />
            Free Call
          </h3>
          <p className="mb-4 text-gray-700 text-sm">
            Schedule a free consultation to discuss your ideas, needs, and how I can help capture your story.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#777278] text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK FREE CALL
          </a>
        </div>
        {/* Family Mini Session */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide flex items-center gap-2">
            <Image
              src="/family icon.gif"
              alt="Family Icon"
              width={50}
              height={50}
              className="inline-block"
            />
            Family Mini Session
          </h3>
          <p className="mb-4 text-gray-700 text-sm">
            Capture memories with your loved ones in a relaxed, fun session at your favorite location.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/45-minute-family"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK FAMILY
          </a>
        </div>
        {/* Portrait Session */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide flex items-center gap-2">
            <Image
              src="/portrait icon.png"
              alt="Portrait Icon"
              width={40}
              height={40}
              className="inline-block"
            />
            Portrait Session
          </h3>
          <p className="mb-4 text-gray-700 text-sm">
            Book a personal or professional portrait session and let’s create beautiful, authentic images together.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/30-minute-portraits"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#F58E92] text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK PORTRAIT
          </a>
        </div>
      </div>
    </section>
  )
}