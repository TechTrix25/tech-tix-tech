"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Tiny dark blur placeholder so remote images never flash white or shift. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyMxMjE4MjknLz48L3N2Zz4=";

/**
 * next/image wrapper with a built-in blur placeholder and a graceful gradient
 * fallback when a remote URL fails — so layout never shifts and we never ship
 * a broken <img>.
 */
export function SmartImage({
  className,
  alt,
  fallbackClassName,
  ...props
}: ImageProps & { fallbackClassName?: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={cn(
          "h-full w-full bg-[radial-gradient(120%_120%_at_20%_10%,rgba(123,108,246,0.35),transparent),radial-gradient(120%_120%_at_90%_90%,rgba(255,178,62,0.28),transparent)] bg-surface-2",
          className,
          fallbackClassName
        )}
      />
    );
  }

  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      onError={() => setErrored(true)}
      className={className}
      {...props}
    />
  );
}
