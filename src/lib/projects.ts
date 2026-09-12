export interface Project {
  name: string;
  description: string;
  url?: string;
  tech: string[];
  logo?: string;
  logoDark?: string;
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
  {
    name: "Cadence",
    description:
      "A Discord bot that streams music into a voice channel, with a queue you can search, shuffle, and skip through. An AI DJ introduces each track with a personalized nod to whoever requested it.",
    tech: ["Discord.js", "OpenAI", "Spotify", "Sequelize", "SQLite"],
    logo: "/images/logos/cadence.png",
  },
  {
    name: "MMORPB",
    description:
      "A role-playing game played entirely through Discord, with quests, spell-driven combat, crafting, trading, and player-run auctions. Game state lives in DynamoDB, with the stack defined in AWS CDK.",
    tech: ["Discord.js", "DynamoDB", "ElectroDB", "AWS CDK"],
    logo: "/images/logos/mmorpb.png",
  },
];
