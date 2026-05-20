"use client";

import { motion } from "framer-motion";

export default function StrategySession() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#D9862B] text-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-5xl lg:text-7xl font-black leading-tight mb-28"
        >
          Tap into the potential of{" "}

          <span className="text-black">
            strategic
          </span>{" "}

          website design.
        </motion.h2>

        <div className="grid lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="pr-12 lg:border-r border-white/20"
          >
            <div className="flex gap-8">

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.65, delay: 0.35, ease: "backOut" }}
                viewport={{ once: true }}
                className="text-6xl"
              >
                🗓️
              </motion.div>

              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-white/80 mb-4">
                  Let’s talk about your goals
                </p>

                <h3 className="text-4xl font-light mb-8">
                  Schedule time to talk
                </h3>

                <p className="text-xl leading-10 text-white/90 mb-10">
                  Speak to an expert and hear how our website design,
                  hosting, branding and digital solutions can help
                  your business grow and succeed.
                </p>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    inline-block
                    bg-black
                    text-white
                    px-10
                    py-5
                    font-bold
                    mb-12
                  "
                >
                  BOOK 30 MINUTES
                </motion.a>

                <p className="text-white/80 text-lg">
                  Want to talk now? Call us on +234 814 274 6695
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="pl-12 mt-20 lg:mt-0"
          >
            <div className="flex gap-8">

              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.65, delay: 0.5, ease: "backOut" }}
                viewport={{ once: true }}
                className="text-6xl"
              >
                🎯
              </motion.div>

              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-white/80 mb-4">
                  Limited time offer
                </p>

                <h3 className="text-4xl font-light mb-8">
                  Get a FREE Strategy Session
                </h3>

                <p className="text-xl leading-10 text-white/90 mb-10">
                  We will understand your business goals,
                  review your digital presence and share
                  strategies to help improve visibility,
                  growth and conversions.
                </p>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    inline-block
                    bg-black
                    text-white
                    px-10
                    py-5
                    font-bold
                    mb-12
                  "
                >
                  GET STARTED
                </motion.a>

                <p className="text-white/80 text-lg">
                  Send enquiries to info@web365ng.com
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}