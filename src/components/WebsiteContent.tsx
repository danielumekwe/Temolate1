"use client";

import { motion } from "framer-motion";

export default function WebsiteContent() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-10">
        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            text-[#D9862B]
            text-5xl
            lg:text-6xl
            font-black
            mb-16
          "
        >
          High-Quality Website Designs in Nigeria
        </motion.h2>

        <div
          className="
            text-white/90
            text-xl
            lg:text-2xl
            leading-[1.9]
            space-y-10
          "
        >
          {[
            "We take pride in building websites that do more than look beautiful — they are designed to improve visibility, strengthen trust and help businesses grow online.",

            "At Web365 Nigeria, we build with modern technologies and trusted platforms including WordPress, HTML, CSS, PHP and React, helping businesses launch responsive, conversion-focused websites that are easy to manage and scale.",

            "We believe great websites are not only about design. User experience, speed, performance and structure directly influence conversions. Every project is created with growth and measurable business results in mind.",

            "Beyond traditional websites, we also build ecommerce platforms, custom portals, business systems and web applications tailored to the specific needs of organizations, entrepreneurs and growing brands.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}