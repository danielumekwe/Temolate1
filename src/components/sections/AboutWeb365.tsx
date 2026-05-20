"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function AboutWeb365() {
  return (
    <section className="bg-black py-32 text-white">

      <div className="max-w-7xl mx-auto px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

          {/* LEFT */}

          <div>

            <FadeUp>

              <span className="
                uppercase
                text-sm
                tracking-[5px]
                text-[#D9862B]
              ">

                Web Design Company In Nigeria

              </span>

            </FadeUp>

            <FadeUp delay={0.1}>

              <h2 className="
                text-5xl
                lg:text-6xl
                font-black
                leading-tight
                mt-6
                mb-8
              ">

                As the leading web design company in Lagos, Nigeria,
                we specialize in helping businesses grow

              </h2>

            </FadeUp>

            <FadeUp delay={0.2}>

              <p className="
                text-lg
                leading-9
                text-neutral-300
              ">

                Our talented web designers work closely with you to
                build websites that support your business goals and
                drive success.

                Contact us today to get started on your journey to a
                powerful online presence.

                <span className="text-[#D9862B] font-bold">
                  {" "}Web365 Nigeria
                </span>

                offers budget-friendly website design services without
                compromising on quality.

              </p>

            </FadeUp>

          </div>

          {/* IMAGE */}

          <FadeUp delay={0.3}>

            <div className="
              bg-neutral-900
              border
              border-neutral-800
              p-8
            ">

              <Image
                src="/about-preview.jpg"
                alt="Web365"
                width={800}
                height={600}
                className="
                  w-full
                  h-[320px]
                  object-cover
                "
              />

            </div>

          </FadeUp>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          <FadeUp delay={0.1}>

            <div className="
              bg-neutral-900
              border
              border-neutral-800
              p-10
            ">

              <div className="
                text-5xl
                mb-8
                text-[#D9862B]
              ">
                💻
              </div>

              <h3 className="
                text-2xl
                font-black
                mb-6
              ">

                Best Web Design Company for your Corporate Website needs.

              </h3>

              <p className="
                text-neutral-300
                leading-8
              ">

                We build websites that promote businesses online and
                connect them with the right prospects.

              </p>

            </div>

          </FadeUp>

          <FadeUp delay={0.2}>

            <div className="
              bg-neutral-900
              border
              border-neutral-800
              p-10
            ">

              <div className="
                text-5xl
                mb-8
                text-[#D9862B]
              ">
                🛒
              </div>

              <h3 className="
                text-2xl
                font-black
                mb-6
              ">

                Trusted eCommerce Website Design Company

              </h3>

              <p className="
                text-neutral-300
                leading-8
              ">

                Ecommerce websites designed for online growth and sales.

              </p>

            </div>

          </FadeUp>

          <FadeUp delay={0.3}>

            <div className="
              bg-neutral-900
              border
              border-neutral-800
              p-10
            ">

              <div className="
                text-5xl
                mb-8
                text-[#D9862B]
              ">
                📧
              </div>

              <h3 className="
                text-2xl
                font-black
                mb-6
              ">

                Reliable Website & Email Hosting Services

              </h3>

              <p className="
                text-neutral-300
                leading-8
              ">

                Secure hosting and email solutions for businesses.

              </p>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
}