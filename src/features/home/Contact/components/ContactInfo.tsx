"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import { motion } from "framer-motion";

import { Card } from "@/components/ui";
import { contactConfig } from "@/config";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function ContactItem({
  icon,
  label,
  children,
}: ContactItemProps) {
  return (
    <motion.div

      initial={{
        opacity: 0,
        x: -60,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.7,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        x: 8,
      }}

      className="
        flex
        items-start
      "
    >

      <motion.div

        animate={{
          y: [0, -5, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}

        className="
          bg-white/10
          p-2
          rounded-sm
          mr-4
        "
      >

        {icon}

      </motion.div>

      <div>

        <div className="
          text-sm
          uppercase
          tracking-widest
          text-white/70
          mb-2
        ">

          {label}

        </div>

        {children}

      </div>

    </motion.div>
  );
}

export function ContactInfo() {

  const { info } = contactConfig;

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -10,
      }}
    >

      <Card className="h-full">

        <motion.h3

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            text-2xl
            font-bold
            mb-6
            text-white
          "
        >

          Contact Information

        </motion.h3>

        <div className="space-y-8">

          <ContactItem

            icon={
              <Mail className="
                w-5
                h-5
                text-[#D9862B]
              " />
            }

            label="Email"
          >

            <a
              href={`mailto:${info.email}`}

              className="
                text-white
                hover:text-[#D9862B]
                transition
              "
            >

              {info.email}

            </a>

          </ContactItem>

          <ContactItem

            icon={
              <Phone className="
                w-5
                h-5
                text-[#D9862B]
              " />
            }

            label="Phone"
          >

            <a
              href={`tel:${info.phone.replace(/\s/g, "")}`}

              className="
                text-white
                hover:text-[#D9862B]
                transition
              "
            >

              {info.phone}

            </a>

          </ContactItem>

          <ContactItem

            icon={
              <MapPin className="
                w-5
                h-5
                text-[#D9862B]
              " />
            }

            label="Address"
          >

            <address className="
              not-italic
              text-white/80
            ">

              {info.address.street}

              <br />

              {info.address.city}

              <br />

              {info.address.country}

            </address>

          </ContactItem>

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.4,
            }}
          >

            <div className="
              text-sm
              uppercase
              tracking-widest
              text-white/70
              mb-3
            ">

              Social

            </div>

            <div className="flex gap-4">

              {[
                Instagram,
                Twitter,
                Linkedin,
              ].map((Icon, index) => (

                <motion.a

                  key={index}

                  href="#"

                  whileHover={{
                    scale: 1.2,
                    y: -6,
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}

                  className="
                    bg-white/10
                    p-3
                    rounded-sm
                  "
                >

                  <Icon className="
                    w-5
                    h-5
                    text-[#D9862B]
                  " />

                </motion.a>

              ))}

            </div>

          </motion.div>

        </div>

      </Card>

    </motion.div>

  );
}