import { connectToDatabase } from "@/app/lib/mongoDBconnect";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) return <p>Du er ikke pålogget!</p>;

  const db = await connectToDatabase();

  const userItems = await db
    .collection("testing-items")
    .find({ ownerId: userId })
    .toArray();

  return (
    <>
      <h1>Min personlige side</h1>
      {userItems.length === 0 && (
        <>
          <p>du har ikke lagt til noen elementer enda</p>
        </>
      )}
      {userItems.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
}
