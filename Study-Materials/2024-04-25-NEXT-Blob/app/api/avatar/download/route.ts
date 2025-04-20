import { list } from '@vercel/blob';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  const { blobs } = await list();
  console.log(blobs);
  return Response.json(blobs);
}