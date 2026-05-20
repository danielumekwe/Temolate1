"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-black text-white border-b border-neutral-900 sticky top-0 left-0 right-0 z-50">

      <div className="w-full px-10 lg:px-16 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Web365 Nigeria"
            width={220}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-widest">

          <Link
            href="/"
            className="hover:text-[#D9862B] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#D9862B] transition"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">

            <button className="flex items-center gap-2 hover:text-[#D9862B] transition">
              What We Do
              <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full mt-4 w-80 bg-[#111] border border-neutral-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

              <Link
                href="/website-design"
                className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black transition"
              >
                Website Design
              </Link>

              <Link
                href="/ecommerce-website"
                className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black transition"
              >
                Ecommerce Website
              </Link>

              <Link
                href="/seo"
                className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black transition"
              >
                Search Engine Optimization
              </Link>

            </div>

          </div>

          <Link
            href="/our-work"
            className="hover:text-[#D9862B] transition"
          >
            Our Work
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#D9862B] transition"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#D9862B] transition"
          >
            Contact Us
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center bg-[#D9862B] text-black px-8 py-4 uppercase tracking-widest font-semibold hover:bg-white transition"
        >
          Request a Quote
        </Link>

      </div>

    </header>
  );
}