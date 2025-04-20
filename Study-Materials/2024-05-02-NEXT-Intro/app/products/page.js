import Image from "next/image";
import { Example } from "../components/Example";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About page</h1>
      <Example/>
 
    </main>
  );
}
