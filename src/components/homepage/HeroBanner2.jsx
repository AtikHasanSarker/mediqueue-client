import { CalendarDays, Mic, Phone, Users, VideoOff } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import tutor from "../../assets/tutor-boy.png";
import Image from 'next/image';

const HeroBanner2 = () => {
    return (
      <div>
        <section className="pt-40 relative overflow-hidden bg-linear-to-r from-[#063B63] via-[#044A78] to-[#035B87]">
          {/* Background Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-[220px] font-bold text-white/5 select-none">
            Guide
          </h1>

          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 items-center gap-10 lg:gap-30 lg:grid-cols-2 w-full">
              {/* Left Content */}
              <div className="z-10  pb-20">
                {/* Heading */} 
                <h1 className=" text-3xl font-bold leading-tight text-white lg:text-4xl">
                  Your Path to Success
                  <br />
                  Starts with the Right
                  <br />
                  <span className="text-yellow-400">Guidance</span>
                </h1>

                {/* Underline */}
                <div className="mt-2 h-2 w-52 rounded-full bg-yellow-400"></div>

                {/* Description */}
                <p className="mt-8 text-xl leading-relaxed text-white/80">
                  Connect with verified tutors who are passionate about teaching
                  and dedicated to your growth and success.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-5">
                  <Link href="/tutors">
                    <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                      <Users size={20} />
                      Explore Tutors
                    </button>
                  </Link>

                  <Link href="/tutors">
                    <button className="bg-[#ffbe1b] text-black px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                      <CalendarDays size={20} />
                      Book a Session
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="flex absolute top-0 left-0 flex-col gap-4 rounded-2xl bg-cyan-600/40 px-5 py-4 backdrop-blur-sm">
                  <div className="flex -space-x-3">
                    <img
                      src="https://i.pravatar.cc/100?img=1"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/100?img=2"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/100?img=3"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/100?img=4"
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                  </div>

                  <span className="text-sm font-medium text-white">
                    Trusted by <span className="font-bold">10K+</span> <br />{" "}
                    Learners
                  </span>
                </div>

                {/* Image */}
                <div className="w-full lg:ml-20 z-10">
                  <Image
                    width={406}
                    height={420}
                    src={tutor}
                    alt="mentor"
                    className="object-bottom"
                  />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg p-2 flex flex-col gap-3">
                  <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-red-600 hover:text-white duration-300">
                    <Mic />
                  </button>

                  <button className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-black duration-300">
                    <Phone />
                  </button>

                  <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-red-600 hover:text-white duration-300">
                    <VideoOff />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default HeroBanner2;