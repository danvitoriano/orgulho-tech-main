"use client";

import { useMemo, useRef } from "react";

export type Slide = {
  description: string;
  avatar: string;
  name: string;
};

export interface TestimonialsProps {
  title?: string;
  slides?: Slide[];
}

export default function Testimonials({
  title,
  slides = [],
}: TestimonialsProps) {
  const sliderRef = useRef<HTMLUListElement>(null);
  const dotIds = useMemo(() => slides.map((_, index) => `dot-${index}`), [slides]);

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const item = slider.querySelector<HTMLLIElement>(`[data-slider-item='${index}']`);
    if (!item) return;
    slider.scrollTo({
      left: item.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const items = slider.querySelectorAll<HTMLLIElement>("[data-slider-item]");
    if (!items.length) return;
    const index = Math.max(0, Math.round(slider.scrollLeft / items[0].offsetWidth) - 1);
    scrollToIndex(index);
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const items = slider.querySelectorAll<HTMLLIElement>("[data-slider-item]");
    if (!items.length) return;
    const index = Math.min(
      items.length - 1,
      Math.round(slider.scrollLeft / items[0].offsetWidth) + 1,
    );
    scrollToIndex(index);
  };

  return (
    <section className="min-h-min flex flex-col lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-28">
      {title && (
        <h2 className="text-4xl leading-snug lg:w-1/2 pb-12 lg:pb-16">
          {title}
        </h2>
      )}
      <ul
        ref={sliderRef}
        data-slider
        className="carousel carousel-center w-full col-span-full row-span-full gap-6"
      >
        {slides.map((slide, index) => (
          <li
            key={slide.name}
            data-slider-item={index}
            className="carousel-item max-w-[300px] w-full"
          >
            <div className="relative overflow-y-hidden w-full min-h-[292px]">
              <div className="flex flex-col justify-center gap-16 p-8 border border-base-content rounded-2xl h-full max-w-[300px]">
                <p className="text-lg">{slide.description}</p>
                <div className="flex items-center gap-5">
                  <img
                    src={slide.avatar}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="object-cover w-14 h-14 rounded-full"
                    alt={slide.name}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-base">{slide.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between pt-8 lg:px-16">
        <style>{
          "@property --dot-progress {syntax: '<percentage>'; inherits: false; initial-value: 0%;}"
        }</style>
        <ul className="carousel col-span-full gap-3 z-10">
          {dotIds.map((id, index) => (
            <li key={id} className="carousel-item">
              <button
                data-dot={index}
                aria-label={`go to slider item ${index}`}
                className="focus:outline-none group"
                onClick={() => scrollToIndex(index)}
              >
                <div className="py-5">
                  <div className="w-2 h-2 rounded-full dot" />
                </div>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <div className="flex items-center justify-center z-10 col-start-1 row-start-2">
            <button
              data-slide="prev"
              aria-label="Previous item"
              className="flex items-center justify-center btn-circle border border-base-content"
              onClick={handlePrev}
            >
              <svg width="24" height="24" strokeWidth="3" className="text-base-content">
                <use href="/sprites.svg#ArrowRight" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center z-10 col-start-3 row-start-2">
            <button
              data-slide="next"
              aria-label="Next item"
              className="flex items-center justify-center btn-circle border border-base-content"
              onClick={handleNext}
            >
              <svg width="24" height="24" strokeWidth="3" className="text-base-content">
                <use href="/sprites.svg#ArrowLeft" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
