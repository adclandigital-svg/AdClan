"use client";

import {
  Calendar,
  CirclePlay,
  Lightbulb,
  Monitor,
  Star,
  Tv,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SERVICES_ITEMS = [
  {
    id: "creative",
    label: "CREATIVE",
    icon: Lightbulb,
    href: "/services",
  },
  {
    id: "media",
    label: "MEDIA",
    icon: CirclePlay,
    href: "/services",
  },
  {
    id: "digital",
    label: "DIGITAL",
    icon: Monitor,
    href: "/services",
  },
  {
    id: "ott",
    label: "OTT",
    icon: Tv,
    href: "/services",
  },
  {
    id: "events",
    label: "EVENTS",
    icon: Calendar,
    href: "/services",
  },
  {
    id: "celebrity-productions",
    label: "CELEBRITY PRODUCTIONS",
    icon: Star,
    href: "/services",
  },
];

export default function BottomServicesBarV3() {
  return (
    <footer className="v3-bottom-strip" aria-label="AdClan Core Capabilities">
      <div className="v3-bottom-inner">
        {SERVICES_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="v3-service-item"
              id={`service-tab-${item.id}`}
            >
              <span className="v3-service-icon-wrap" aria-hidden="true">
                <IconComponent size={16} strokeWidth={1.6} />
              </span>
              <span className="v3-service-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
