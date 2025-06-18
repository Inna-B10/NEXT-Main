import { connectToDatabase } from "@/app/lib/mongoDBconnect";
import { auth } from "@clerk/nextjs/server";

export async function POST() {
  const { userId } = await auth();
  console.log(userId);
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const db = await connectToDatabase();
  const existingUser = await db
    .collection("users")
    .findOne({ clerkId: userId });

  if (!existingUser) {
    await db
      .collection("users")
      .insertOne({ clerkId: userId, createdAt: new Date() });
  }

  return new Response(JSON.stringify({ userId }), { status: 200 });
}
