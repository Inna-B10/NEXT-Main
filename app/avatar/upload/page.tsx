'use client';

import { list, type PutBlobResult } from '@vercel/blob';
import { useState, useRef, useEffect } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchFiles() {
      const response = await list({ token: "vercel_blob_rw_zmxC54gpxmW4dZ1F_kW7EJeevhxAqZoGDWcr4yFmy3XwZry" });
      setFiles(response.blobs.map(blob => blob.pathname));
    }
    fetchFiles();
  }, [blob]);

  return (
    <>
      <h1>Upload Your Avatar</h1>

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
              method: 'POST',
              body: file,
            },
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
         <h2>Current Files:</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </>
  );
}