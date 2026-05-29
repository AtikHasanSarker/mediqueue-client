import { ArrowRight, Mic, Phone, VideoOff, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#066b5a] via-[#08765f] to-[#0d8a6c] min-h-screen flex items-center">
      {/* Moving White Bars */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-30">
        <div className="flex animate-marquee gap-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-[180px] h-[300px] bg-white/30 rounded-t-xl backdrop-blur-md"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left Content */}
        <div>
          <div className="inline-flex bg-[#0d8a6c] px-5 py-2 rounded-full text-white text-sm mb-6">
            Top Rated Tutors From Around the World
          </div>

          <h1 className="text-white font-bold text-5xl lg:text-7xl leading-tight">
            Accelerate Your Success with
            <br />
            Expert{" "}
            <span className="text-[#9ddf35] relative">
              MediQueue
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 300 30"
              >
                <path
                  d="M5 20C60 5 240 5 295 20"
                  stroke="#facc15"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-white/90 mt-6 text-xl max-w-xl">
            Get one on one guidance from verified tutors across career,
            business, tech, and personal development.
          </p>

          {/* Search Box */}
          <div className="bg-white mt-10 rounded-full p-2 flex items-center max-w-3xl shadow-2xl">
            <Search className="ml-4 text-gray-500" />

            <input
              type="text"
              placeholder="Search for a mentor or topic..."
              className="flex-1 px-4 outline-none"
            />

            <div className="hidden md:flex items-center border-l px-6 text-gray-700">
              All Categories
            </div>

            <button className="bg-[#066b5a] text-white p-4 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Background Cards */}
          <div className="absolute w-[320px] h-[420px] bg-[#17b48f] rounded-3xl rotate-[-6deg]" />
          <div className="absolute w-[340px] h-[440px] bg-[#d6d041] rounded-3xl rotate-[5deg]" />
          <div className="absolute w-[350px] h-[460px] bg-[#f0c93d] rounded-3xl rotate-[-2deg]" />

          {/* Floating Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg p-2 flex flex-col gap-3">
            <button className="w-14 h-14 rounded-full border flex items-center justify-center">
              <Mic />
            </button>

            <button className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center">
              <Phone />
            </button>

            <button className="w-14 h-14 rounded-full border flex items-center justify-center">
              <VideoOff />
            </button>
          </div>

          {/* Rotating Star */}
          <div className="absolute right-10 top-10 animate-spin-slow z-20">
            <img src="/assets/star.png" alt="star" className="w-16 h-16" />
          </div>

          {/* Girl Image */}
          <img
            src="/assets/mentor.png"
            alt="mentor"
            className="relative z-10 h-[650px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
