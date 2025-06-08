export function BookingSection() {
  return (
    <section className="mx-[40px] my-8 rounded-2xl bg-[#F9BEC1] p-8 flex flex-col items-center text-center">
      <h2 className="font-title text-2xl font-semibold mb-8 tracking-wide">Book Your Session</h2>
      <div className="grid gap-8 md:grid-cols-3 w-full">
        {/* Free Consultation */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide">Free Consultation</h3>
          <p className="mb-4 text-gray-700 text-sm">
            Schedule a free call to discuss your ideas, needs, and how I can help capture your story.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/15-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full  bg-gray-400 text-white hover:bg-gray-500 font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK FREE CALL
          </a>
        </div>
        {/* Family Mini Session */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide">Family Mini Session</h3>
          <p className="mb-4 text-gray-700 text-sm">
            Capture memories with your loved ones in a relaxed, fun session at your favorite location.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/45-minute-family"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK FAMILY
          </a>
        </div>
        {/* Portrait Session */}
        <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow">
          <h3 className="font-title text-xl mb-2 tracking-wide">Portrait Session</h3>
          <p className="mb-4 text-gray-700 text-sm">
            Book a personal or professional portrait session and let’s create beautiful, authentic images together.
          </p>
          <a
            href="https://tidycal.com/connieramirezphotography/30-minute-portraits"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-white font-normal shadow hover:bg-primary/90 transition-colors text-sm"
          >
            BOOK PORTRAIT
          </a>
        </div>
      </div>
    </section>
  )
}