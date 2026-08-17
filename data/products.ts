export type ProductIcon = "code" | "kanban" | "palette";

export interface Product {
  slug: string;
  name: string;
  description: string;
  icon: ProductIcon;
  featured?: boolean;
  highlights?: string[];
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
