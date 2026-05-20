import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";
import { Work } from "@/features";
import StrategySession from "@/components/sections/StrategySession";

export default function OurWorkPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />
      <Navbar />

      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-10">
          <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-6">
            Portfolio
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-tight max-w-5xl">
            Websites That Help
            <span className="text-[#D9862B]"> Businesses Grow.</span>
          </h1>

          <p className="text-neutral-400 text-xl mt-10 max-w-3xl leading-9">
            Explore selected website design, ecommerce, corporate, NGO,
            real estate and business projects delivered by Web365 Nigeria.
          </p>
        </div>
      </section>

      <Work />

      <StrategySession />

      <Footer />
    </main>
  );
}