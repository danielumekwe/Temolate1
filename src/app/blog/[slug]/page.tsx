import { prisma } from "@/lib/prisma";
import { Navbar, Footer } from "@/layouts";
import { NoiseBackground } from "@/components";

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) {
    return (
      <main className="bg-black text-white min-h-screen p-20">
        Post not found
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <NoiseBackground />
      <Navbar />

      <article className="py-32">

        <div className="max-w-4xl mx-auto px-10">

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="
                w-full
                h-[500px]
                object-cover
                mb-12
              "
            />
          )}

          <h1 className="
            text-5xl
            lg:text-7xl
            font-black
            mb-10
          ">
            {post.title}
          </h1>

          <div
            className="
              text-neutral-300
              text-xl
              leading-10
            "
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />

        </div>

      </article>

      <Footer />

    </main>
  );
}
