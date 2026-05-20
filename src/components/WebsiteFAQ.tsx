"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WebsiteFAQ() {
  const [open, setOpen] = useState(3);

  const faqs = [
    {
      question:
        "How much does it cost to build a website in Nigeria?",

      answer:
        "Website pricing depends on the project scope, features, pages, integrations and business goals. Costs vary for corporate websites, ecommerce stores, custom platforms and portals.",
    },

    {
      question:
        "How long does it take to build a website in Nigeria?",

      answer:
        "Simple business websites can take a few days while larger ecommerce, portals and custom solutions may require several weeks depending on complexity.",
    },

    {
      question:
        "Do I need to be tech-savvy to manage my website?",

      answer:
        "No. We build websites that are easy to manage and provide guidance so you can update content, images and pages easily.",
    },

    {
      question:
        "Can Web365 redesign my existing website?",

      answer:
        "Absolutely. Whether your website feels outdated, slow or is not converting visitors, we can redesign and improve performance and user experience.",
    },
  ];

  return (
    <section className="bg-black text-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-10">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-5xl
            lg:text-6xl
            font-black
            mb-20
          "
        >
          Website Design in Nigeria FAQ's
        </motion.h2>

        <div className="border border-neutral-800">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}

              viewport={{
                once: true,
              }}

              className="
                border-b
                border-neutral-800
              "
            >

              <button
                onClick={() =>
                  setOpen(
                    open === index
                      ? -1
                      : index
                  )
                }

                className="
                  w-full
                  flex
                  items-center
                  gap-5
                  px-8
                  py-8
                  text-left
                  text-2xl
                  lg:text-3xl
                "
              >

                <motion.span

                  animate={{
                    rotate:
                      open === index
                        ? 180
                        : 0,
                  }}

                  transition={{
                    duration: 0.4,
                  }}

                  className="
                    text-[#D9862B]
                    text-4xl
                    font-light
                  "
                >

                  {open === index ? "−" : "+"}

                </motion.span>

                {faq.question}

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      height: 0,
                    }}

                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}

                    exit={{
                      opacity: 0,
                      height: 0,
                    }}

                    transition={{
                      duration: 0.45,
                    }}

                    className="overflow-hidden"
                  >

                    <div className="
                      px-24
                      pb-10
                      text-white/80
                      text-xl
                      leading-10
                      max-w-5xl
                    ">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}