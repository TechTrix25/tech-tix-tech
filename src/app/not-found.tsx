import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80svh] place-items-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(123,108,246,0.18),transparent)]"
      />
      <div className="relative">
        <p className="font-display text-[7rem] font-semibold leading-none text-gradient sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
