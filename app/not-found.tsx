import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-mono text-sm text-text-faint">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
        This page does not exist.
      </h1>
      <p className="mt-4 text-text-muted">
        The page you are looking for may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 font-display text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  );
}
