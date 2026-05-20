"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";
import StrategySession from "@/components/sections/StrategySession";

export default function SEOPage() {
  const services = [
    {
      title: "Technical SEO Optimization",
      text: "Improve speed, crawlability, indexing and technical health so your website performs better on search engines.",
    },
    {
      title: "Keyword Research & Strategy",
      text: "We identify high-intent keywords that align with business goals and customer search behavior.",
    },
    {
      title: "Local SEO",
      text: "Increase visibility for local searches, Google Maps and business listings to attract nearby customers.",
    },
    {
      title: "Content & Growth SEO",
      text: "Content strategies designed to increase traffic, authority and conversions.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Website Audit",
      text: "We audit technical SEO, speed, indexing, structure, usability and search performance to identify growth opportunities.",
    },
    {
      number: "02",
      title: "Keyword Research",
      text: "We discover high-intent keywords customers search for and build a strategy around rankings and conversions.",
    },
    {
      number: "03",
      title: "Content Optimization",
      text: "Create and optimize pages that attract traffic while improving search relevance and engagement.",
    },
    {
      number: "04",
      title: "On-Page SEO",
      text: "Optimize titles, headings, metadata, URLs, internal links and technical elements.",
    },
    {
      number: "05",
      title: "Authority Building",
      text: "Build quality backlinks and improve domain trust for stronger search visibility.",
    },
    {
      number: "06",
      title: "Tracking & Reporting",
      text: "Continuous monitoring of rankings, traffic, conversions and campaign performance.",
    },
  ];

  const whyChoose = [
    {
      title: "Technical SEO",
      text: "Complete SEO audits, speed optimization, crawlability, indexing fixes and technical improvements.",
    },
    {
      title: "Local SEO",
      text: "Improve Maps visibility and attract local customers searching nearby.",
    },
    {
      title: "On-Page SEO",
      text: "Optimize headings, metadata, URLs, internal linking and content structure.",
    },
    {
      title: "Off-Page SEO",
      text: "Build authority through backlinks, citations and external mentions.",
    },
    {
      title: "Google My Business Listing",
      text: "Setup and optimize Google Business Profile to improve Maps visibility, reviews and customer acquisition.",
      wide: true,
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />
      <Navbar />

      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.35em] text-[#D9862B] mb-8 text-sm"
            >
              Search Engine Optimization
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 90, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-6xl lg:text-8xl font-black leading-none mb-10"
            >
              Rank higher.
              <br />
              Get found.
              <br />
              Grow your
              <span className="text-[#D9862B]"> business.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-xl leading-10 text-neutral-300 max-w-2xl mb-10"
            >
              Web365 Nigeria helps businesses improve Google visibility,
              attract quality traffic and convert search visitors into paying
              customers through smart SEO strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex gap-5 flex-wrap"
            >
              <motion.a
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="#"
                className="bg-[#D9862B] text-white px-8 py-5 font-bold"
              >
                Request SEO Audit
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                href="#seo-services"
                className="border border-neutral-700 px-8 py-5 font-bold"
              >
                View SEO Services
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-neutral-950 border border-neutral-800 p-8 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
                className="bg-neutral-900 p-6 mb-6"
              >
                <p className="text-neutral-500 mb-3">Keyword Ranking</p>
                <h3 className="text-5xl font-black text-[#D9862B]">Top 3</h3>
                <p className="text-neutral-300 mt-2">
                  Target your most valuable search terms.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  ["SEO", "Technical Setup"],
                  ["Leads", "Quality Traffic"],
                  ["Speed", "Fast Website"],
                  ["Growth", "Better Visibility"],
                ].map(([title, text], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.35 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className={`p-6 ${
                      title === "Growth" ? "bg-[#D9862B]" : "bg-neutral-900"
                    }`}
                  >
                    <h4 className="text-3xl font-black">{title}</h4>
                    <p
                      className={`mt-2 ${
                        title === "Growth"
                          ? "text-white/90"
                          : "text-neutral-400"
                      }`}
                    >
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="seo-services"
        className="bg-black text-white py-32 border-t border-neutral-900 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="max-w-5xl mb-24"
          >
            <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-6">
              SEO Services
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              SEO that goes beyond rankings.
              <span className="text-[#D9862B]"> We focus on growth.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 border border-neutral-800">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 90, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -10, borderColor: "#D9862B" }}
                className={`p-14 border-neutral-800 ${
                  index === 0 ? "border-r border-b" : ""
                } ${index === 1 ? "border-b" : ""} ${
                  index === 2 ? "border-r" : ""
                }`}
              >
                <h3 className="text-3xl font-black mb-8">{service.title}</h3>

                <p className="text-neutral-300 text-xl leading-10">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto mb-24"
          >
            <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-6">
              SEO Process
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-10">
              Our Proven
              <span className="text-[#D9862B]"> SEO Strategy</span>
              <br />
              Built For Growth
            </h2>

            <p className="text-neutral-400 text-xl leading-10">
              SEO is not about shortcuts. It is a structured process focused on
              visibility, traffic growth, lead generation and long-term business
              success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 90,
                  scale: 0.86,
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
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -14, scale: 1.03, borderColor: "#D9862B" }}
                className="bg-[#111] border border-neutral-800 p-10"
              >
                <div className="text-[#D9862B] text-5xl font-black mb-8">
                  {item.number}
                </div>

                <h3 className="text-3xl font-bold mb-6">{item.title}</h3>

                <p className="text-neutral-400 leading-9">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0B] text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="uppercase tracking-[0.3em] text-[#D9862B] mb-6"
              >
                Why Choose Us
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-black leading-tight mb-10"
              >
                Why Choose
                <span className="text-[#D9862B]"> Web365 Nigeria</span>
                <br />
                as the SEO Partner
                <br />
                for your Brand?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-neutral-300 text-xl leading-10 mb-8"
              >
                At Web365 Nigeria, we believe SEO goes beyond rankings. Real SEO
                should improve visibility, generate leads and contribute to
                measurable business growth.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-lg leading-9 mb-8"
              >
                Our SEO approach combines technical optimization, content
                strategy, local search visibility and authority building to help
                businesses achieve long-term search success.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-lg leading-9 mb-10"
              >
                We help startups, organizations, schools and businesses improve
                online visibility while building sustainable digital growth.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={{ y: -8, borderColor: "#D9862B" }}
                    className={`border border-neutral-800 p-8 bg-[#111] ${
                      item.wide ? "md:col-span-2" : ""
                    }`}
                  >
                    <h4 className="text-[#D9862B] text-xl font-bold mb-4">
                      {item.title}
                    </h4>

                    <p className="text-neutral-400 leading-8">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <img
                src="/seo-team.jpg"
                alt="SEO Team"
                className="w-full h-[700px] object-cover border border-neutral-800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <StrategySession />

      <Footer />
    </main>
  );
}