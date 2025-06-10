import { connectToDataBase } from "@/app/lib/mongoDBconnect";
import { ObjectId } from "mongodb";

export async function DELETE(_, { params }) {
  const db = await connectToDataBase();
  await db
    .collection("testing-items")
    .deleteOne({ _id: ObjectId.createFromHexString(params.id) });
  return Response.json({ deleted: true });
}
