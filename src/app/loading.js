"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animation/loader.json";

const loading = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Lottie animationData={loadingAnimation} loop className="w-60 h-60" />
      </div>
    );
};

export default loading;