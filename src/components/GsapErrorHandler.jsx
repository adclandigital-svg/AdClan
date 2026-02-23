"use client";

import { useEffect } from "react";

/**
 * Global error handler for GSAP DOM manipulation errors
 * Patches GSAP to prevent insertBefore errors
 */
export default function GsapErrorHandler() {
  useEffect(() => {
    // Patch Node.insertBefore to prevent errors
    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      try {
        // Check if referenceNode is actually a child of this node
        if (referenceNode && referenceNode.parentNode !== this) {
          console.warn(
            "insertBefore: reference node is not a child of this node. Skipping."
          );
          return newNode;
        }
        return originalInsertBefore.call(this, newNode, referenceNode);
      } catch (error) {
        console.error("insertBefore error caught:", error);
        return newNode;
      }
    };

    // Patch appendChild to prevent errors
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function (node) {
      try {
        if (!node || !node.parentElement && this !== node) {
          return originalAppendChild.call(this, node);
        }
        return originalAppendChild.call(this, node);
      } catch (error) {
        console.error("appendChild error caught:", error);
        return node;
      }
    };

    // Patch removeChild to prevent errors
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (node) {
      try {
        if (node.parentNode !== this) {
          console.warn(
            "removeChild: node is not a child of this node. Skipping."
          );
          return node;
        }
        return originalRemoveChild.call(this, node);
      } catch (error) {
        console.error("removeChild error caught:", error);
        return node;
      }
    };

    return () => {
      // Restore originals on cleanup (optional)
      // Node.prototype.insertBefore = originalInsertBefore;
      // Node.prototype.appendChild = originalAppendChild;
      // Node.prototype.removeChild = originalRemoveChild;
    };
  }, []);

  return null;
}
