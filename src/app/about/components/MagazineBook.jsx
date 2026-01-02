"use client";

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);

  useEffect(() => {
    if (!bookRef.current) return;

    // ⏳ Delay init to ensure DOM is ready
    const init = requestAnimationFrame(() => {
      pageFlip.current = new PageFlip(bookRef.current, {
        width: 400,
        height: 520,
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
        "/v1.jpg",
        "/v2.jpg",
        "/v3.jpg",
        "/v4.jpg",
        "/v5.jpg",
        "/v6.jpg",
      ]);
    });

    return () => {
      cancelAnimationFrame(init);
      pageFlip.current?.destroy();
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "80px 0" }}>
      <div
        ref={bookRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "560px",
          cursor: "grab",
        }}
      />
    </div>
  );
}
