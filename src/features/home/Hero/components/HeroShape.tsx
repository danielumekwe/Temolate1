"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { heroConfig } from "@/config";

const { shapeAnimationDelay } = heroConfig;

export const HeroShape = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="relative">

      <motion.div

        ref={ref}

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          duration:0.8,
          delay:shapeAnimationDelay
        }}

        className="
          relative
          transition-transform
          duration-200
        "
      >

        {/* Back frame */}

        <motion.div

          className="
            absolute
            -bottom-10
            -right-10
            w-2/3
            h-2/3
            border
            border-neutral-800
            bg-neutral-950
            z-[-1]
          "

          initial={{
            opacity:0,
            x:10,
            y:10
          }}

          animate={{
            opacity:1,
            x:0,
            y:0
          }}

          transition={{
            duration:0.8,
            delay:shapeAnimationDelay
          }}

        />

        {/* Video box */}

        <motion.div

          className="
            aspect-square
            relative
            overflow-hidden
            border
            border-neutral-800
            bg-black
          "

          initial={{
            opacity:0,
            scale:0.94
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.9,
            delay:
            shapeAnimationDelay+0.1
          }}

        >

          {/* Decorative frame */}

          <div className="
            absolute
            inset-8
            border
            border-white
            z-20
            pointer-events-none
          "/>

          {/* Video */}

          <iframe

            className="
              absolute
              inset-0
              w-full
              h-full
            "

            src="
https://www.youtube.com/embed/3eX6L-M80s4?autoplay=1&mute=1&loop=1&playlist=3eX6L-M80s4&controls=0&rel=0
            "

            title="
            Web365 Video
            "

            allow="
            autoplay;
            encrypted-media
            "

            allowFullScreen

          />

          {/* Floating square */}

          <div className="
            absolute
            bottom-10
            right-10
            w-24
            h-24
            border
            border-white
            opacity-40
            z-20
          "/>

        </motion.div>

      </motion.div>

    </div>
  );
});

HeroShape.displayName="HeroShape";