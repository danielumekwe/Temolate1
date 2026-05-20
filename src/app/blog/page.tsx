import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="bg-black text-white min-h-screen">
      <NoiseBackground />
      <Navbar />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-10">
          <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-6">
            Blog
          </p>

          <h1 className="text-6xl lg:text-8xl font-black mb-20">
            Latest Articles
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-[#111] border border-neutral-800 hover:border-[#D9862B] transition"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[260px] object-cover"
                  />
                )}

                <div className="p-8">
                  <h2 className="text-2xl font-black mb-5">
                    {post.title}
                  </h2>

                  <p className="text-neutral-400 leading-8">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
