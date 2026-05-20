"use client";

import { Play } from "lucide-react";

export default function WebsiteHero() {
  return (

    <section
      className="
      relative
      w-screen
      left-1/2
      right-1/2
      -ml-[50vw]
      -mr-[50vw]
      bg-black
      py-24
      overflow-hidden
    "
    >

      <div className="max-w-[1600px] mx-auto px-12">

        <div className="grid lg:grid-cols-2 gap-24 items-center min-h-[900px]">

          {/* LEFT */}

          <div>

            <p className="
              uppercase
              tracking-[0.30em]
              text-neutral-400
              mb-8
              text-sm
            ">

              WEBSITE DESIGN & DEVELOPMENT AGENCY

            </p>

            <h1
              className="
              text-6xl
              lg:text-8xl
              font-black
              leading-[0.92]
              text-white
              mb-12
            "
            >

              You need a

              <br />

              <span className="text-[#D9862B]">
                beautiful
              </span>

              <br />

              website that

              <br />

              drives results.

            </h1>

            <p
              className="
              text-2xl
              leading-10
              text-neutral-300
              max-w-xl
              mb-12
            "
            >

              From concept and strategy to design and implementation,
              Web365 Nigeria helps businesses build websites that
              increase visibility, generate leads and support growth.

            </p>

            <a
              href="#"
              className="
                inline-block
                border-b-2
                border-[#D9862B]
                text-[#D9862B]
                text-2xl
                font-bold
              "
            >

              Book a Free Consultation

            </a>

          </div>

          {/* VIDEO */}

          <div>

            <div className="
              relative
              overflow-hidden
              bg-neutral-900
              border
              border-neutral-800
              shadow-2xl
            ">

              <iframe
                className="w-full h-[760px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Youtube"
                allowFullScreen
              />

              <div
                className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
              "
              >

                <div
                  className="
                  w-28
                  h-28
                  rounded-full
                  bg-[#D9862B]
                  flex
                  items-center
                  justify-center
                  shadow-xl
                "
                >

                  <Play
                    size={42}
                    fill="white"
                    color="white"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}