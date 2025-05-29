import Image from "next/image";
import Link from "next/link";

export default async function DynamicPageWithApiFetch({
  endpoint,
  param,
  value,
}) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000/";
  console.log(baseUrl);
  const data = await fetch(`${baseUrl}/api/${endpoint}`, {
    cache: "no-store",
  });

  const products = await data.json();
  const product = products[param[value]];

  if (!product) {
    return (
      <>
        <h1>product not found</h1>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          <Link href="/">Back</Link>
        </button>
      </>
    );
  }
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <h1 className="text-6xl">{product.title}</h1>
        <p>Category: {product.category}</p>
        <div className="max-w-[350px] h-[400px]">
          <Image
            alt={`image of ${product.name}`}
            src={product.image}
            width={1700}
            height={600}
            className="object-cover w-full h-full transition hover:blur-none blur-sm"
          />
        </div>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Stock: {product.stock}</p>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          <Link href="/">Back</Link>
        </button>
      </main>
    </>
  );
}
