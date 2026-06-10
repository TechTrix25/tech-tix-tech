"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// Lazy-load the entire three.js scene only on capable clients.
const HeroObjectScene = dynamic(() => import("./HeroObjectScene"), {
  ssr: false,
  loading: () => <Fallback />,
});

/** CSS/SVG fallback ring — shown when WebGL is unavailable or motion is reduced. */
function Fallback() {
  return (
    <div aria-hidden className="relative grid h-full w-full place-items-center">
      <div className="absolute h-72 w-72 rounded-full bg-[conic-gradient(from_180deg,var(--color-amber),var(--color-iris),var(--color-mint),var(--color-amber))] opacity-30 blur-2xl" />
      <svg viewBox="0 0 200 200" className="h-64 w-64 animate-[spin-slow_24s_linear_infinite]">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB23E" />
            <stop offset="100%" stopColor="#7B6CF6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="78" fill="none" stroke="url(#ring)" strokeWidth="1.5" opacity="0.8" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="url(#ring)" strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="100" r="38" fill="none" stroke="url(#ring)" strokeWidth="1" opacity="0.3" />
      </svg>
      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function HeroObject() {
  const reduced = usePrefersReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  // Gate the (heavy) three.js bundle behind browser idle time so it never
  // competes with first paint / LCP. The CSS fallback shows until then.
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());

    const ric =
      window.requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 1));
    const cic =
      window.cancelIdleCallback ?? ((id: number) => window.clearTimeout(id));
    const handle = ric(() => setIdle(true), { timeout: 2500 });
    return () => cic(handle as number);
  }, []);

  // Show the lightweight fallback until WebGL is confirmed, the browser is
  // idle, and motion is allowed. No WebGL or reduced motion → keep fallback.
  if (webgl === null || !webgl || reduced || !idle) return <Fallback />;
  return <HeroObjectScene />;
}
