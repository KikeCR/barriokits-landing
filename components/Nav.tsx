import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/data/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/#top" aria-label="Barrio Kits, back to top">
          <Logo />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <a
            href="/#products"
            className="rounded-full px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            Products
          </a>
          <a
            href="/#about"
            className="rounded-full px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            About
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Barrio Kits on GitHub"
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <GithubLogo size={17} weight="bold" />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
