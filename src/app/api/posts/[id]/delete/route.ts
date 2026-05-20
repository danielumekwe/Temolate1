import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  redirect("/admin/posts");
}
