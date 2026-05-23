"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "The Best Web Design Company In Lagos",
    text: "We help small and large businesses create stunning websites that look great, load fast and rank on Google.",
    image: "/images/hero-slide-1.jpg",
  },

  {
    title: "Website Design, SEO & Digital Marketing",
    text: "We combine strategy, design, development and search optimization to help businesses dominate online.",
    image: "/images/hero-slide-2.jpg",
  },

  {
    title: "Professional Ecommerce Website Solutions",
    text: "Launch online stores with secure payment integration, product management and conversion-focused design.",
    image: "/images/hero-slide-3.jpg",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[650px] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          <div className="absolute inset-0 bg-black/65" />

        </div>
      ))}

      <div className="relative z-20 h-full flex items-center justify-center px-6">

        <div className="max-w-5xl text-center">

          <span className="inline-block border border-white/30 text-white uppercase text-sm tracking-widest px-4 py-2 mb-8">
            Website Design Company In Nigeria
          </span>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">

            {slides[active].title}

          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-8 mb-10">

            {slides[active].text}

          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <Link
              href="/our-work"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="bg-[#D9862B] text-black px-8 py-4 rounded-full font-semibold"
            >
              Request A Quote
            </Link>

          </div>

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 ${
              active === index
                ? "w-14 h-1 bg-[#D9862B]"
                : "w-10 h-1 bg-white/40"
            }`}
          />
        ))}

      </div>

    </section>
  );
}