import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, slug and content are required.",
        },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt || "",
        content: body.content,
        category: body.category || "",
        tags: body.tags || "",
        featuredImage: body.featuredImage || "",
        image: body.featuredImage || "",
        status: body.status || "published",
      },
    });

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error: any) {
    console.error("POST CREATE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Post could not be saved.",
      },
      { status: 500 }
    );
  }
}