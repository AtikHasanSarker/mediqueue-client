'use client'
import Autoplay from "embla-carousel-autoplay";
import HeroBanner1 from "./HeroBanner1";
import HeroBanner2 from "./HeroBanner2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Hero() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="w-full relative overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="pl-0 basis-full">
            <HeroBanner1 />
          </CarouselItem>

          <CarouselItem className="pl-0 basis-full">
            <HeroBanner2 />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4 z-50 bg-white text-black border" />
        <CarouselNext className="right-4 z-50 bg-white text-black border" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-yellow-400 w-8" : "bg-black"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
