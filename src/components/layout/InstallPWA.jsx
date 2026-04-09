"use client";

import { useEffect, useState } from "react";
import "./install.css";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true); // show button only when prompt is available
    };
    if (deferredPrompt == null) {
      window.addEventListener("beforeinstallprompt", handler);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert("PWA install prompt not available"); // fallback
      return;
    }

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    console.log("User choice:", choice.outcome);

    setDeferredPrompt(null);
    setShow(false);
  };

  return (
    <button
      className={`install-btn ${show ? "show" : ""}`}
      onClick={handleInstallClick}
    >
      <span className="icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M12 3v10m0 0l-4-4m4 4l4-4M5 21h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
    </button>
  );
}
