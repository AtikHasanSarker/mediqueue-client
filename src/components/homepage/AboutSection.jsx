"use client";
import { ArrowRight, Target, Eye } from "lucide-react";
import student1 from "@/assets/student-1.png";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.png";
import groupImg from "@/assets/group.png";
import Image from "next/image";
import {
  FaHandshake,
  FaUserTie,
  FaMapMarkerAlt,
  FaRegThumbsUp,
} from "react-icons/fa";
import CountUp from "react-countup";

const AboutSection = () => {
  const stats = [
    {
      icon: <FaHandshake size={40} />,
      value: "850",
      label: "Successful Sessions",
    },
    {
      icon: <FaUserTie size={40} />,
      value: "350",
      label: "Expert Mentors",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      value: "12",
      label: "Countries Served",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="relative w-full max-w-[700px] mx-auto">
          <div className="grid grid-cols-5 gap-4">
            {/* Top Left */}
            <div className="col-span-3 bg-[#F0E0EC] rounded-tl-[100px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden h-[320px]">
              <Image
                src={groupImg}
                alt="group of students"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right */}
            <div className="col-span-2 bg-[#D8D5F1] rounded-tl-3xl rounded-tr-[100px] rounded-br-3xl rounded-bl-lg overflow-hidden h-[250px] mt-10">
              <Image
                src={student1}
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Bottom Left */}
            <div className="col-span-2 bg-[#F4EFE6] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-[100px] overflow-hidden h-[230px]">
              <Image
                src={student2}
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Bottom Right */}
            <div className="col-span-3 bg-[#F3E0E0] rounded-tl-3xl rounded-tr-3xl rounded-br-[100px] rounded-bl-3xl overflow-hidden h-[250px]">
              <Image
                src={student3}
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* CENTER BADGE */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[180px] h-[180px] border-3 border-white rounded-full bg-gradient-to-br from-[#69D5C8] to-[#2CA66F] shadow-xl flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-white/30" />

              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                    />
                  </defs>

                  <text
                    fill="white"
                    fontSize="15"
                    fontWeight="600"
                    letterSpacing="5"
                  >
                    <textPath href="#circlePath">
                      SUCCESSFUL • MENTORING • GUIDING •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className=" text-4xl">✦</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#10B981] font-semibold text-2xl">
              About Us
            </span>

            <div className="flex">
              <span className="w-12 h-[3px] animate-skeleton bg-[#10B981]" />
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight max-w-[600px]">
            Learn More About Who We Are
          </h2>

          <p className="mt-6 text-lg  leading-9 max-w-[700px]">
            We are a dedicated mentoring platform connecting learners with
            experienced industry professionals. Our mission is to guide
            students, aspiring professionals, and teams.
          </p>

          {/* Mission Vision */}
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="pr-6 md:border-r border-gray-200">
              <div className="w-16 h-16 rounded-full bg-[#0FAE84] flex items-center justify-center mb-5">
                <Target className=" w-8 h-8" />
              </div>

              <h3 className="text-4xl font-bold mb-4">Our Mission</h3>

              <p className=" text-lg leading-9">
                Our mission is to connect learners with expert mentors who
                inspire, guide, and empower them to achieve their goals.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-full bg-[#0FAE84] flex items-center justify-center mb-5">
                <Eye className=" w-8 h-8" />
              </div>

              <h3 className="text-4xl font-bold mb-4">Our Vision</h3>

              <p className="text-lg leading-9">
                Our vision is to become the most impactful global mentoring
                platform, transforming the way people learn, grow, and succeed.
              </p>
            </div>
          </div>

          <button className="mt-12 bg-[#10B981] hover:bg-[#0D9F76] transition-all duration-300  font-semibold px-8 py-4 rounded-full flex items-center gap-2">
            More About Us
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Stat  */}
      <div className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-4 px-6 ${
                index !== stats.length - 1
                  ? "md:border-r border-emerald-400"
                  : ""
              }`}
            >
              <div className="text-emerald-500">{item.icon}</div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold ">
                  <CountUp
                    end={item.value}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h2>
                <p className=" mt-1">{item.label}</p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center gap-4 px-6 md:border-l border-emerald-400">
            <div className="text-emerald-500 ">
              <FaRegThumbsUp size={40} />
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <CountUp end={98} duration={3} enableScrollSpy scrollSpyOnce />%
              </h2>
              <p className=" mt-1">Satisfaction Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
