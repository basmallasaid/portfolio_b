"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const hasPosition = useRef(false);
  const isVisible = useRef(false);

  const background = useMotionTemplate`radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(56, 189, 248, 0.06), transparent 80%)`;

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncEnabled = () => {
      const isFinePointer = pointerQuery.matches;

      setEnabled(isFinePointer);

      if (!isFinePointer) {
        hasPosition.current = false;
        isVisible.current = false;
        setVisible(false);
      }
    };

    syncEnabled();
    pointerQuery.addEventListener("change", syncEnabled);

    return () => pointerQuery.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      hasPosition.current = false;
      isVisible.current = false;
      return;
    }

    const handlePointerMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      if (!hasPosition.current) {
        hasPosition.current = true;
        smoothX.jump(event.clientX);
        smoothY.jump(event.clientY);
      }

      if (!isVisible.current) {
        isVisible.current = true;
        setVisible(true);
      }
    };

    const handlePointerLeave = () => {
      isVisible.current = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
    };
  }, [enabled, mouseX, mouseY, smoothX, smoothY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ background }}
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${
        enabled && visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
