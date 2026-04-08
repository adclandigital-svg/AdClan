// "use client";

// import { useEffect, useRef } from "react";
// import { PageFlip } from "page-flip";
// import "./magzine.css";

// export default function MagazineBook() {
//   const bookRef = useRef(null);
//   const pageFlip = useRef(null);

//   useEffect(() => {
//     if (!bookRef.current) return;

//     // ⏳ Delay init to ensure DOM is ready
//     const init = requestAnimationFrame(() => {
//       pageFlip.current = new PageFlip(bookRef.current, {
//         width: 400,
//         height: 400,
//         size: "stretch",
//         showCover: false,
//         useMouseEvents: true,
//         mobileScrollSupport: false,

//         // realism
//         maxShadowOpacity: 0.7,
//         drawShadow: true,
//         flippingTime: 900,
//         swipeDistance: 30,
//       });

//       pageFlip.current.loadFromImages([
//         "/m1.avif",
//         "/m2.avif",
//         "/m1.avif",
//         "/m2.avif",
//         "/m1.avif",
//         "/m2.avif",
//       ]);
//     });

//     return () => {
//       cancelAnimationFrame(init);
//       pageFlip.current?.destroy();
//     };
//   }, []);

//   return (
//     <div className="magazine-wrapper">
//       <div ref={bookRef} className="magazine-book" />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";
import "./magzine.css";

export default function MagazineBook() {
  const bookRef = useRef(null);
  const pageFlip = useRef(null);
  const [flipText, setFlipText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!bookRef.current) return;

    const isMobile = window.innerWidth <= 768;

    const init = requestAnimationFrame(() => {
      pageFlip.current = new PageFlip(bookRef.current, {
        width: isMobile ? 360 : 700,
        height: isMobile ? 460 : 700,
        size: "fixed",
        showCover: false,
        useMouseEvents: true,
        mobileScrollSupport: false,
        maxShadowOpacity: 0.7,
        drawShadow: true,
        flippingTime: 900,
        swipeDistance: 30,
        disableFlipByClick: false,
        showPageCorners: !isMobile,
        mode: isMobile ? "single" : "double", // 🔥 key line
      });

      pageFlip.current.loadFromImages([
        "/about/magazine/1.jpg",
        "/about/magazine/2.jpg",
        "/about/magazine/3.jpg",
        "/about/magazine/4.jpg",
        "/about/magazine/5.jpg",
        "/about/magazine/6.jpg",
        "/about/magazine/7.jpg",
        "/about/magazine/8.jpg",
        "/about/magazine/9.jpg",
        "/about/magazine/10.jpg",
        "/about/magazine/11.jpg",
        "/about/magazine/12.jpg",
        "/about/magazine/13.jpg",
        "/about/magazine/14.jpg",
        "/about/magazine/15.jpg",
        "/about/magazine/16.jpg",
        "/about/magazine/17.jpg",
        "/about/magazine/18.jpg",
        "/about/magazine/19.jpg",
      ]);
    });

    return () => {
      cancelAnimationFrame(init);
      pageFlip.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;

    let timeout;

    const updateText = (text) => {
      setVisible(false); // fade out first

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setFlipText(text);
        setVisible(true); // fade in new text
      }, 150); // smooth delay
    };

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;

      if (x < rect.width / 2) {
        el.style.cursor = "w-resize";
        updateText("← Click to Flip Back");
      } else {
        el.style.cursor = "e-resize";
        updateText("Click to Flip →");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="magazine-wrapper">
      <div ref={bookRef} className="magazine-book" />
      {flipText && (
        <div className={`flip-text ${visible ? "show" : ""}`}>{flipText}</div>
      )}
    </div>
  );
}
