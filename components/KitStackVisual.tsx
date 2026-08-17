import { Code, PaintBrush, SquaresFour } from "@phosphor-icons/react/dist/ssr";

const tiles = [
  {
    label: "Code",
    file: "app/starter.config.ts",
    icon: Code,
    base: "sm:rotate-[-3deg]",
    hover: "sm:group-hover:translate-x-0 sm:group-hover:translate-y-0 sm:group-hover:rotate-[-4deg]",
  },
  {
    label: "Notion",
    file: "roadmap.notion",
    icon: SquaresFour,
    base: "sm:translate-x-6 sm:translate-y-10 sm:rotate-[2deg]",
    hover: "sm:group-hover:translate-x-6 sm:group-hover:translate-y-[104px] sm:group-hover:rotate-[2deg]",
  },
  {
    label: "Canva",
    file: "brand-kit.canva",
    icon: PaintBrush,
    base: "sm:-translate-x-2 sm:translate-y-20 sm:rotate-[-1deg]",
    hover: "sm:group-hover:-translate-x-2 sm:group-hover:translate-y-[204px] sm:group-hover:rotate-[-1deg]",
  },
] as const;

export function KitStackVisual() {
  return (
    <div
      className="group mx-auto flex w-full max-w-sm flex-col gap-3 sm:relative sm:block sm:h-[360px]"
      aria-hidden="true"
    >
      {tiles.map(({ label, file, icon: Icon, base, hover }, index) => (
        <div
          key={label}
          className={`w-full rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform duration-300 ease-out sm:absolute sm:inset-x-4 sm:top-0 ${base} ${hover}`}
          style={{ zIndex: tiles.length - index }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-soft-border bg-accent-soft text-accent">
              <Icon size={17} weight="bold" />
            </span>
            <span className="text-sm font-medium text-text">{label} kit</span>
          </div>
          <p className="mt-5 font-mono text-xs text-text-faint">{file}</p>
        </div>
      ))}
    </div>
  );
}
