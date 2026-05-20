import type React from "react";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/providers";
import { FloatingCursor } from "@/components";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web365 Nigeria | Website Design, Ecommerce & SEO Company",

  description:
    "Web365 Nigeria provides website design, ecommerce development, SEO, hosting and digital solutions for businesses.",

  generator: "Web365 Nigeria",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },

      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "Web365 Nigeria | Website Design Company",

    description:
      "Professional website design, ecommerce development and SEO services in Nigeria.",

    url: "https://web365ng.com",

    siteName: "Web365 Nigeria",

    images: [
      {
        url: "/image.png",

        width: 1200,

        height: 630,

        alt: "Web365 Nigeria",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Web365 Nigeria | Website Design Company",

    description:
      "Website Design, Ecommerce Development and SEO Services.",

    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >

      <body
        className={`
          ${inter.className}
          bg-black
          text-white
          mx-auto
          max-w-[1440px]
          overflow-x-hidden
        `}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >

          {children}

        </ThemeProvider>

        <FloatingCursor />

      </body>

    </html>

  );
}