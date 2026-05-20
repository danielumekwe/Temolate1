"use client";

import { motion } from "framer-motion";

import WebsiteHero from "@/components/WebsiteHero";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";
import WebsiteSolutions from "@/components/WebsiteSolutions";
import { Work } from "@/features";
import WebsiteContent from "@/components/WebsiteContent";
import WebsiteFAQ from "@/components/WebsiteFAQ";
import StrategySession from "@/components/sections/StrategySession";

export default function WebsiteDesignPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <WebsiteHero />
      </motion.div>

      <WebsiteSolutions />
      <Work />
      <WebsiteContent />
      <WebsiteFAQ />
      <StrategySession />

      <Footer />
    </main>
  );
}