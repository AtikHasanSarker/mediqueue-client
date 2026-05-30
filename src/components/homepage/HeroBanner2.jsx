import { Users, CalendarDays } from "lucide-react";
import Image from "next/image";
import { GiPolarStar } from "react-icons/gi";
import mentorImage from "../../assets/mentor-girl.png";

const HeroBanner2 = () => {
  return (
    <section className="pt-30  relative overflow-hidden bg-linear-to-r from-[#14004b] via-[#1c0ba8] to-[#23007a]">
      {/* Background Text */}
      <h1 className="absolute top-[20%] left-[15%] w-full text-[220px] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
        Mentorship
      </h1>

      <div className="max-w-6xl mx-auto px-6 ">
        {/* Decorative Lines */}
        <div className="absolute left-1/2 top-0 h-full w-[350px] opacity-20">
          <div className="wave-lines"></div>
        </div>

        <div className="flex items-center">
          <div className="grid lg:grid-cols-2 items-center gap-10 w-full">
            {/* Left Side */}
            <div className="py-26">
              {/* Trusted Badge */}
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-4 rounded-full mb-8">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=13"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=14"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>

                <span className="text-white font-medium">
                  Trusted by <span className="font-bold">10K+</span> Learners
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                Unlock Your Potential
                <br />
                with Expert{" "}
                <span className="text-[#ffbe1b] relative inline-block">
                  Mentorship
                  <svg
                    className="absolute -bottom-8 left-0 w-full"
                    viewBox="0 0 300 40"
                  >
                    <path
                      d="M10 20C60 10 250 10 290 20"
                      stroke="#ffbe1b"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M80 32H250"
                      stroke="#ffbe1b"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg max-w-xl mt-8">
                Get personalised guidance from industry experts to learn faster,
                grow smarter, and achieve your career goals with confidence.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                  <Users size={20} />
                  Explore Mentors
                </button>

                <button className="bg-[#ffbe1b] text-black px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                  <CalendarDays size={20} />
                  Book a Session
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-end">
              <div className=" w-[400px] h-[400px] rounded-full bg-white/10 backdrop-blur-sm" />
              <div className="absolute top-0 text-[#ffbe1b] text-5xl -right-10 animate-spin">
                <GiPolarStar />
              </div>

              <div className="w-full absolute -bottom-30 z-10">
                <Image
                  width={500}
                  height={500}
                  src={mentorImage}
                  alt="mentor"
                  className="object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
