"use client";

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import "./magzine.css";

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);

  useEffect(() => {
    if (!bookRef.current) return;

    // ⏳ Delay init to ensure DOM is ready
    const init = requestAnimationFrame(() => {
      pageFlip.current = new PageFlip(bookRef.current, {
        width: 400,
        height: 400,
        size: "stretch",
        showCover: false,
        useMouseEvents: true,
        mobileScrollSupport: false,

        // realism
        maxShadowOpacity: 0.7,
        drawShadow: true,
        flippingTime: 900,
        swipeDistance: 30,
      });

      pageFlip.current.loadFromImages([
        "/m1.avif",
        "/m2.avif",
        "/m1.avif",
        "/m2.avif",
        "/m1.avif",
        "/m2.avif",
      ]);
    });

    return () => {
      cancelAnimationFrame(init);
      pageFlip.current?.destroy();
    };
  }, []);

  return (
    <div className="magazine-wrapper">
      <div ref={bookRef} className="magazine-book" />
    </div>
  );
}




