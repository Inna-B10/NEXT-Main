import ItemList from "@/app/components/molecule/ItemList";

import { AboutPageItems } from "./AboutContent";

export default async function AboutPage() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000/";
  console.log(baseUrl);

  const data = await fetch(`${baseUrl}/api/mongodb`, {
    method: "GET",
    cache: "no-store",
  });

  // console.log(data);
  const items = await data.json();

  console.log(items);
  return (
    <>
      <h1>This is about Sparta!</h1>
      <p>This is the about page</p>
      <ItemList initialItems={items} />
      <AboutPageItems />
    </>
  );
}
