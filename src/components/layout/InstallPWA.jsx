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

    window.addEventListener("beforeinstallprompt", handler);

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
      📲 Install App
    </button>
  );
}
