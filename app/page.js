import Image from "next/image";
import { ProductCards } from "./components/ProductCards";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div>
 <ProductCards/>
</div>
    </main>
  );
}
