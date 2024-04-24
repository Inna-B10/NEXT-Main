import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <button className="bg-[#4c4c4c] hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded">
      <Link className="text-3xl" href="/avatar/upload">
        Upload file here
      </Link>
    </button>
  );
}
