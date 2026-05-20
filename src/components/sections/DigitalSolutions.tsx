"use client";

import FadeUp from "@/components/animations/FadeUp";

export default function DigitalSolutions() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center py-32">

      <div className="w-full px-10">

        {/* TITLE */}

        <FadeUp>

          <h2 className="
            text-5xl
            lg:text-6xl
            font-black
            text-center
            mb-28
            max-w-5xl
            mx-auto
            leading-tight
          ">

            Top-notch digital solutions designed to help businesses thrive.

          </h2>

        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">

          {/* LEFT CARD */}

          <FadeUp delay={0.1}>

            <div className="bg-neutral-900 border border-neutral-800 p-12">

              <div className="flex gap-8">

                <div className="text-5xl text-[#D9862B]">
                  ▣
                </div>

                <div>

                  <h3 className="text-4xl font-black leading-tight mb-8">
                    Stunning websites that drive real results.
                  </h3>

                  <p className="text-lg leading-9 text-neutral-300 mb-10">

                    Corporate websites that establish trust.

                    E-commerce and marketing websites that boost sales.

                    With over 550 successful projects, we’re the team to bring
                    your web design vision to life.

                  </p>

                  <div className="
                    space-y-5
                    text-2xl
                    font-black
                    text-[#D9862B]
                  ">

                    <p className="underline">
                      Website Design Services
                    </p>

                    <p className="underline">
                      eCommerce Website Design
                    </p>

                    <p className="underline">
                      Custom Website Design
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </FadeUp>

          {/* RIGHT CARD */}

          <FadeUp delay={0.25}>

            <div className="bg-neutral-900 border border-neutral-800 p-12">

              <div className="flex gap-8">

                <div className="text-5xl text-[#D9862B]">
                  ✹
                </div>

                <div>

                  <h3 className="text-4xl font-black leading-tight mb-8">

                    Branding that draws in your ideal audience.

                  </h3>

                  <p className="text-lg leading-9 text-neutral-300 mb-10">

                    From branding and web design to SEO services and
                    pay-per-click campaigns, we help businesses stand out and
                    achieve measurable growth.

                  </p>

                  <div className="
                    space-y-5
                    text-2xl
                    font-black
                    text-[#D9862B]
                  ">

                    <p className="underline">
                      Pay-Per-Click Marketing
                    </p>

                    <p className="underline">
                      Search Engine Optimization
                    </p>

                    <p className="underline">
                      Secured Web Hosting
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
}