"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { useState } from "react";
import dynamic from "next/dynamic";

import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
  }
);

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [loading, setLoading] = useState(false);

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.url) {
      setFeaturedImage(data.url);
    } else {
      alert("Image upload failed");
    }
  }

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !slug || !content) {
      alert("Title, slug and content are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          category,
          tags,
          featuredImage,
          status: "published",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || "Post failed to save.");
        return;
      }

      alert("Post Published");

      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setCategory("");
      setTags("");
      setFeaturedImage("");
    } catch (error) {
      alert("Something went wrong while saving.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <AdminSidebar />

      <section className="ml-[280px] p-20">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-5">
            Blog CMS
          </p>

          <h1 className="text-5xl font-black mb-12">
            Create Blog Post
          </h1>

          <form onSubmit={submitPost} className="space-y-8">
            <input
              placeholder="Post Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSlug(generateSlug(e.target.value));
              }}
              className="w-full p-5 bg-[#111] border border-neutral-800"
            />

            <input
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-5 bg-[#111] border border-neutral-800"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-5 bg-[#111] border border-neutral-800"
              />

              <input
                placeholder="Tags e.g SEO, Hosting, Web Design"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full p-5 bg-[#111] border border-neutral-800"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Post Excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full p-5 bg-[#111] border border-neutral-800"
            />

            <div>
              <h3 className="text-[#D9862B] mb-4">
                Featured Image
              </h3>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    uploadImage(e.target.files[0]);
                  }
                }}
                className="w-full p-5 bg-[#111] border border-neutral-800"
              />

              {featuredImage && (
                <img
                  src={featuredImage}
                  alt="Featured image preview"
                  className="mt-8 w-full h-[350px] object-cover border border-neutral-800"
                />
              )}
            </div>

            <div className="bg-white text-black relative z-10">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D9862B] text-black px-10 py-5 font-bold disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Post"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}