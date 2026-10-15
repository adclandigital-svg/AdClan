"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Palette,
  Sun,
  Moon,
  RotateCcw,
  X,
  Check,
  Copy,
  Sliders,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./themeCustomizer.css";

const PRESET_ACCENTS = [
  { name: "AdClan Teal", hex: "#17b9a9", rgb: "23, 185, 169" },
  { name: "Electric Purple", hex: "#8b5cf6", rgb: "139, 92, 246" },
  { name: "Neo Blue", hex: "#3b82f6", rgb: "59, 130, 246" },
  { name: "Emerald Mint", hex: "#10b981", rgb: "16, 185, 129" },
  { name: "Sunset Orange", hex: "#f97316", rgb: "249, 115, 22" },
  { name: "Ruby Pink", hex: "#ec4899", rgb: "236, 72, 153" },
  { name: "Cyber Amber", hex: "#eab308", rgb: "234, 179, 8" },
  { name: "Crimson Red", hex: "#ef4444", rgb: "239, 68, 68" },
];

function hexToRgb(hex) {
  let clean = hex.replace("#", "");
  if (clean.length === 3) {
    clean = clean.split("").map((c) => c + c).join("");
  }
  const num = parseInt(clean, 16);
  if (isNaN(num)) return { r: 23, g: 185, b: 169 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex(r, g, b) {
  const clamp = (val) => Math.max(0, Math.min(255, Math.round(Number(val) || 0)));
  const toHex = (n) => clamp(n).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function adjustBrightness(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const factor = 1 + percent / 100;
  return rgbToHex(r * factor, g * factor, b * factor);
}

export default function ThemeCustomizerFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeMode, setThemeMode] = useState("dark"); // "dark" | "light"
  const [accentHex, setAccentHex] = useState("#17b9a9");
  const [rgbState, setRgbState] = useState({ r: 23, g: 185, b: 169 });
  const [copied, setCopied] = useState(false);

  // Apply theme & accent to DOM CSS variables
  const applyStyles = useCallback((hex, mode) => {
    if (typeof document === "undefined") return;

    const { r, g, b } = hexToRgb(hex);
    const rgbStr = `${r}, ${g}, ${b}`;
    const lightHex = adjustBrightness(hex, 35);
    const darkHex = adjustBrightness(hex, -25);

    const root = document.documentElement;
    const body = document.body;

    root.style.setProperty("--v2-accent", hex);
    body.style.setProperty("--v2-accent", hex);

    root.style.setProperty("--v2-accent-rgb", rgbStr);
    body.style.setProperty("--v2-accent-rgb", rgbStr);

    root.style.setProperty("--v2-accent-light", lightHex);
    body.style.setProperty("--v2-accent-light", lightHex);

    root.style.setProperty("--v2-accent-dark", darkHex);
    body.style.setProperty("--v2-accent-dark", darkHex);

    if (mode === "light") {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }

    try {
      localStorage.setItem("adclan_v2_accent", hex);
      localStorage.setItem("adclan_v2_theme", mode);
    } catch (_) {}
  }, []);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("adclan_v2_theme") || "dark";
      const savedHex = localStorage.getItem("adclan_v2_accent") || "#17b9a9";

      setThemeMode(savedTheme);
      setAccentHex(savedHex);
      setRgbState(hexToRgb(savedHex));
      applyStyles(savedHex, savedTheme);
    } catch (_) {
      applyStyles("#17b9a9", "dark");
    }
  }, [applyStyles]);

  // Handle color change from hex or color picker
  const handleHexChange = (newHex) => {
    setAccentHex(newHex);
    const { r, g, b } = hexToRgb(newHex);
    setRgbState({ r, g, b });
    applyStyles(newHex, themeMode);
  };

  // Handle individual RGB component change
  const handleRgbChange = (channel, value) => {
    const numeric = Math.max(0, Math.min(255, parseInt(value, 10) || 0));
    const nextRgb = { ...rgbState, [channel]: numeric };
    setRgbState(nextRgb);

    const nextHex = rgbToHex(nextRgb.r, nextRgb.g, nextRgb.b);
    setAccentHex(nextHex);
    applyStyles(nextHex, themeMode);
  };

  // Toggle Dark / Light theme
  const handleThemeToggle = (mode) => {
    setThemeMode(mode);
    applyStyles(accentHex, mode);
  };

  // Reset to default AdClan settings
  const handleReset = () => {
    const defaultHex = "#17b9a9";
    const defaultMode = "dark";
    setAccentHex(defaultHex);
    setRgbState({ r: 23, g: 185, b: 169 });
    setThemeMode(defaultMode);
    applyStyles(defaultHex, defaultMode);
  };

  // Copy CSS variables code snippet
  const handleCopyCss = () => {
    const cssCode = `/* AdClan Custom Brand Theme */
--v2-accent: ${accentHex};
--v2-accent-rgb: ${rgbState.r}, ${rgbState.g}, ${rgbState.b};
theme: ${themeMode};`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="v2-customizer-root">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          className="v2-customizer-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Live Theme Customizer"
        >
          <span className="v2-trigger-glow" style={{ background: accentHex }} />
          <Palette size={20} className="v2-trigger-icon" />
          <span className="v2-trigger-label">Theme Studio</span>
          <span
            className="v2-trigger-color-dot"
            style={{ backgroundColor: accentHex }}
          />
        </button>
      )}

      {/* Floating Theme Control Panel */}
      {isOpen && (
        <div className="v2-customizer-panel">
          {/* Header */}
          <div className="v2-panel-header">
            <div className="v2-panel-title-wrap">
              <div
                className="v2-panel-icon-badge"
                style={{ backgroundColor: `rgba(${rgbState.r}, ${rgbState.g}, ${rgbState.b}, 0.15)` }}
              >
                <Sparkles size={16} style={{ color: accentHex }} />
              </div>
              <div>
                <h4 className="v2-panel-title">Client Theme Studio</h4>
                <p className="v2-panel-subtitle">Live real-time color & theme customizer</p>
              </div>
            </div>

            <button
              type="button"
              className="v2-panel-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close customizer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="v2-panel-body">
            {/* 1. Dark vs Light Theme Switcher */}
            <div className="v2-control-group">
              <label className="v2-control-label">Webpage Theme</label>
              <div className="v2-theme-switch-row">
                <button
                  type="button"
                  className={`v2-theme-pill ${themeMode === "dark" ? "active" : ""}`}
                  onClick={() => handleThemeToggle("dark")}
                >
                  <Moon size={15} />
                  <span>Dark Luxury</span>
                  {themeMode === "dark" && <Check size={14} className="v2-check-icon" />}
                </button>

                <button
                  type="button"
                  className={`v2-theme-pill ${themeMode === "light" ? "active" : ""}`}
                  onClick={() => handleThemeToggle("light")}
                >
                  <Sun size={15} />
                  <span>Crisp Light</span>
                  {themeMode === "light" && <Check size={14} className="v2-check-icon" />}
                </button>
              </div>
            </div>

            {/* 2. Curated Brand Preset Colors */}
            <div className="v2-control-group">
              <label className="v2-control-label">Quick Brand Colors</label>
              <div className="v2-presets-grid">
                {PRESET_ACCENTS.map((preset) => {
                  const isSelected = accentHex.toLowerCase() === preset.hex.toLowerCase();

                  return (
                    <button
                      key={preset.hex}
                      type="button"
                      className={`v2-preset-swatch ${isSelected ? "is-selected" : ""}`}
                      onClick={() => handleHexChange(preset.hex)}
                      title={preset.name}
                      style={{
                        backgroundColor: preset.hex,
                        boxShadow: isSelected ? `0 0 16px ${preset.hex}` : "none",
                      }}
                    >
                      {isSelected && <Check size={14} color="#ffffff" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Custom Color Wheel Picker + Hex */}
            <div className="v2-control-group">
              <label className="v2-control-label">Custom Color Picker & HEX</label>
              <div className="v2-color-input-row">
                <div
                  className="v2-color-preview-box"
                  style={{ backgroundColor: accentHex }}
                >
                  <input
                    type="color"
                    value={accentHex}
                    onChange={(e) => handleHexChange(e.target.value)}
                    className="v2-native-color-picker"
                    title="Click to open system color wheel"
                  />
                </div>

                <div className="v2-hex-input-wrap">
                  <span className="v2-hex-hash">#</span>
                  <input
                    type="text"
                    value={accentHex.replace("#", "")}
                    maxLength={6}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9A-Fa-f]/g, "");
                      if (val.length <= 6) {
                        setAccentHex(`#${val}`);
                        if (val.length === 6 || val.length === 3) {
                          handleHexChange(`#${val}`);
                        }
                      }
                    }}
                    className="v2-hex-input"
                    placeholder="17b9a9"
                  />
                </div>
              </div>
            </div>

            {/* 4. RGB Color Inputs */}
            <div className="v2-control-group">
              <label className="v2-control-label">RGB Color Values (0 - 255)</label>
              <div className="v2-rgb-inputs-row">
                <div className="v2-rgb-col">
                  <span className="v2-rgb-tag">R</span>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={rgbState.r}
                    onChange={(e) => handleRgbChange("r", e.target.value)}
                    className="v2-rgb-input"
                  />
                </div>

                <div className="v2-rgb-col">
                  <span className="v2-rgb-tag">G</span>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={rgbState.g}
                    onChange={(e) => handleRgbChange("g", e.target.value)}
                    className="v2-rgb-input"
                  />
                </div>

                <div className="v2-rgb-col">
                  <span className="v2-rgb-tag">B</span>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={rgbState.b}
                    onChange={(e) => handleRgbChange("b", e.target.value)}
                    className="v2-rgb-input"
                  />
                </div>
              </div>
            </div>

            {/* 5. Live CSS Info Bar */}
            <div className="v2-active-color-card">
              <div
                className="v2-active-dot"
                style={{ backgroundColor: accentHex, boxShadow: `0 0 10px ${accentHex}` }}
              />
              <div className="v2-active-info">
                <strong>{accentHex.toUpperCase()}</strong>
                <span>rgb({rgbState.r}, {rgbState.g}, {rgbState.b})</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="v2-panel-footer">
            <button
              type="button"
              className="v2-action-btn v2-reset-btn"
              onClick={handleReset}
              title="Reset to default AdClan settings"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>

            <button
              type="button"
              className="v2-action-btn v2-copy-btn"
              onClick={handleCopyCss}
              style={{ borderColor: accentHex, color: accentHex }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy CSS"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
