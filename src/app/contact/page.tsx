"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";

export default function ContactPage() {
  return (
    <>
      <NoiseBackground />

      <Navbar />

      <main className="bg-black text-white overflow-hidden">

        {/* HERO */}

        <section className="py-32 border-b border-neutral-900">

          <div className="max-w-7xl mx-auto px-8">

            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                uppercase
                tracking-[0.3em]
                text-[#D9862B]
                mb-6
              "
            >
              Contact Web365 Nigeria
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 90,
                scale: 0.95,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              transition={{
                duration: 0.9,
              }}

              viewport={{
                once: true,
              }}

              className="
                text-6xl
                lg:text-8xl
                font-black
                leading-tight
                max-w-5xl
              "
            >

              Let’s Build Something

              <span className="text-[#D9862B]">
                {" "}Great Together.
              </span>

            </motion.h1>

            <motion.p

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: 0.15,
              }}

              viewport={{
                once: true,
              }}

              className="
                text-neutral-400
                text-xl
                mt-10
                max-w-3xl
                leading-9
              "
            >

              Need a website, ecommerce store, SEO campaign,
              hosting infrastructure or digital solution?
              Let’s discuss your project.

            </motion.p>

          </div>

        </section>

        {/* CONTACT */}

        <section className="py-28">

          <div className="max-w-7xl mx-auto px-8">

            <div className="grid lg:grid-cols-2 gap-20">

              {/* LEFT */}

              <motion.div

                initial={{
                  opacity: 0,
                  x: -100,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 0.9,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -10,
                }}
              >

                <div className="
                  bg-[#111]
                  border
                  border-neutral-800
                  p-12
                ">

                  <h2 className="
                    text-4xl
                    font-black
                    mb-10
                  ">

                    Contact Information

                  </h2>

                  <div className="space-y-10">

                    {[
                      {
                        title:"Phone",
                        value:"+234 8142746695"
                      },

                      {
                        title:"Email",
                        value:"info@web365ng.com"
                      }

                    ].map((item,index)=>(

                      <motion.div

                        key={index}

                        initial={{
                          opacity:0,
                          x:-50
                        }}

                        whileInView={{
                          opacity:1,
                          x:0
                        }}

                        transition={{
                          delay:index*0.15
                        }}

                        viewport={{
                          once:true
                        }}
                      >

                        <p className="
                          text-[#D9862B]
                          uppercase
                          mb-3
                        ">

                          {item.title}

                        </p>

                        <p className="text-2xl">

                          {item.value}

                        </p>

                      </motion.div>

                    ))}

                    <motion.div

                      initial={{
                        opacity:0,
                        x:-50
                      }}

                      whileInView={{
                        opacity:1,
                        x:0
                      }}

                      transition={{
                        delay:0.3
                      }}

                      viewport={{
                        once:true
                      }}
                    >

                      <p className="
                        text-[#D9862B]
                        uppercase
                        mb-3
                      ">

                        Services

                      </p>

                      <ul className="
                        text-neutral-400
                        space-y-4
                      ">

                        {[
                          "Website Design",
                          "Ecommerce Development",
                          "SEO Services",
                          "Web Hosting",
                          "Digital Marketing"
                        ].map((service,index)=>(

                          <motion.li

                            key={service}

                            whileHover={{
                              x:10,
                              color:"#D9862B"
                            }}

                            transition={{
                              duration:0.2
                            }}
                          >

                            {service}

                          </motion.li>

                        ))}

                      </ul>

                    </motion.div>

                  </div>

                </div>

              </motion.div>

              {/* FORM */}

              <motion.div

                initial={{
                  opacity:0,
                  x:100,
                  scale:0.95
                }}

                whileInView={{
                  opacity:1,
                  x:0,
                  scale:1
                }}

                transition={{
                  duration:0.9
                }}

                viewport={{
                  once:true
                }}
              >

                <div className="
                  bg-[#111]
                  border
                  border-neutral-800
                  p-12
                ">

                  <h2 className="
                    text-4xl
                    font-black
                    mb-10
                  ">

                    Send A Message

                  </h2>

                  <form className="space-y-8">

                    {[
                      "Your Name",
                      "Email Address",
                      "Phone Number"
                    ].map((item,index)=>(

                      <motion.input

                        key={item}

                        initial={{
                          opacity:0,
                          y:40
                        }}

                        whileInView={{
                          opacity:1,
                          y:0
                        }}

                        transition={{
                          delay:index*0.1
                        }}

                        viewport={{
                          once:true
                        }}

                        whileFocus={{
                          scale:1.02
                        }}

                        placeholder={item}

                        className="
                          w-full
                          bg-black
                          border
                          border-neutral-700
                          px-6
                          py-5
                        "
                      />

                    ))}

                    <select className="
                      w-full
                      bg-black
                      border
                      border-neutral-700
                      px-6
                      py-5
                    ">

                      <option>Select Service</option>
                      <option>Website Design</option>
                      <option>Ecommerce</option>
                      <option>SEO</option>
                      <option>Hosting</option>

                    </select>

                    <textarea

                      rows={6}

                      placeholder="
                      Tell us about your project...
                      "

                      className="
                        w-full
                        bg-black
                        border
                        border-neutral-700
                        px-6
                        py-5
                      "
                    />

                    <motion.button

                      whileHover={{
                        scale:1.05,
                        y:-4
                      }}

                      whileTap={{
                        scale:0.95
                      }}

                      className="
                        bg-[#D9862B]
                        text-black
                        font-bold
                        px-10
                        py-5
                      "
                    >

                      SEND MESSAGE

                    </motion.button>

                  </form>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}