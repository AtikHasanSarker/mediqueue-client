import { TutorCard } from "@/components/TutorCard";
import React from "react";

const TutorsPage = async () => {
    const res = await fetch("http://localhost:5000/tutors");
    const tutors = await res.json()
    return (
      <div className="pt-30 pb-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl my-20 text-center font-bold">All Tutors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      </div>
    );
};

export default TutorsPage;