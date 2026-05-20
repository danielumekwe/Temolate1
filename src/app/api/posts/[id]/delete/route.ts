import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });

  redirect("/admin/posts");
}
