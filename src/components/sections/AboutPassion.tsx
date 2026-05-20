"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function AboutPassion() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#D9862B] text-white mt-40 overflow-visible">
      <div className="grid lg:grid-cols-2 min-h-[760px]">
        <div className="flex items-center py-28 px-10 lg:px-32">
          <div className="max-w-xl">
            <FadeUp>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-12">
                Passionate
                <br />
                About Creating
                <br />
                Quality Design
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mb-14">
                <h3 className="text-3xl font-black mb-5">
                  We Love What We Do
                </h3>

                <p className="text-xl leading-9 text-white/90">
                  We are a creative website design agency helping businesses
                  build strong digital experiences, ecommerce platforms and
                  growth-focused websites.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div>
                <h3 className="text-3xl font-black mb-5">
                  Why Work With Us
                </h3>

                <p className="text-xl leading-9 text-white/90">
                  Our clients choose Web365 Nigeria because we build websites
                  focused on growth, branding, visibility and long-term success.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="relative">
          <FadeUp delay={0.2}>
            <Image
              src="/about-team.jpg"
              alt=""
              width={1200}
              height={900}
              className="absolute right-24 -top-40 w-[85%] h-[850px] object-cover"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}