"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
  }
);

export default function EditPostForm({
  post,
}: {
  post: any;
}) {

  const [title,setTitle]=
  useState(
    post.title
  );

  const [slug,setSlug]=
  useState(
    post.slug
  );

  const [excerpt,setExcerpt]=
  useState(
    post.excerpt || ""
  );

  const [content,setContent]=
  useState(
    post.content
  );

  const [category,setCategory]=
  useState(
    post.category || ""
  );

  const [tags,setTags]=
  useState(
    post.tags || ""
  );

  const [featuredImage,
  setFeaturedImage]=
  useState(
    post.featuredImage || ""
  );

  async function uploadImage(
    file:File
  ){

    const formData=
    new FormData();

    formData.append(
      "file",
      file
    );

    const res=
    await fetch(
      "/api/upload",
      {
        method:"POST",
        body:formData
      }
    );

    const data=
    await res.json();

    setFeaturedImage(
      data.url
    );

  }

  async function updatePost(
    e:React.FormEvent
  ){

    e.preventDefault();

    await fetch(

      `/api/posts/${post.id}/edit`,

      {

        method:"POST",

        headers:{
          "Content-Type":
          "application/json"
        },

        body:JSON.stringify({

          title,

          slug,

          excerpt,

          content,

          category,

          tags,

          featuredImage

        })

      }

    );

    alert(
      "Updated"
    );

  }

  return(

    <main className="
      bg-black
      text-white
      min-h-screen
      p-20
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        <h1 className="
          text-5xl
          font-black
          mb-10
        ">

          Edit Post

        </h1>

        <form

          onSubmit={
            updatePost
          }

          className="
            space-y-8
          "
        >

          <input

            value={title}

            onChange={(e)=>

              setTitle(
                e.target.value
              )

            }

            className="
              w-full
              p-5
              bg-[#111]
              border
              border-neutral-800
            "
          />

          <input

            value={slug}

            onChange={(e)=>

              setSlug(
                e.target.value
              )

            }

            className="
              w-full
              p-5
              bg-[#111]
              border
              border-neutral-800
            "
          />

          <div className="
            grid
            md:grid-cols-2
            gap-6
          ">

            <input

              value={category}

              onChange={(e)=>

                setCategory(
                  e.target.value
                )

              }

              className="
                w-full
                p-5
                bg-[#111]
                border
                border-neutral-800
              "
            />

            <input

              value={tags}

              onChange={(e)=>

                setTags(
                  e.target.value
                )

              }

              className="
                w-full
                p-5
                bg-[#111]
                border
                border-neutral-800
              "
            />

          </div>

          <textarea

            rows={4}

            value={excerpt}

            onChange={(e)=>

              setExcerpt(
                e.target.value
              )

            }

            className="
              w-full
              p-5
              bg-[#111]
              border
              border-neutral-800
            "
          />

          <input

            type="file"

            onChange={(e)=>{

              if(
                e.target.files?.[0]
              ){

                uploadImage(
                  e.target.files[0]
                );

              }

            }}

            className="
              w-full
              p-5
              bg-[#111]
            "
          />

          {

            featuredImage && (

              <img

                src={
                  featuredImage
                }

                className="
                  w-full
                  h-[300px]
                  object-cover
                "
              />

            )

          }

          <div className="
            bg-white
            text-black
          ">

            <ReactQuill

              theme="snow"

              value={content}

              onChange={
                setContent
              }

            />

          </div>

          <button

            className="
              bg-[#D9862B]
              text-black
              px-8
              py-5
              font-bold
            "
          >

            Update Post

          </button>

        </form>

      </div>

    </main>

  );

}
