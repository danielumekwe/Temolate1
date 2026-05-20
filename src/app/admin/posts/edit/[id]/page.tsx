import { prisma } from "@/lib/prisma";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return (
      <main className="bg-black text-white min-h-screen p-20">
        Post not found
      </main>
    );
  }

  return <EditPostForm post={post} />;
}
