"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
export const dynamic = "force-dynamic";

export default function ImportPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function importPosts() {
    setLoading(true);

    const res = await fetch("/api/import-wordpress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();

    alert(data.message);

    setLoading(false);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <AdminSidebar />

      <section className="ml-[280px] p-20">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-5">
            Migration Tool
          </p>

          <h1 className="text-5xl font-black mb-10">
            Import WordPress Posts
          </h1>

          <p className="text-neutral-400 leading-8 mb-8">
            Paste your WordPress REST API posts URL. Imported posts will be
            saved into your Web365 CMS blog.
          </p>

          <input
            placeholder="https://yourdomain.com/wp-json/wp/v2/posts"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-5 bg-[#111] border border-neutral-800 mb-8"
          />

          <button
            onClick={importPosts}
            disabled={loading}
            className="bg-[#D9862B] text-black px-8 py-5 font-bold disabled:opacity-60"
          >
            {loading ? "Importing..." : "Import Posts"}
          </button>
        </div>
      </section>
    </main>
  );
}