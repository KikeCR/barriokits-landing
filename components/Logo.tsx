import { cn } from "@/lib/cn";

interface LogoProps {
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-strong text-accent-fg">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6 4 12l5 6" />
          <path d="m15 6 5 6-5 6" />
          <rect x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" fill="currentColor" stroke="none" />
        </svg>
      </span>
      {showWordmark ? (
        <span className="font-display text-[16px] font-bold tracking-tight text-text">
          Barrio Kits
        </span>
      ) : null}
    </span>
  );
}
