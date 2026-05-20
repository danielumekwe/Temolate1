"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 border-t border-neutral-900">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-4 gap-16">

          {/* LEFT */}

          <div>

            <img
              src="/logo-white.png"
              alt="Web365 Nigeria"
              className="h-12 mb-10"
            />

            <p className="text-neutral-400 text-lg leading-10 mb-10">
              Web365 Nigeria is a Lagos-based website design and digital
              solutions company helping businesses grow through websites,
              ecommerce, SEO, hosting and technology solutions.
            </p>

            <p className="text-xl mb-10 text-white">
              Phone:  +234 814-274-6695
            </p>

            <button className="bg-[#D9862B] text-black px-10 py-5 font-bold uppercase hover:bg-white transition">

              REQUEST A QUOTE

            </button>

          </div>

          {/* COMPANY */}

          <div>

            <h3 className="text-3xl font-black mb-10 uppercase">
              Company
            </h3>

            <ul className="space-y-7 text-neutral-400 text-lg">

              <li>
                <Link href="/our-work">Our Work</Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/careers">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-3xl font-black mb-10 uppercase">
              Services
            </h3>

            <ul className="space-y-7 text-neutral-400 text-lg">

              <li>
                <Link href="/branding">
                  Branding
                </Link>
              </li>

              <li>
                <Link href="/website-design">
                  Website Design
                </Link>
              </li>

              <li className="text-[#D9862B]">
                <Link href="/seo">
                  Search Engine Optimization
                </Link>
              </li>

              <li>
                <Link href="/ecommerce">
                  E-Commerce
                </Link>
              </li>

            </ul>

          </div>

          {/* BLOG */}

          <div>

            <h3 className="text-3xl font-black mb-10 uppercase">
              Latest Blog Posts
            </h3>

            <ul className="space-y-7 text-neutral-400 text-lg">

              <li>
                Why Your Business Needs A Strong Brand Identity
              </li>

              <li>
                How To Build An Ecommerce Store That Converts
              </li>

              <li>
                SEO Strategies Nigerian Businesses Should Use
              </li>

              <li className="text-[#D9862B]">
                Tips To Grow Your Business Online Faster
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-neutral-800 mt-20 py-10">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div className="flex gap-6 text-neutral-500">

              <span>
                © Copyright 2026 Web365 Nigeria
              </span>

              <Link href="/privacy">
                Privacy Policy
              </Link>

            </div>

            <div className="flex gap-8 text-white">

              <Facebook className="hover:text-[#D9862B]" />

              <Instagram className="hover:text-[#D9862B]" />

              <Twitter className="hover:text-[#D9862B]" />

              <Linkedin className="hover:text-[#D9862B]" />

              <Youtube className="hover:text-[#D9862B]" />

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}