"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Send 404 notification email
    const send404Notification = async () => {
      try {
        const notFoundUrl = window.location.href;
        const referrer = document.referrer || "Direct/Unknown";
        const userAgent = navigator.userAgent;
        const timestamp = new Date().toISOString();

        await fetch("/api/404-notification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            notFoundUrl,
            referrer,
            userAgent,
            timestamp,
          }),
        });
      } catch (error) {
        console.error("Failed to send 404 notification:", error);
      } finally {
        // Redirect to home regardless of email result
        router.replace("/");
      }
    };

    send404Notification();
  }, [router]);

  return null; // no content rendered
}
