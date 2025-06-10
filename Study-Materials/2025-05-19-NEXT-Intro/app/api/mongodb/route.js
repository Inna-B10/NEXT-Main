import { connectToDataBase } from "@/app/lib/mongoDBconnect";

export async function GET() {
  const db = await connectToDataBase();
  const items = await db.collection("testing-items").find({}).toArray();
  return Response.json(items);
}

export async function POST(request) {
  const data = await request.json();
  const db = await connectToDataBase();
  const result = await db.collection("testing-items").insertOne(data);
  return Response.json({ insertedId: result.insertedId });
}
