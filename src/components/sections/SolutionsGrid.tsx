"use client";

import { motion } from "framer-motion";

export default function SolutionsGrid() {
  const services = [
    {
      icon: "⌘",
      title: "Website Design",
      desc: "We design professional websites that help businesses build trust and generate enquiries.",
    },
    {
      icon: "☷",
      title: "Web Development",
      desc: "We build custom websites, CMS platforms and business solutions for different industries.",
    },
    {
      icon: "◎",
      title: "SEO Optimization",
      desc: "Drive qualified traffic to your website and improve visibility on Google search results.",
    },
    {
      icon: "◉",
      title: "Pay Per Click",
      desc: "PPC campaigns that help your business attract targeted leads and increase conversions.",
    },
    {
      icon: "▣",
      title: "E-commerce Development",
      desc: "Online stores designed to help you sell products and receive payments easily.",
    },
    {
      icon: "♢",
      title: "Social Media Marketing",
      desc: "Improve your online presence with creative social media marketing campaigns.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="inline-block bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs uppercase tracking-widest text-neutral-400 mb-8"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-6xl font-black mb-8"
        >
          Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-neutral-400 text-lg max-w-5xl mb-16"
        >
          Web365 Nigeria provides website design, ecommerce development, SEO,
          digital marketing and hosting solutions for businesses that want to
          grow online.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 90,
                scale: 0.85,
                rotateX: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                y: -14,
                scale: 1.03,
                borderColor: "#D9862B",
              }}
              className="bg-neutral-950 border border-neutral-800 p-10 min-h-[300px] transition cursor-pointer"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.2,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
                className="text-5xl text-[#D9862B] mb-10"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-3xl font-black mb-6">
                {service.title}
              </h3>

              <p className="text-neutral-400 leading-8 mb-10">
                {service.desc}
              </p>

              <a
                href="#"
                className="text-[#D9862B] font-bold underline"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-block bg-[#D9862B] text-white px-10 py-5 font-bold uppercase"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}