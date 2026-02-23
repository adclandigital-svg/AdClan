import gsap from "gsap";

/**
 * Safe wrapper for GSAP animations that checks element validity
 * before manipulating the DOM
 */
export const safeGsapTo = (targets, vars) => {
  return new Promise((resolve) => {
    try {
      // Convert targets to array
      const targetsArray = Array.isArray(targets) ? targets : [targets];
      
      // Filter out null or unmounted elements
      const validTargets = targetsArray.filter((target) => {
        if (!target) return false;
        if (typeof target === "string") return document.querySelector(target) !== null;
        if (target?.parentElement) return true;
        return false;
      });

      if (validTargets.length === 0) {
        console.warn("No valid targets for GSAP animation");
        resolve(null);
        return;
      }

      const animation = gsap.to(validTargets, {
        ...vars,
        onComplete: () => {
          vars?.onComplete?.();
          resolve(animation);
        },
        onError: (error) => {
          console.error("GSAP animation error:", error);
          vars?.onError?.();
          resolve(null);
        },
      });
    } catch (error) {
      console.error("Safe GSAP error:", error);
      resolve(null);
    }
  });
};

export const safeGsapFrom = (targets, vars) => {
  return new Promise((resolve) => {
    try {
      const targetsArray = Array.isArray(targets) ? targets : [targets];
      const validTargets = targetsArray.filter((target) => {
        if (!target) return false;
        if (typeof target === "string") return document.querySelector(target) !== null;
        if (target?.parentElement) return true;
        return false;
      });

      if (validTargets.length === 0) {
        console.warn("No valid targets for GSAP animation");
        resolve(null);
        return;
      }

      const animation = gsap.from(validTargets, {
        ...vars,
        onComplete: () => {
          vars?.onComplete?.();
          resolve(animation);
        },
        onError: (error) => {
          console.error("GSAP animation error:", error);
          vars?.onError?.();
          resolve(null);
        },
      });
    } catch (error) {
      console.error("Safe GSAP error:", error);
      resolve(null);
    }
  });
};

export const safeGsapFromTo = (targets, fromVars, toVars) => {
  return new Promise((resolve) => {
    try {
      const targetsArray = Array.isArray(targets) ? targets : [targets];
      const validTargets = targetsArray.filter((target) => {
        if (!target) return false;
        if (typeof target === "string") return document.querySelector(target) !== null;
        if (target?.parentElement) return true;
        return false;
      });

      if (validTargets.length === 0) {
        console.warn("No valid targets for GSAP animation");
        resolve(null);
        return;
      }

      const animation = gsap.fromTo(validTargets, fromVars, {
        ...toVars,
        onComplete: () => {
          toVars?.onComplete?.();
          resolve(animation);
        },
        onError: (error) => {
          console.error("GSAP animation error:", error);
          toVars?.onError?.();
          resolve(null);
        },
      });
    } catch (error) {
      console.error("Safe GSAP error:", error);
      resolve(null);
    }
  });
};

export const safeElementCheck = (element) => {
  if (!element) return false;
  if (!element.parentElement) return false;
  if (typeof element.offsetParent === "number") return element.offsetParent !== null;
  try {
    return document.body.contains(element);
  } catch (e) {
    return false;
  }
};
