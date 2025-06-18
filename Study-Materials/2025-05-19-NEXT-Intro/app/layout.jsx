import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/organism/Header";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import UserOnboarding from "./components/atom/Onboarding";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next js fullstack 4 lessons",
  description: "Next js fullstack 4 lessons",
  authors: [{ name: "Rafael" }, { name: "Rafael-Abdul" }],
  openGraph: {
    title: "Next js fullstack 4 lessons",
    description: "Next js fullstack 4 lessons",
    url: "https://fs-04-next-intro.vercel.app",
    siteName: "Next js fullstack lessons",
    type: "website",
    images: [
      {
        url: "/products/bluetooth-earbuds.jpg",
        width: 1200,
        height: 630,
        alt: "Next js fullstack 4 lessons",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${figtree.className} bg-secondary antialiased`}>
          <Header />

          <main className="grid justify-center gap-24 px-4 md:px-8 lg:px-12 xl:px-24">
            <SignedIn>{children}</SignedIn>
            <SignedOut>You have to login to view this webpage</SignedOut>
          </main>
          <footer></footer>
          <UserOnboarding />
        </body>
      </html>
    </ClerkProvider>
  );
}
