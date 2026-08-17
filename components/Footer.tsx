import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Developer boilerplate starters and code templates for people who would rather ship
              than set up.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:flex sm:gap-10"
          >
            <a
              href="/terms"
              className="text-text-muted transition-colors hover:text-text"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-text-muted transition-colors hover:text-text"
            >
              Privacy
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-text-muted transition-colors hover:text-text"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-text-muted transition-colors hover:text-text"
            >
              {siteConfig.contactEmail}
            </a>
          </nav>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-text-faint">
          © {year} Barrio Kits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
