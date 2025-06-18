import { connectToDatabase } from "@/app/lib/mongoDBconnect";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const db = await connectToDatabase();
  const items = await db.collection("testing-items").find({}).toArray();
  return Response.json(items);
}

export async function POST(request) {
  const { userId } = await auth();
  const data = await request.json();
  const db = await connectToDatabase();
  const result = await db
    .collection("testing-items")
    .insertOne({ ...data, ownerId: userId });
  return Response.json({ insertedId: result.insertedId });
}
