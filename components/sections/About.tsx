import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface-muted/50">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Built for people who would rather ship.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
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
