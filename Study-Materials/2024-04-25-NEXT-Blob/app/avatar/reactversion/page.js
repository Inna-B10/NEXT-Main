"use client"

// still uses next.js api route. Setup for the route would be done with express.js.

import { put } from '@vercel/blob';
import { useState } from 'react';

export default function AvatarUploadPage() {
  const [blob, setBlob] = useState(null);

  const upload = async (event) => {
    event.preventDefault();

    const filename = event.target.elements.file.files[0]?.name;

    if (!filename) {
      alert('Filename is missing');
      return;
    }

    const file = event.target.elements.file.files[0];

    const response = await fetch(
      `/api/avatar/upload?filename=${filename}`,
      {
        method: "POST",
        body: file,
      }
    );

    const newBlob = await response.json();

    setBlob(newBlob);
  };

  return (
    <>
      <h1 className="text-6xl mb-12">Upload Your file:</h1>

      <form onSubmit={upload}>
        <input name="file" type="file" required />
        <button className="bg-[#4c4c4c] hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded " type="submit">Upload</button>
      </form>

      {blob && (
        <div className="p-8 m-8 border-2 border-slate-900 bg-slate-800 flex flex-col gap-8 items-center">
          <img className="border-2" src={blob.url} width={200} height={200} alt="avatar" />
          <div>
            Blob url: <a href={blob.url} className="underline">{blob.pathname}</a>
          </div>
        </div>
      )}
    </>
  );
}
