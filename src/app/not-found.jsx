"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect to home
    router.replace("/"); // replace avoids going back to 404 page
  }, [router]);

  return null; // no content rendered
}
