"use client";

import FadeUp from "@/components/animations/FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-32 border-t border-neutral-900">

      <div className="max-w-7xl mx-auto px-10">

        {/* TITLE */}

        <FadeUp>

          <h2 className="
            text-6xl
            font-black
            mb-20
            leading-tight
          ">

            Tap into the potential of

            <span className="text-[#D9862B]">
              {" "}strategic{" "}
            </span>

            website design.

          </h2>

        </FadeUp>

        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <FadeUp delay={0.15}>

            <div className="
              pr-16
              border-r
              border-neutral-800
            ">

              <div className="
                uppercase
                tracking-[0.25em]
                text-neutral-500
                mb-5
              ">

                LET'S TALK ABOUT YOUR GOALS

              </div>

              <h3 className="
                text-4xl
                mb-8
              ">

                Schedule time to talk

              </h3>

              <p className="
                text-neutral-300
                text-xl
                leading-10
                mb-10
              ">

                Speak to our experts and discover how Web365
                can help your business grow online through
                websites, SEO and digital solutions.

              </p>

              <button className="
                bg-[#D9862B]
                px-10
                py-5
                uppercase
                font-semibold
              ">

                BOOK 30 MINUTES

              </button>

              <p className="
                mt-10
                text-neutral-500
              ">

                Need help now? Call us on +234 8142746695

              </p>

            </div>

          </FadeUp>

          {/* RIGHT */}

          <FadeUp delay={0.3}>

            <div className="pl-16">

              <div className="
                uppercase
                tracking-[0.25em]
                text-neutral-500
                mb-5
              ">

                LIMITED TIME OFFER

              </div>

              <h3 className="
                text-4xl
                mb-8
              ">

                Get a FREE Strategy Session

              </h3>

              <p className="
                text-neutral-300
                text-xl
                leading-10
                mb-10
              ">

                We will review your business goals,
                current online presence and recommend
                growth strategies.

              </p>

              <button className="
                bg-[#D9862B]
                px-10
                py-5
                uppercase
                font-semibold
              ">

                GET STARTED

              </button>

              <p className="
                mt-10
                text-neutral-500
              ">

                Send enquiries to info@web365ng.com

              </p>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  );
}