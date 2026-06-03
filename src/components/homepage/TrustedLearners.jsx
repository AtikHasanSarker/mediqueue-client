"use client";

import Marquee from "react-fast-marquee";
import ReviewCard from "../ReviewCard";
import { useEffect, useState } from "react";

const TrustedLearners = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/learnersData.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

  return (
    <section className="py-20 overflow-hidden relative">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
          ✦ Reviews ✦
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-14">
        Trusted by <span className="text-[#0d8a6c]">Learners</span> Worldwide
      </h2>

      {/* Top Marquee */}
      <Marquee speed={40} pauseOnHover>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>

      {/* Gap */}
      <div className="h-5" />

      {/* Bottom Marquee */}
      <Marquee speed={40} direction="right" pauseOnHover>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedLearners;
