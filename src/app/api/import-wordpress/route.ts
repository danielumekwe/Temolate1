import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

function cleanHtml(value: string) {
  return value || "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.url) {
      return NextResponse.json({
        success: false,
        message: "WordPress API URL is required.",
      });
    }

    const res = await fetch(`${body.url}?_embed&per_page=20`);

    if (!res.ok) {
      return NextResponse.json({
        success: false,
        message: "Could not fetch WordPress posts.",
      });
    }

    const wpPosts = await res.json();

    let imported = 0;
    let skipped = 0;

    for (const wp of wpPosts) {
      const title = wp.title?.rendered || "Untitled Post";
      const slug = wp.slug;
      const excerpt = cleanHtml(wp.excerpt?.rendered || "");
      const content = cleanHtml(wp.content?.rendered || "");

      const featuredImage =
        wp._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

      const exists = await prisma.post.findUnique({
        where: { slug },
      });

      if (exists) {
        skipped++;
        continue;
      }

      await prisma.post.create({
        data: {
          title,
          slug,
          excerpt,
          content,
          featuredImage,
          image: featuredImage,
          status: "published",
          category: "Imported",
          tags: "wordpress, imported",
          author: "Web365",
        },
      });

      imported++;
    }

    return NextResponse.json({
      success: true,
      message: `Import completed. Imported: ${imported}, Skipped: ${skipped}`,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Import failed.",
    });
  }
}
