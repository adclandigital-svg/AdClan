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
    };

    window.addEventListener("beforeinstallprompt", handler);

    // For testing: show the button after 5s even if event didn't fire
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearTimeout(timer);
    };
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