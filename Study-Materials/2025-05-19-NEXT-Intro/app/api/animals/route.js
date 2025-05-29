import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 0,
      name: "Veslepus",
      species: "Katt",
      image: "/cat.png",
      description: "En rampete katt som elsker eventyr.",
    },
    {
      id: 1,
      name: "Brutus",
      species: "Hund",
      image: "/dog.png",
      description: "En lojal følgesvenn med et stort hjerte.",
    },
    {
      id: 2,
      name: "Klakke",
      species: "And",
      image: "/duck.png",
      description: "Snakkesalig og nysgjerrig på alt.",
    },
  ]);
}
