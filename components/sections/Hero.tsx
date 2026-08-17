import { KitStackVisual } from "@/components/KitStackVisual";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-24">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Ship your next project from a real starting point.
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-text-muted">
            Production ready code boilerplates, Notion systems, and Canva templates, so you start
            building instead of setting up.
          </p>
          <div className="mt-8">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              View products
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <KitStackVisual />
        </Reveal>
      </div>
    </section>
  );
}
