"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserOnboarding() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/user/create", { method: "POST" });
    }
  }, [isSignedIn]);

  return null;
}
