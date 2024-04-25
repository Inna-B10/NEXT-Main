// what is put?: https://vercel.com/docs/concepts/functions/serverless-functions#put
import { put } from '@vercel/blob';
// what is NextResponse?: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';

// Exports a function that handles the POST request:
// Done with typescript.
// Request: The request object that is passed to the function. It contains the request body, headers, and other information about the request.
// Promise: The Promise object that is returned by the function. It represents the eventual completion or failure of the asynchronous operation.
// NextResponse: The NextResponse object that is returned by the function. It contains the response body, headers, and other information about the response.
export async function POST(request: Request): Promise<NextResponse> {
  // Destructures the searchParams property from the URL object created from the request's URL:
  // searchParams: https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
  const { searchParams } = new URL(request.url);
   // Retrieves the value of the 'filename' query parameter from the searchParams:
  const filename = searchParams.get('filename');


  // Error handling:
  // If filename is missing, returns an error response with a 400 status code:
  if (!filename) {
    return new NextResponse('Filename is missing', { status: 400 });
  }

  // If request body is missing, returns an error response with a 400 status code:
  if (!request.body) {
    return new NextResponse('Request body is missing', { status: 400 });
  }

  // Calls the put function from the @vercel/blob module with the filename, request body, and access options:
  // put is a function that returns a Promise that resolves to a Blob object.

  const blob = await put(filename, request.body, {
    // Sets the access option to 'public':
    // public means that the uploaded file can be accessed by anyone who has access to the Vercel project.
    access: 'public',
  });


// Returns a JSON response with the Blob object as the body:
// NextResponse.json is a function that returns a NextResponse object with the body set to the Blob object and a status code of 200.
  return NextResponse.json(blob);
}


//! Javascript code alternative:
// export async function POST(request) {
//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get('filename');

//   if (!filename) {
//     return new NextResponse('Filename is missing', { status: 400 });
//   }

//   if (!request.body) {
//     return new NextResponse('Request body is missing', { status: 400 });
//   }

//   const blob = await put(filename, request.body, {
//     access: 'public',
//   });

//   return NextResponse.json(blob);
// }
