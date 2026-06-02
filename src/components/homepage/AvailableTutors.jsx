import React from "react";
import { TutorCard } from "../TutorCard";
import { Button } from "@heroui/react";
import { FaAngleRight } from "react-icons/fa6";

const AvailableTutors = async () => {
  const res = await fetch("http://localhost:5000/availableTutors");
  const tutors = await res.json();
  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Available Tutors
        </h2>
        <p>Here are the tutors who are currently available for booking:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
      <div className="mt-15 flex justify-center">
        <Button className="group py-7 px-8 font-semibold bg-[#ffbe1b] hover:bg-yellow-500 text-black text-lg rounded-full flex items-center">
          See All Tutors{" "}
          <FaAngleRight className="group-hover:translate-x-1 transition-transform duration-300 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default AvailableTutors;
