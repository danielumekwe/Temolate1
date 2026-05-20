"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";
import StrategySession from "@/components/sections/StrategySession";

export default function EcommercePage() {
  const topFeatures = [
    "Product Management",
    "Online Payments",
    "Inventory Tracking",
    "Order Management",
    "Mobile Responsive",
    "SEO Ready",
  ];

  const ecommerceFeatures = [
    {
      title: "Product Variation",
      text: "Manage product colours, sizes, quantities, prices and options easily.",
    },
    {
      title: "Product Reviews",
      text: "Allow customers to leave reviews that build trust and increase sales.",
    },
    {
      title: "Upsell & Cross-sell",
      text: "Encourage more purchases with related products and smart recommendations.",
    },
    {
      title: "Customer Accounts",
      text: "Let customers create accounts or checkout quickly as guests.",
    },
    {
      title: "Stock & Order Management",
      text: "Manage inventory, orders, fulfilment and customer purchases.",
    },
    {
      title: "Shipping Methods",
      text: "Offer delivery options, shipping rates and location-based fulfilment.",
    },
    {
      title: "Secure Payment Gateway",
      text: "Accept bank transfer, cards, Paystack, Flutterwave and other payment methods.",
    },
    {
      title: "Search Engine Optimization",
      text: "Make products easier to discover on Google and search engines.",
    },
    {
      title: "Analytics & Conversion Tracking",
      text: "Track sales, visitors, conversions and store performance.",
    },
    {
      title: "SSL Certificate",
      text: "Secure customer information and improve trust with HTTPS protection.",
    },
    {
      title: "WhatsApp Live Chat",
      text: "Allow customers to reach you instantly through WhatsApp.",
    },
    {
      title: "Content Management System",
      text: "Easily add, edit and manage products, pages and website content.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />

      <Navbar />

      {/* HERO */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="uppercase tracking-[0.3em] text-[#D9862B] mb-8"
              >
                Ecommerce Website Development
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="text-6xl lg:text-8xl font-black leading-none mb-10"
              >
                Build an
                <span className="text-[#D9862B]"> online store</span>
                <br />
                that sells.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-xl text-neutral-300 leading-10 mb-12 max-w-2xl"
              >
                Web365 Nigeria builds ecommerce websites designed to increase
                sales, improve customer experience and help businesses grow
                online.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                viewport={{ once: true }}
                className="flex gap-5 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#D9862B] px-8 py-5 font-bold"
                >
                  START YOUR STORE
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.06, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-neutral-700 px-8 py-5"
                >
                  VIEW FEATURES
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src="/ecommerce-hero.jpg"
                alt="Ecommerce"
                className="w-full h-[750px] object-cover border border-neutral-800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0B0B0B] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topFeatures.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 80, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -12, scale: 1.03, borderColor: "#D9862B" }}
                className="border border-neutral-800 bg-[#111] p-10"
              >
                <h3 className="text-2xl font-bold text-[#D9862B] mb-5">
                  {item}
                </h3>

                <p className="text-neutral-400 leading-8">
                  Built to improve store performance and customer experience.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 90, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 bg-[#111] border border-neutral-800"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="bg-[#1C1C1C] p-12 lg:p-16"
              >
                <p className="inline-block bg-black px-4 py-2 text-xs uppercase tracking-widest text-neutral-400 mb-24">
                  Contact Us
                </p>

                <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                  Partner with Us for
                  <span className="text-[#D9862B]"> Comprehensive </span>
                  Digital Growth
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#D9862B] p-12 lg:p-16 text-white"
              >
                <p className="text-xl leading-9 mb-10">
                  We’re happy to answer your questions and help you determine
                  which Web365 solution best fits your business goals.
                </p>

                <p className="text-2xl font-black mb-12">
                  Call us at: +234 814-274-6695
                </p>

                <h3 className="text-2xl font-black mb-6">Your benefits:</h3>

                <div className="grid grid-cols-2 gap-5 mb-16">
                  {[
                    "Client-oriented",
                    "Results-driven",
                    "Independent",
                    "Problem-solving",
                    "Competent",
                    "Transparent",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-center"
                    >
                      <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-black mb-8">
                  What happens next?
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    "We schedule a call at your convenience",
                    "We discuss your business needs",
                    "We prepare a proposal",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.12 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-4xl font-black">{index + 1}</span>
                      <p className="mt-3 text-white/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              viewport={{ once: true }}
              className="p-10 lg:p-16 flex items-center"
            >
              <form className="bg-white text-black p-10 w-full shadow-2xl">
                <h3 className="text-3xl font-black text-center mb-10">
                  Schedule a Free Consultation
                </h3>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm mb-2">First name</label>
                    <input className="w-full border border-neutral-300 p-4" />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Last name</label>
                    <input className="w-full border border-neutral-300 p-4" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm mb-2">
                    Company / Organization
                  </label>
                  <input className="w-full border border-neutral-300 p-4" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm mb-2">Company email</label>
                  <input className="w-full border border-neutral-300 p-4" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm mb-2">Phone</label>
                  <input className="w-full border border-neutral-300 p-4" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm mb-2">
                    How Can We Help You?
                  </label>
                  <select className="w-full border border-neutral-300 p-4">
                    <option>Select Option</option>
                    <option>Website Design</option>
                    <option>E-commerce Website</option>
                    <option>SEO Services</option>
                    <option>Hosting & Email</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    className="w-full border border-neutral-300 p-4 h-32"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 font-bold"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ECOMMERCE DETAILS */}
      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="uppercase tracking-[0.3em] text-[#D9862B] mb-6"
              >
                Ecommerce Website Features
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-black leading-tight mb-8"
              >
                Everything your online store needs to sell better.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-neutral-300 text-xl leading-10 mb-8"
              >
                An ecommerce website gives your business a professional online
                store where customers can view products, compare options, make
                payments and place orders easily.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-lg leading-9"
              >
                Web365 Nigeria builds ecommerce websites that are mobile
                responsive, search engine optimized, secure, easy to manage and
                designed to help businesses convert visitors into paying
                customers.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 90, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <img
                src="/ecommerce-laptop.jpg"
                alt="Ecommerce Website"
                className="w-full h-[450px] object-cover border border-neutral-800"
              />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-center mb-20"
          >
            Features Included In Our
            <span className="text-[#D9862B]"> Ecommerce Website Design</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.86,
                  rotateX: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  borderColor: "#D9862B",
                }}
                className="border border-neutral-800 bg-[#111] p-8 text-center"
              >
                <h3 className="text-2xl font-black text-[#D9862B] mb-5">
                  {item.title}
                </h3>

                <p className="text-neutral-400 leading-8">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StrategySession />

      <Footer />
    </main>
  );
}