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
    demos: [
      {
        label: "Trip Planner",
        description:
          "A Notion system for planning trips, itineraries, packing lists, and travel budgets.",
        url: "https://barriokits.notion.site/Trip-Planner-2aba3568f01480389f9bc93ca6cfdd89",
      },
      {
        label: "Monthly Expense & Income Tracker",
        description:
          "A Notion tracker for logging monthly income and expenses, with categories and running totals.",
        url: "https://barriokits.notion.site/Monthly-Expense-Income-Tracker-3c2a3568f01481059de4d29ef53065c3",
      },
      {
        label: "Job Search Tracker",
        description: "A Notion board for tracking job applications, interview stages, and follow ups.",
        url: "https://barriokits.notion.site/Job-Search-Tracker-3c2a3568f01481819169c6557f6f892e",
      },
      {
        label: "Meal Planner & Grocery List",
        description:
          "A Notion system for planning weekly meals and generating a matching grocery list.",
        url: "https://app.notion.com/p/barriokits/Meal-Planner-Grocery-List-3c2a3568f0148110914df6d7ba97b483",
      },
      {
        label: "Freelance Client & Invoice Tracker",
        description:
          "A Notion system for tracking freelance clients, active projects, and invoice status.",
        url: "https://barriokits.notion.site/Freelance-Client-Invoice-Tracker-3c2a3568f014818a9b55c2bd877f1473",
      },
    ],
  },
  {
    slug: "canva-templates",
    name: "Canva Templates",
    description:
      "Branded social posts, pitch decks, and marketing kits built in Canva. Swap the colors and copy, keep the layout.",
    icon: "palette",
    highlights: [
      "Editable directly in Canva, no other software needed",
      "Consistent branding across every asset in the kit",
      "Swap colors, fonts, and copy in minutes",
    ],
  },
];
