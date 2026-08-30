export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  logo: string;
  logoDark: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Olatile",
    description:
      "Users collaboratively place tiles on a shared grid to create art, leveling up and earning achievements along the way. Built end-to-end, including authentication, payments, and a public API.",
    url: "https://olatile.com",
    tech: ["React", "Tailwind", "Stripe", "WorkOS", "Hono"],
    logo: "https://olatile.com/images/olatile-logo.svg",
    logoDark: "https://olatile.com/images/olatile-logo-dark.svg",
  },
];
