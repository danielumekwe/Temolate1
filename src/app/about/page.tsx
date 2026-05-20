import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";
import AboutPassion from "@/components/sections/AboutPassion";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import AboutOverview from "@/components/sections/AboutOverview";
import MissionResults from "@/components/sections/MissionResults";
import BetterTogether from "@/components/sections/BetterTogether";
import StrategySession from "@/components/sections/StrategySession";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />

      <Navbar />

      {/* HERO VIDEO SECTION */}

      <section className="relative w-screen h-[70vh] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/about-video.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 text-center px-8">

    <p className="uppercase tracking-[0.4em] text-[#D9862B] mb-6">
      ABOUT WEB365 NIGERIA
    </p>

    <h1 className="text-6xl lg:text-7xl font-black mb-8">
      About
    </h1>

    <p className="max-w-3xl mx-auto text-lg text-neutral-300">
      Website Design Company in Nigeria helping businesses,
      organizations and entrepreneurs build powerful digital experiences.
    </p>

  </div>

</section>

      {/* ABOUT SECTION */}

      <section className="py-28 border-t border-neutral-900">

        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#D9862B] mb-6">
              WHO WE ARE
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              We build websites that help businesses grow.
            </h2>

            <p className="text-neutral-300 text-lg leading-9">
              Web365 Nigeria is a trusted website design company based
              in Lagos delivering professional corporate websites,
              ecommerce solutions, branding, SEO services and digital
              experiences for businesses across industries.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-neutral-900 border border-neutral-800 p-8">

              <h3 className="text-5xl font-black text-[#D9862B]">
                550+
              </h3>

              <p className="mt-4 text-neutral-400">
                Projects Delivered
              </p>

            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">

              <h3 className="text-5xl font-black text-[#D9862B]">
                35+
              </h3>

              <p className="mt-4 text-neutral-400">
                Industries Served
              </p>

            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">

              <h3 className="text-5xl font-black text-[#D9862B]">
                24/7
              </h3>

              <p className="mt-4 text-neutral-400">
                Customer Support
              </p>

            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">

              <h3 className="text-5xl font-black text-[#D9862B]">
                100%
              </h3>

              <p className="mt-4 text-neutral-400">
                Responsive Design
              </p>

            </div>

          </div>

        </div>

      </section>
      <AboutPassion />
        <SolutionsGrid />
        <BetterTogether />
        <AboutOverview />
<MissionResults />
  <StrategySession />      

      <Footer />

    </main>
  );
}