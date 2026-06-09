import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Tech Trix logo lockup — the circuit-head mark (light, transparent) plus the
 * "Tech Trix" wordmark. Use `wordmark={false}` for the mark on its own.
 */
export function Logo({
  href = "/",
  wordmark = true,
  className,
}: {
  href?: string | null;
  wordmark?: boolean;
  className?: string;
}) {
  const inner = (
    <>
      <Image
        src="/img/logo-mark.png"
        alt="Tech Trix"
        width={235}
        height={363}
        priority
        className="h-9 w-auto"
      />
      {wordmark && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink">
          Tech <span className="text-gradient">Trix</span>
        </span>
      )}
    </>
  );

  if (href === null) {
    return <span className={cn("inline-flex items-center gap-2.5", className)}>{inner}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="Tech Trix — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      {inner}
    </Link>
  );
}
