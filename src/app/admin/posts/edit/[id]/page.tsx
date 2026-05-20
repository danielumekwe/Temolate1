import { prisma } from "@/lib/prisma";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
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
