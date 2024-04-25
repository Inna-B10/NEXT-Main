"use client"; // Indicates that this code will be run on the client-side

import type { PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1 className="text-6xl mb-12">Upload Your file:</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/avatar/upload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button className="bg-[#4c4c4c] hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded " type="submit">Upload</button>
      </form>
      {blob && (
        <div className="p-8 m-8 border-2 border-slate-900 bg-slate-800 flex flex-col gap-8 items-center">
          <Image className="border-2" src={blob.url} width={200} height={200} alt="avatar" />
          <div>
          Blob url: <a href={blob.url} className="underline">{blob.pathname}</a>
          </div>
        </div>
      )}
    </>
  );
}
