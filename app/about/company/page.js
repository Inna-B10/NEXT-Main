import { Example } from "@/app/components/Example";
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Company page</h1>
      <Example/>
    </main>
  );
}
