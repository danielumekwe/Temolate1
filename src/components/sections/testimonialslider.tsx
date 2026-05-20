"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider() {
  const testimonials = [
    {
      quote:
        "Web365 transformed our online presence with a professional website that clearly represents our brand and helps customers trust our business.",
      name: "Corporate Client",
      company: "Business Owner",
    },

    {
      quote:
        "Their communication, design process and delivery were impressive. The website came out clean, modern and business-focused.",
      name: "SME Client",
      company: "Lagos, Nigeria",
    },

    {
      quote:
        "Web365 helped us structure our website properly for SEO and lead generation. We highly recommend their service.",
      name: "Marketing Team",
      company: "Agency Client",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActive(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prev = () => {
    setActive(
      (prev) =>
        prev === 0
          ? testimonials.length - 1
          : prev - 1
    );
  };

  return (
    <section className="bg-black text-white py-32 overflow-hidden">

      <div className="max-w-6xl mx-auto px-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            uppercase
            tracking-[0.5em]
            text-sm
            text-neutral-500
            mb-8
          "
        >

          Testimonials

        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl
            lg:text-6xl
            font-black
            leading-tight
            mb-20
          "
        >

          Hear what our clients have

          <span className="text-[#D9862B]">
            {" "}said
          </span>

          <br />

          about us

        </motion.h2>

        <div className="
          relative
          max-w-4xl
          mx-auto
          bg-neutral-950
          border
          border-neutral-800
          p-14
        ">

          <button
            onClick={prev}
            className="
              absolute
              left-8
              top-1/2
              -translate-y-1/2
              text-5xl
              text-[#D9862B]
              z-20
            "
          >
            ‹
          </button>

          <AnimatePresence mode="wait">

            <motion.div
              key={active}

              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: -40,
              }}

              transition={{
                duration: 0.7,
              }}
            >

              <p className="
                text-2xl
                leading-[1.9]
                text-neutral-300
                mb-12
              ">

                “{testimonials[active].quote}”

              </p>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}

                className="
                  w-24
                  h-24
                  mx-auto
                  rounded-full
                  bg-neutral-800
                  border
                  border-neutral-700
                  mb-6
                "
              />

              <h3 className="
                text-2xl
                font-black
              ">

                {testimonials[active].name}

              </h3>

              <p className="
                text-neutral-500
                mt-2
              ">

                {testimonials[active].company}

              </p>

            </motion.div>

          </AnimatePresence>

          <button
            onClick={next}
            className="
              absolute
              right-8
              top-1/2
              -translate-y-1/2
              text-5xl
              text-[#D9862B]
              z-20
            "
          >
            ›

          </button>

        </div>

        {/* Dots */}

        <div className="
          flex
          justify-center
          gap-4
          mt-12
        ">

          {testimonials.map((_, index) => (

            <button
              key={index}

              onClick={() => setActive(index)}

              className={`
                h-3
                rounded-full
                transition-all
                duration-500

                ${
                  active === index
                    ? "w-12 bg-[#D9862B]"
                    : "w-3 bg-neutral-700"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
}