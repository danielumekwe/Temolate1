"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function ClientWins() {
  const projects = [
    {
      title: "Anglican AIM",
      image: "/projects/anglican.png",
    },
    {
      title: "Runis Fashion",
      image: "/projects/runis.png",
    },
    {
      title: "Labanba Properties",
      image: "/projects/labanba.png",
    },
    {
      title: "Blackezer Foundation",
      image: "/projects/blackezer.png",
    },
  ];

  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-7xl mx-auto px-10">

        {/* TITLE */}

        <FadeUp>

          <h2 className="
            text-5xl
            lg:text-6xl
            font-black
            text-center
            leading-tight
            mb-20
          ">

            Seeing our clients

            <span className="text-[#D9862B]">
              {" "}win
            </span>

            {" "}is what gets us excited.

          </h2>

        </FadeUp>

        {/* PROJECTS */}

        <div className="grid md:grid-cols-2 gap-14">

          {projects.map((project, index) => (

            <FadeUp
              key={index}
              delay={index * 0.15}
            >

              <div>

                <h3 className="
                  text-lg
                  mb-5
                  text-neutral-300
                ">

                  {project.title}

                </h3>

                <div className="
                  bg-neutral-900
                  border
                  border-neutral-800
                  overflow-hidden
                ">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="
                      w-full
                      h-[360px]
                      object-cover
                      grayscale
                      hover:grayscale-0
                      transition
                      duration-700
                    "
                  />

                </div>

              </div>

            </FadeUp>

          ))}

        </div>

        {/* BUTTON */}

        <FadeUp delay={0.4}>

          <div className="text-center mt-20">

            <a
              href="#"
              className="
                text-3xl
                font-black
                text-[#D9862B]
                underline
              "
            >

              See more of our work

            </a>

          </div>

        </FadeUp>

      </div>

    </section>
  );
}