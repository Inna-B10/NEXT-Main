import productData from "@/app/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const getParam = await params;
  const param = await getParam.product;
  console.log(param);
  const product = productData.products[param - 1];

  if (!product) {
    return (
      <>
        <h1>product not found</h1>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          <Link href="/">Back</Link>
        </button>
      </>
    );
  } else {
    return (
      <>
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
          <h1 className="text-6xl">{product.name}</h1>
          <p>Brand: {product.brand}</p>
          <div className="relative max-w-[350px] h-[400px]">
            <Image
              alt={`image of ${product.name}`}
              src={product.image}
              width={150}
              height={200}
              // fill={true}
              // layout="insintric"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
}
