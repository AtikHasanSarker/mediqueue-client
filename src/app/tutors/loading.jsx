"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animation/loader.json";

const loading = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Lottie animationData={loadingAnimation} loop className="w-48 h-48 md:w-60 md:h-60 lg:h-80 lg:w-80" />
      </div>
    );
};

export default loading;