import Image from "next/image";
//importing in the data we are using for generating the dynamic routes:
import { productData } from "../../data/products";
import Link from "next/link";


// initialize the page component. important to put {params} in the function. This will look at the current url and get the params. Ex: http://localhost:3000/products/laptop (param is laptop)
export default function Page({ params }) {
    // console.log(params.products)
    // get the whole product with with const:
    const product = productData[params.products];
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <h1 className="text-6xl">{product.name}</h1>
            <p>Brand: {product.brand}</p>
            <div className="max-w-[350px] h-[400px]">
                <Image
                    alt=""
                    src={product.image}
                    width={1700}
                    height={600}
                    className="object-cover w-full h-full transition-all group-hover:blur-sm"
                />
            </div>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <Link href="/">Back</Link>
            </button>
        </main>
    );
}


// generateStaticparams: this will generate the dynamic routes for the page.
export async function generateStaticParams() {
    const paths = Object.keys(productData).map((product) => ({
        product
    }))
    console.log(paths.map((path) => path.product))
    return paths.map((path) => ({ products: path.product }))
}