import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl lg:ml-[8%]">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Built for people who would rather <span className="text-accent">ship</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Barrio Kits exists for developers and creators who want a clean, working starting
            point instead of building every project from zero. Each kit is opinionated,
            documented, and ready to customize, so you spend your time on what makes your project
            different, not on the setup that looks the same every time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
