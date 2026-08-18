export type ProductIcon = "code" | "kanban" | "palette";

export interface ProductDemo {
  label: string;
  description: string;
  url: string;
  buyUrl?: string;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  icon: ProductIcon;
  featured?: boolean;
  highlights?: string[];
  demos?: ProductDemo[];
}

export const products: Product[] = [
  {
    slug: "code-starters",
    name: "Code Boilerplate Starters",
    description:
      "Production ready starter repos for Next.js apps, APIs, and full stack projects, with auth, database, and deployment already wired up.",
    icon: "code",
    featured: true,
    highlights: [
      "Auth and database wired up",
      "Deployment config included",
      "Clean, documented codebase",
    ],
    demos: [
      {
        label: "React + Flask + SQLAlchemy Boilerplate",
        description:
          "A React and Flask starter with JWT authentication, SQLAlchemy models, Alembic migrations, and a working login, registration, and CRUD example.",
        url: "https://reactflaskauth.barriokits.dev/",
        buyUrl: "https://barriokits.lemonsqueezy.com/checkout/buy/c1af482c-d721-4a38-a239-d4c8f13aa4dc",
      },
      {
        label: "Next.js + Postgres + Stripe Starter for SaaS Products",
        description:
          "A Next.js SaaS starter with Postgres via Prisma, email and password auth, and a full Stripe subscription billing integration, including checkout, customer portal, and webhooks.",
        url: "https://nextjs-saas-starter-jcmy.onrender.com/",
        buyUrl: "https://barriokits.lemonsqueezy.com/checkout/buy/5a0dc62d-0dd5-48d9-b31b-65947efa4a2e",
      },
      {
        label: "Flask + Redis Starter",
        description:
          "A Flask starter for background jobs and caching, built around RQ for job processing and a Redis get-or-set caching pattern, with a live demo console.",
        url: "https://flask-redis-jobs-starter.onrender.com/",
        buyUrl: "https://barriokits.lemonsqueezy.com/checkout/buy/12137dd3-f247-456e-9b86-e5555cb93f3d",
      },
    ],
  },
  {
    slug: "notion-templates",
    name: "Notion Templates",
    description:
      "Structured Notion systems for project planning, content calendars, and client management. Duplicate the workspace and make it yours.",
    icon: "kanban",
  },
  {
    slug: "canva-templates",
    name: "Canva Templates",
    description:
      "Branded social posts, pitch decks, and marketing kits built in Canva. Swap the colors and copy, keep the layout.",
    icon: "palette",
  },
];
