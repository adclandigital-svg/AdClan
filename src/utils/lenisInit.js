let lenisInstance = null;
let isInitialized = false;
let initAttempts = 0;
const MAX_INIT_ATTEMPTS = 10;

export const initLenis = async (options = {}) => {
  if (isInitialized || initAttempts >= MAX_INIT_ATTEMPTS) {
    return lenisInstance;
  }

  if (typeof window === "undefined" || !document) {
    return null;
  }

  try {
    // Check document readiness
    if (
      document.readyState !== "complete" &&
      document.readyState !== "interactive"
    ) {
      initAttempts++;
      await new Promise((resolve) => setTimeout(resolve, 200));
      return initLenis(options);
    }

    // Validate DOM is ready
    if (!document.body || document.body.children.length === 0) {
      initAttempts++;
      await new Promise((resolve) => setTimeout(resolve, 200));
      return initLenis(options);
    }

    // Safely import Lenis
    const { default: Lenis } = await import("lenis");
    const gsap = await import("gsap").then((m) => m.default);
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger);

    // Create Lenis instance with safe configuration
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => {
        if (!node || !node.classList) return false;
        return (
          node.classList.contains("no-scroll") ||
          node.classList.contains("loader-container-section") ||
          node.classList.contains("modal") ||
          node.classList.contains("dialog")
        );
      },
      ...options,
    });

    // Setup scroll event
    lenisInstance.on("scroll", () => {
      try {
        ScrollTrigger.update();
      } catch (e) {
        console.warn("ScrollTrigger update error:", e);
      }
    });

    // Setup GSAP ticker
    const rafCallback = (time) => {
      try {
        if (lenisInstance) {
          lenisInstance.raf(time * 1000);
        }
      } catch (e) {
        console.warn("RAF callback error:", e);
      }
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    isInitialized = true;
    initAttempts = 0;

    return lenisInstance;
  } catch (error) {
    console.error("Lenis initialization failed:", error);
    initAttempts++;

    // Retry if not at max attempts
    if (initAttempts < MAX_INIT_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return initLenis(options);
    }

    return null;
  }
};

export const destroyLenis = async () => {
  if (!isInitialized || !lenisInstance) return;

  try {
    const gsap = await import("gsap").then((m) => m.default);
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");

    // Remove ticker
    if (typeof lenisInstance.raf === "function") {
      gsap.ticker.remove(lenisInstance.raf);
    }

    // Destroy Lenis
    if (typeof lenisInstance.destroy === "function") {
      lenisInstance.destroy();
    }

    lenisInstance = null;
    isInitialized = false;
    initAttempts = 0;
  } catch (error) {
    console.error("Lenis destruction failed:", error);
    lenisInstance = null;
    isInitialized = false;
  }
};

export const getLenisInstance = () => lenisInstance;
export const isLenisInitialized = () => isInitialized;
