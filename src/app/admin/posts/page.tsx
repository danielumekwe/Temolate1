export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function PostsPage() {

  const posts =
    await prisma.post.findMany({

      orderBy:{
        createdAt:"desc"
      }

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
        p-20
      ">

        <div className="
          flex
          justify-between
          mb-10
        ">

          <div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-[#D9862B]
              mb-4
            ">

              Content

            </p>

            <h1 className="
              text-5xl
              font-black
            ">

              Posts

            </h1>

          </div>

          <Link

            href="/admin/posts/new"

            className="
              bg-[#D9862B]
              text-black
              px-8
              py-4
              font-bold
            "
          >

            Add Post

          </Link>

        </div>

        <div className="
          bg-[#111]
          border
          border-neutral-800
          overflow-hidden
        ">

          <table className="
            w-full
          ">

            <thead>

              <tr className="
                border-b
                border-neutral-800
              ">

                <th className="
                  p-5
                  text-left
                ">
                  Image
                </th>

                <th className="
                  p-5
                  text-left
                ">
                  Title
                </th>

                <th className="
                  p-5
                  text-left
                ">
                  Category
                </th>

                <th className="
                  p-5
                  text-left
                ">
                  Status
                </th>

                <th className="
                  p-5
                  text-left
                ">
                  Views
                </th>

                <th className="
                  p-5
                  text-left
                ">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {

                posts.map((post)=>(

                  <tr

                    key={post.id}

                    className="
                      border-b
                      border-neutral-800
                    "
                  >

                    <td className="
                      p-5
                    ">

                      {

                        post.featuredImage ?

                        (

                          <img

                            src={
                              post.featuredImage
                            }

                            className="
                              w-20
                              h-20
                              object-cover
                            "
                          />

                        )

                        :

                        "-"

                      }

                    </td>

                    <td className="
                      p-5
                    ">

                      {post.title}

                    </td>

                    <td className="
                      p-5
                    ">

                      {

                        post.category ||

                        "General"

                      }

                    </td>

                    <td className="
                      p-5
                    ">

                      <span className="
                        bg-[#D9862B]
                        text-black
                        px-3
                        py-1
                      ">

                        {

                          post.status

                        }

                      </span>

                    </td>

                    <td className="
                      p-5
                    ">

                      {

                        post.views

                      }

                    </td>

                    <td className="
                      p-5
                      flex
                      gap-4
                    ">

                      <Link

                        href={

                          `/blog/${post.slug}`

                        }

                      >

                        View

                      </Link>

                      <Link

                        href={

`/admin/posts/edit/${post.id}`

                        }

                      >

                        Edit

                      </Link>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>

      </section>

    </main>

  );

}