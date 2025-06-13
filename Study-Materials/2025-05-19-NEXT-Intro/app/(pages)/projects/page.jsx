import { PageHeaderText } from "@/base/text/PageHeaderText";
import { FancySection } from "./components/FancySection";
import { client } from "@/app/lib/sanity";
import Image from "next/image";

export default async function AboutPage() {
  const posts = await client.fetch(
    `*[_type == "post"]{
  title,
  slug,
  image {
  asset-> {
  url
  },
  },
    _id,
    body
  }`,
    {
      cache: "no-store",
    }
  );

  console.log(posts);

  return (
    <>
      <section>
        <PageHeaderText>This is the about page...SPARTA!</PageHeaderText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit
          veritatis, iusto voluptas nulla asperiores eligendi alias vitae
          possimus! Quod facilis ducimus accusamus dolore cumque, iste possimus
          sapiente recusandae laboriosam.
        </p>
      </section>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>slug: {post.slug.current}</p>
            <Image
              src={post.image.asset.url}
              alt={post.title}
              height={800}
              width={800}
            />
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <FancySection />
    </>
  );
}
