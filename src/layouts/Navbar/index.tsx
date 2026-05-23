"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white border-b border-neutral-900 sticky top-0 left-0 right-0 z-50">
      <div className="w-full px-6 lg:px-16 py-6 flex items-center justify-between">
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

        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-widest">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-[#D9862B] transition">
              What We Do <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full mt-4 w-80 bg-[#111] border border-neutral-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link href="/website-design" className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black">
                Website Design
              </Link>

              <Link href="/ecommerce-website" className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black">
                Ecommerce Website
              </Link>

              <Link href="/seo" className="block px-6 py-5 hover:bg-[#D9862B] hover:text-black">
                SEO
              </Link>
            </div>
          </div>

          <Link href="/our-work">Our Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex bg-[#D9862B] text-black px-8 py-4 uppercase tracking-widest font-semibold hover:bg-white transition"
        >
          Request A Quote
        </Link>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-neutral-800">
          <Link href="/" className="block px-6 py-5 border-b border-neutral-800">
            Home
          </Link>

          <Link href="/about" className="block px-6 py-5 border-b border-neutral-800">
            About Us
          </Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between px-6 py-5 border-b border-neutral-800"
          >
            <span>What We Do</span>
            <ChevronDown
              size={18}
              className={`transition ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="bg-[#0d0d0d] border-b border-neutral-800">
              <Link href="/website-design" className="block px-10 py-4 text-neutral-300 border-b border-neutral-800">
                Website Design
              </Link>

              <Link href="/ecommerce-website" className="block px-10 py-4 text-neutral-300 border-b border-neutral-800">
                Ecommerce Website
              </Link>

              <Link href="/seo" className="block px-10 py-4 text-neutral-300">
                SEO
              </Link>
            </div>
          )}

          <Link href="/our-work" className="block px-6 py-5 border-b border-neutral-800">
            Our Work
          </Link>

          <Link href="/blog" className="block px-6 py-5 border-b border-neutral-800">
            Blog
          </Link>

          <Link href="/contact" className="block px-6 py-5 bg-[#D9862B] text-black font-bold">
            Request A Quote
          </Link>
        </div>
      )}
    </header>
  );
}