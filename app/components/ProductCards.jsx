"use client";

import Image from "next/image";
import { productData } from "../data/producters";

import { useRouter } from "next/navigation";

export const ProductCards = () => {
  const router = useRouter();
//   console.log(productData);
//   console.log(Object.keys(productData));
//   console.log(productData[Object.keys(productData)[0]]);

  const handleProductClick = (product) => {
    router.push(`/products/${product}`);
    console.log(product);
  };
  
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {Object.keys(productData).map((product) => {
          const productInfo = productData[product];
          return (
            <button
              onClick={() => handleProductClick(product)}
            // onClick={() => console.log(product, productInfo)}
              key={productInfo.name + product}
              className="w-[350px] h-[300px] p-8 relative group"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-3xl select-none font-bold text-center p-2 bg-slate-600 rounded-lg bg-opacity-50">
                  {productInfo.name}
                </p>
              </div>
              <Image
                alt=""
                src={productInfo.image}
                width={600}
                height={600}
                className="object-cover h-full w-full group-hover:blur-sm transition-all"
              />
            </button>
          );
        })}
      </div>
    </>
  );
};