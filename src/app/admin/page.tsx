export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminPage() {

  const totalPosts =
    await prisma.post.count();

  const published =
    await prisma.post.count({

      where:{
        status:"published"
      }

    });

  const drafts =
    await prisma.post.count({

      where:{
        status:"draft"
      }

    });

  const featured =
    await prisma.post.count({

      where:{
        featured:true
      }

    });

  const posts =
    await prisma.post.findMany({

      orderBy:{
        createdAt:"desc"
      },

      take:5

    });

  return(

    <main className="
      bg-black
      text-white
      min-h-screen
    ">

      <AdminSidebar/>

      <section className="
        ml-[280px]
        p-12
      ">

        <div className="
          flex
          justify-between
          items-center
          mb-14
        ">

          <div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#D9862B]
              mb-4
            ">

              Web365 CMS

            </p>

            <h1 className="
              text-6xl
              font-black
            ">

              Dashboard

            </h1>

          </div>

          <Link

            href="
            /admin/posts/new
            "

            className="
              bg-[#D9862B]
              text-black
              px-8
              py-4
              font-bold
            "
          >

            Add New Post

          </Link>

        </div>

        <div className="
          grid
          md:grid-cols-4
          gap-6
          mb-12
        ">

          {[

            {
              title:"Posts",
              value:totalPosts
            },

            {
              title:"Published",
              value:published
            },

            {
              title:"Drafts",
              value:drafts
            },

            {
              title:"Featured",
              value:featured
            }

          ].map((card)=>(

            <div

              key={card.title}

              className="
                bg-[#111]
                border
                border-neutral-800
                p-8
              "
            >

              <p className="
                text-neutral-400
              ">

                {card.title}

              </p>

              <h2 className="
                text-5xl
                font-black
                text-[#D9862B]
                mt-4
              ">

                {card.value}

              </h2>

            </div>

          ))}

        </div>

        <div className="
          grid
          lg:grid-cols-2
          gap-8
        ">

          <div className="
            bg-[#111]
            border
            border-neutral-800
            p-8
          ">

            <h2 className="
              text-3xl
              font-black
              mb-8
            ">

              Recent Posts

            </h2>

            <div className="
              space-y-6
            ">

              {

                posts.map(
                  (post)=>(

                  <div

                    key={
                      post.id
                    }

                    className="
                      border-b
                      border-neutral-800
                      pb-5
                    "
                  >

                    <h3 className="
                      text-xl
                      font-bold
                    ">

                      {
                        post.title
                      }

                    </h3>

                    <p className="
                      text-neutral-400
                    ">

                      {
                        post.category
                      }

                    </p>

                  </div>

                ))

              }

            </div>

          </div>

          <div className="
            bg-[#111]
            border
            border-neutral-800
            p-8
          ">

            <h2 className="
              text-3xl
              font-black
              mb-8
            ">

              Quick Actions

            </h2>

            <div className="
              grid
              gap-4
            ">

              <Link

                href="
                /admin/posts/new
                "

                className="
                  bg-[#D9862B]
                  text-black
                  p-5
                  font-bold
                "
              >

                Create Article

              </Link>

              <Link

                href="
                /admin/posts
                "

                className="
                  bg-black
                  border
                  border-neutral-800
                  p-5
                "
              >

                Manage Posts

              </Link>

              <Link

                href="
                /admin/import
                "

                className="
                  bg-black
                  border
                  border-neutral-800
                  p-5
                "
              >

                Import WordPress

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}