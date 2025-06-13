import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = "testing-items-database";

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set");
}

const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    return client.db(dbName);
  } catch (err) {
    console.log(err);
  }
}
