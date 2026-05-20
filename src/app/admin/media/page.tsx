export const dynamic = "force-dynamic";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { prisma } from "@/lib/prisma";

export default async function MediaPage() {
  const posts = await prisma.post.findMany({
    where: {
      featuredImage: {
        not: null,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="bg-black text-white min-h-screen">
      <AdminSidebar />

      <section className="ml-[280px] p-20">
        <p className="uppercase tracking-[0.3em] text-[#D9862B] mb-4">
          Media
        </p>

        <h1 className="text-5xl font-black mb-12">
          Media Library
        </h1>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#111] border border-neutral-800 overflow-hidden"
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-[220px] object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="font-bold mb-3">
                  {post.title}
                </h3>

                <p className="text-neutral-500 text-sm break-all">
                  {post.featuredImage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
