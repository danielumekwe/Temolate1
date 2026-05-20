"use client";

import { motion } from "framer-motion";

export default function MissionResults() {
  return (
    <section className="bg-black text-white py-32 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl lg:text-6xl font-black leading-tight max-w-5xl mb-24"
        >
          Our mission is to help businesses succeed through{" "}
          <span className="text-[#D9862B]">excellent</span> digital services,
          focused on results:
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 border-t border-neutral-800 pt-16">

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:pr-16 lg:border-r lg:border-neutral-800"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#D9862B] text-5xl mb-8"
            >
              ▣
            </motion.div>

            <h3 className="text-4xl font-black leading-tight mb-8">
              Beautiful websites that get results
            </h3>

            <p className="text-neutral-300 text-lg leading-9 mb-10">
              Corporate websites that build trust. E-commerce and marketing
              websites that drive sales. With experience working on hundreds of
              projects, we are the company to talk to about your web design
              goals.
            </p>

            <div className="space-y-5 text-[#D9862B] text-xl font-bold underline">
              <p>Website Design Services</p>
              <p>eCommerce Website Design</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:pl-10"
          >
            <motion.div
              initial={{ scale: 0, rotate: 90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-[#D9862B] text-5xl mb-8"
            >
              ✹
            </motion.div>

            <h3 className="text-4xl font-black leading-tight mb-8">
              Branding that attracts the right people
            </h3>

            <p className="text-neutral-300 text-lg leading-9 mb-10">
              We help your business stand out in a noisy marketplace and be
              perceived the right way. From branding and design to SEO and
              marketing, we help businesses achieve measurable growth.
            </p>

            <div className="space-y-5 text-[#D9862B] text-xl font-bold underline">
              <p>Branding & Design Services</p>
              <p>Search Engine Optimization</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#"
            className="inline-block bg-[#D9862B] text-white px-10 py-5 font-black uppercase tracking-wide"
          >
            Get a Free 30-Minute Strategy Session →
          </a>
        </motion.div>
      </div>
    </section>
  );
}