import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 0,
      title: "Massive mana potion",
      category: "potion",
      image: "/massive-mana-potion.webp",
      price: 49.99,
      description: "A powerful mana potion for magic users.",
      stock: 12,
    },
    {
      id: 1,
      title: "Fire resistance potion",
      category: "potion",
      image: "/fire-resistance-potion.webp",
      price: 89.99,
      description: "A potion that grants fire resistance.",
      stock: 5,
    },
  ]);
}
