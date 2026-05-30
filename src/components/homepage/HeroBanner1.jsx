"use client";
import { Mic, Phone, VideoOff } from "lucide-react";
import { Users, CalendarDays } from "lucide-react";
import Image from "next/image";
import tutor from "@/assets/tutor.png";
import star from "@/assets/star.json";
import Lottie from "lottie-react";

const HeroBanner1 = () => {
    const users = [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/men/68.jpg",
      "https://randomuser.me/api/portraits/women/65.jpg",
    ];
  return (
    <div className="pt-30 bg-[#0D6F58] flex items-center">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 items-center gap-20 relative">
        {/* Left Content */}
        <div>
          <div className="">
            <div className="inline-flex bg-[#0d8a6c] px-5 py-2 rounded-full text-white text-sm mb-6">
              Top Rated Tutors From Around the World
            </div>

            <h1 className="text-white font-bold text-4xl lg:text-5xl">
              Accelerate Your Success with Expert{" "}
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
          <div className="bg-white rounded-t-2xl px-5 py-3 inline-flex items-center gap-6 shadow-sm absolute bottom-0 left-20">
            {/* Avatars */}
            <div className="flex">
              {users.map((user, index) => (
                <img
                  key={index}
                  src={user}
                  alt="user"
                  className={`w-12 h-12 rounded-full object-cover border-2 border-white ${
                    index !== 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <h3 className="text-xs font-medium text-[#1F1F1F]">
              Trusted by <span className="font-bold">10K+</span> Learners
            </h3>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Background Cards */}
          <div className="absolute top-25 left-25">
            <div className="absolute w-85 h-100 bg-linear-to-r from-[#10A57F] to-[#D9BF38] rounded-3xl rotate-[10deg]" />
            <div className="absolute w-85 h-100 bg-linear-to-r from-[#10A57F] to-[#D9BF38] rounded-3xl rotate-[-6deg]" />
          </div>

          {/* Floating Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg p-2 flex flex-col gap-3">
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

          {/* Rotating Star */}
          <div className="absolute right-10 top-5 w-15">
            <Lottie animationData={star} loop={true} />
          </div>

          {/* Girl Image */}
          <div className="ml-10 z-10">
            <Image
              width={400}
              height={600}
              src={tutor}
              alt="mentor"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner1;
