import ItemList from "@/app/components/molecule/ItemList";

export async function AboutPageItems() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000/";
  const data = await fetch(`${baseUrl}/api/mongodb`, {
    cache: "no-cache",
    method: "GET",
  });

  // console.log(data);
  const items = await data.json();

  console.log(items);
  return (
    <>
      <h1>This is about Sparta!</h1>
      <p>This is the about page</p>
      <ItemList initialItems={items} />
    </>
  );
}
