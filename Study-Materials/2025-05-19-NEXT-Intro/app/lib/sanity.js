import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "oongp9m5",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
