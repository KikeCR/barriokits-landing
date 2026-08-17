# Barrio Kits

**Live site: [barriokits.dev](https://barriokits.dev)**

Barrio Kits is a store for developer boilerplate starters and code templates, plus Notion and Canva templates, for developers and creators who want a clean, working starting point instead of building every project from zero. This repository is the marketing landing page: a single page covering the hero, the three product lines, an about section, and full Terms of Service / Privacy Policy pages.

The site is currently pre-launch. Products are marked "Coming soon" and the storefront (Lemon Squeezy) is not wired up yet, so the primary call to action scrolls to the product section rather than a checkout link.

## About this project

- **Next.js (App Router)** with React Server Components by default. The only client islands are the pieces that actually need interactivity: the theme toggle, the theme provider, and the scroll-reveal wrapper.
- **Tailwind CSS v4** for styling, with a small CSS-variable token system in `app/globals.css` (`--canvas`, `--surface`, `--accent`, etc.) so light and dark mode share one palette definition instead of duplicating utility classes.
- **`next-themes`** for dark mode, respecting system preference by default with a manual toggle in the nav.
- **Geist Sans / Geist Mono** (Vercel's official font package) loaded through `next/font`, no external font requests.
- **`@phosphor-icons/react`** for every icon, no hand-rolled SVG icon paths.
- **`motion`** (the library formerly known as Framer Motion) for restrained scroll-reveal animation only, gated behind `prefers-reduced-motion`.
- **SEO**: the Metadata API in `app/layout.tsx` (title, description, Open Graph, Twitter card), a dynamically generated Open Graph image (`app/opengraph-image.tsx`, built with `next/og`, no static asset to keep in sync), plus `sitemap.ts`, `robots.ts`, and `manifest.ts`.
- **Testing**: `Vitest` + `React Testing Library` for components, structured around a **page object** pattern (`test/page-objects/`), and `Playwright` for end-to-end smoke tests (`e2e/`), also using page objects (`e2e/pages/`).
- Deployed on **[Netlify](https://www.netlify.com/)** (see `netlify.toml`), using Netlify's official Next.js Runtime.

## Content notes

- The copy in `Terms of Service` and `Privacy Policy` is realistic, standard boilerplate for a small digital goods store (license terms, refund policy, data collection disclosure), not placeholder-looking text. Both files carry a code comment (not rendered to visitors) flagging them for a real legal review before the store goes live.
- The GitHub org link in the nav/footer (`github.com/barriokits`), and the contact email (`hello@barriokits.dev`) in `data/site.ts`, are placeholders to be swapped in before launch.
