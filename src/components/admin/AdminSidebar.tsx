import Link from "next/link";

export default function AdminSidebar() {

  return(

    <aside className="
      w-[280px]
      bg-[#0d0d0d]
      border-r
      border-neutral-800
      min-h-screen
      p-8
      fixed
      left-0
      top-0
    ">

      <h1 className="
        text-3xl
        font-black
        text-[#D9862B]
        mb-14
      ">

        WEB365 CMS

      </h1>

      <div className="
        space-y-4
      ">

        <Link
          href="/admin"
          className="
            block
            p-4
            bg-[#111]
          "
        >
          Dashboard
        </Link>

        <Link
          href="/admin/posts"
          className="
            block
            p-4
            bg-[#111]
          "
        >
          Posts
        </Link>

        <Link
          href="/admin/posts/new"
          className="
            block
            p-4
            bg-[#111]
          "
        >
          Add Post
        </Link>

        <Link
          href="/admin/categories"
          className="
            block
            p-4
            bg-[#111]
          "
        >
          Categories
        </Link>

        <Link
          href="/admin/media"
          className="
            block
            p-4
            bg-[#111]
          "
        >
          Media Library
        </Link>

        <Link
          href="/admin/import"
          className="
            block
            p-4
            bg-[#D9862B]
            text-black
            font-bold
          "
        >
          Import WordPress
        </Link>

      </div>

    </aside>

  );

}
