import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const post = await prisma.post.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      tags: body.tags,
      featuredImage: body.featuredImage,
      image: body.featuredImage,
    },
  });

  return NextResponse.json(post);
}
