//! JS version can be seen at avatar/jsversion/page.js

"use client"; // Indicates that this code will be run on the client-side
// Imports the PutBlobResult type from the @vercel/blob package: https://www.npmjs.com/package/@vercel/blob
import type { PutBlobResult } from "@vercel/blob";
// Imports the Image component from the next/image package: https://www.npmjs.com/package/next/image
import Image from "next/image";
// Imports React, useState, and useRef hooks from the react package.
import React, { useState, useRef } from "react";

export default function AvatarUploadPage() {
  // Initializes a ref to access the input file element. HTMLInputElement is a type that represents an input element of type file.
  const inputFileRef = useRef<HTMLInputElement>(null);
  // Initializes state to manage the blob data. PutBlobResult is a type that represents the result of a PutBlob operation.
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  // Defines an asynchronous function named upload to handle form submission.
  const upload = async (event: React.FormEvent) => {
    // Prevents the default form submission behavior.
    event.preventDefault();

    // Checks if there are no files selected.
    if (!inputFileRef.current?.files) {
      // Throws an error if no file is selected.
      throw new Error("No file selected");
    }

    // Retrieves the selected file.
    const file = inputFileRef.current.files[0];

    // Sends a POST request to upload the file to the server.
    const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    // Parses the response JSON into a PutBlobResult.
    const newBlob = (await response.json()) as PutBlobResult;

    // Updates the blob state with the new blob data.
    setBlob(newBlob);
  };

  return (
    <>
      <h1 className="text-6xl mb-12">Upload Your file:</h1>

      <form onSubmit={upload}>
        <input name="file" ref={inputFileRef} type="file" required />

        <button
          className="bg-[#4c4c4c] hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded "
          type="submit"
        >
          Upload
        </button>
      </form>

      {/* Display uploaded image if blob data is available */}
      {blob && (
        <div className="p-8 m-8 border-2 border-slate-900 bg-slate-800 flex flex-col gap-8 items-center">
          {/* Display uploaded image */}
          <Image
            className="border-2"
            src={blob.url}
            width={200}
            height={200}
            alt="avatar"
          />
          {/* Display blob URL */}
          <div>
            Blob url:{" "}
            <a href={blob.url} className="underline">
              {blob.pathname}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
