"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroBanner1 from "./HeroBanner1";
import HeroBanner2 from "./HeroBanner2";

export default function Hero() {
  const slides = [<HeroBanner1 key="hero-1" />, <HeroBanner2 key="hero-2" />];

  return (
    <section className="w-full relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={0}
        className="relative hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white !important;
        }

        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          color: white !important;
          font-size: 1.25rem;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
          width: 0.8rem;
          height: 0.8rem;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: white !important;
          width: 1rem;
          height: 1rem;
        }
      `}</style>
    </section>
  );
}
