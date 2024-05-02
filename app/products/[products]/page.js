import Image from "next/image";
import { productData } from "../../data/producters";


export default function Page({params}) {
console.log(params.products)
    const product = productData[params.products];
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <Image
                alt=""
                src={product.image}
                width={600}
                height={600}
                className="object-cover h-full w-full group-hover:blur-sm transition-all"
            />
        </div>
    );
}

export async function generateStaticParams() {
    const paths = Object.keys(productData).map((product) => ({
        product
    }))
console.log(paths.map((path) => path.product))
    return paths.map((path) => ({products: path.product}))
}