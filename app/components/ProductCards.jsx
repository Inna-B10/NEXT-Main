"use client";

import Image from "next/image";
//importing in the data we are using to create the cards (also used for generating the dynamic routes):
import { productData } from "../data/products";

// importing in the router. We use next/navigation to navigate between pages. next/router wont work here.
// import { useRouter } from "next/router"; this will not work!
import { useRouter } from "next/navigation";


export const ProductCards = () => {
  // rename useRouter() to router for easier use:
  const router = useRouter();

  // function to handle the click on the product. This function is passed as a prop to the button in the card. router.push is used to navigate between pages.
  const handleProductClick = (product) => {
    router.push(`/products/${product}`);
    // console.log(product);
  };
  
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* map through the products. Since we have an object we use Object.keys to get the keys, then we use .map to loop through the keys */}
        {Object.keys(productData).map((product) => {
          // we need this const to get the whole object:
          const productInfo = productData[product];
          return (
            <button
              onClick={() => handleProductClick(product)}
            // onClick={() => console.log(product, productInfo)}
              key={productInfo.name + product}
              className="w-[350px] h-[300px] p-8 relative group"
            >
              <div className="absolute z-10 transition-opacity translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 right-1/2 group-hover:opacity-100">
                <p className="p-2 text-3xl font-bold text-center bg-opacity-50 rounded-lg select-none bg-slate-600">
                  {productInfo.name}
                </p>
              </div>
              <Image
                alt=""
                src={productInfo.image}
                width={600}
                height={600}
                className="object-cover w-full h-full transition-all group-hover:blur-sm"
              />
            </button>
          );
        })}
      </div>
    </>
  );
};