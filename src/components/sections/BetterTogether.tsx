"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function BetterTogether() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black text-white overflow-hidden">

      <div className="grid lg:grid-cols-2 min-h-[800px]">

        <div className="flex items-center py-24 px-10 lg:px-24">

          <div className="max-w-xl">

            <FadeUp>

              <h2 className="text-6xl lg:text-8xl font-black leading-none mb-12">
                Why Choose us?
              </h2>

            </FadeUp>

            <FadeUp delay={0.1}>

              <p className="text-xl leading-10 text-neutral-300 mb-8">
                I know you are here because you want to grow your business
                online, launch something meaningful, or build a stronger
                digital presence — not necessarily to read my story.
              </p>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="text-xl leading-10 text-neutral-300 mb-8">
                My journey into technology started with a passion for creating.
                Websites, digital platforms and business solutions fascinated
                me. I spent years learning, experimenting and helping
                businesses grow online.
              </p>

            </FadeUp>

            <FadeUp delay={0.3}>

              <p className="text-xl leading-10 text-neutral-300 mb-8">
                Small projects became larger opportunities. Businesses needed
                websites, ecommerce platforms, hosting, SEO and digital systems
                that could support growth.
              </p>

            </FadeUp>

            <FadeUp delay={0.4}>

              <p className="text-xl leading-10 text-neutral-300 mb-10">
                Today Web365 helps businesses, entrepreneurs, schools and
                organizations establish and strengthen their digital presence
                through web development, hosting, branding and technology
                solutions.
              </p>

            </FadeUp>

            <FadeUp delay={0.5}>

              <p className="text-2xl font-bold leading-10 text-white">
                It has never been only about building websites.
                <br />
                It is about building digital foundations for growth.
              </p>

            </FadeUp>

          </div>

        </div>

        <div className="relative min-h-[500px]">

          <FadeUp delay={0.2}>

            <Image
              src="/better-together.png"
              alt="Web365 Story"
              fill
              priority
              className="object-cover"
            />

          </FadeUp>

          <div className="absolute inset-0 bg-black/20"></div>

        </div>

      </div>

    </section>
  );
}