export const Exp = {
  GROWING: "Growing",
  SEASONED: "Seasoned",
  HARDENED: "Hardened",
} as const;
export type Exp = (typeof Exp)[keyof typeof Exp];

export interface Technology {
  name: string;
  exp: Exp;
  img: string;
}

export const TECHNOLOGIES: Record<string, Technology> = {
  angular: { name: "Angular", exp: Exp.GROWING, img: "/images/icons/angular.svg" },
  atlassian: { name: "Atlassian", exp: Exp.HARDENED, img: "/images/icons/atlassian.svg" },
  aws: { name: "AWS", exp: Exp.HARDENED, img: "/images/icons/aws.svg" },
  cpp: { name: "C++", exp: Exp.SEASONED, img: "/images/icons/cpp.svg" },
  csharp: { name: "C#", exp: Exp.HARDENED, img: "/images/icons/csharp.svg" },
  css: { name: "CSS", exp: Exp.SEASONED, img: "/images/icons/css.svg" },
  discordjs: { name: "Discord.js", exp: Exp.SEASONED, img: "/images/icons/discordjs.svg" },
  expo: { name: "Expo", exp: Exp.GROWING, img: "/images/icons/expo.svg" },
  git: { name: "Git", exp: Exp.SEASONED, img: "/images/icons/git.svg" },
  github: { name: "GitHub", exp: Exp.HARDENED, img: "/images/icons/github.svg" },
  graphql: { name: "GraphQL", exp: Exp.HARDENED, img: "/images/icons/graphql.svg" },
  hono: { name: "Hono", exp: Exp.GROWING, img: "/images/icons/hono.svg" },
  html: { name: "HTML", exp: Exp.SEASONED, img: "/images/icons/html.svg" },
  java: { name: "Java", exp: Exp.SEASONED, img: "/images/icons/java.svg" },
  javascript: { name: "JavaScript", exp: Exp.HARDENED, img: "/images/icons/javascript.svg" },
  jest: { name: "Jest", exp: Exp.GROWING, img: "/images/icons/jest.svg" },
  labview: { name: "LabVIEW", exp: Exp.SEASONED, img: "/images/icons/labview.svg" },
  launchdarkly: { name: "LaunchDarkly", exp: Exp.SEASONED, img: "/images/icons/launchdarkly.svg" },
  linux: { name: "Linux", exp: Exp.GROWING, img: "/images/icons/linux.svg" },
  mysql: { name: "MySQL", exp: Exp.SEASONED, img: "/images/icons/mysql.svg" },
  nestjs: { name: "NestJS", exp: Exp.SEASONED, img: "/images/icons/nestjs.svg" },
  nextjs: { name: "Next.js", exp: Exp.GROWING, img: "/images/icons/nextjs.svg" },
  nodejs: { name: "Node.js", exp: Exp.HARDENED, img: "/images/icons/nodejs.svg" },
  python: { name: "Python", exp: Exp.SEASONED, img: "/images/icons/python.svg" },
  qt: { name: "Qt", exp: Exp.GROWING, img: "/images/icons/qt.svg" },
  react: { name: "React", exp: Exp.SEASONED, img: "/images/icons/react.svg" },
  redis: { name: "Redis", exp: Exp.SEASONED, img: "/images/icons/redis.svg" },
  sequelize: { name: "Sequelize", exp: Exp.HARDENED, img: "/images/icons/sequelize.svg" },
  sqlite: { name: "SQLite", exp: Exp.SEASONED, img: "/images/icons/sqlite.svg" },
  tailwind: { name: "Tailwind", exp: Exp.SEASONED, img: "/images/icons/tailwind.svg" },
  threejs: { name: "Three.js", exp: Exp.GROWING, img: "/images/icons/threejs.svg" },
  typescript: { name: "TypeScript", exp: Exp.HARDENED, img: "/images/icons/typescript.svg" },
  unity: { name: "Unity", exp: Exp.GROWING, img: "/images/icons/unity.svg" },
  vercel: { name: "Vercel", exp: Exp.GROWING, img: "/images/icons/vercel.svg" },
  vite: { name: "Vite", exp: Exp.SEASONED, img: "/images/icons/vite.svg" },
  vitest: { name: "Vitest", exp: Exp.SEASONED, img: "/images/icons/vitest.svg" },
  vue: { name: "Vue", exp: Exp.SEASONED, img: "/images/icons/vue.svg" },
  windows: { name: "Windows", exp: Exp.HARDENED, img: "/images/icons/windows.svg" },
  wpf: { name: "WPF", exp: Exp.HARDENED, img: "/images/icons/wpf.svg" },
  xamarin: { name: "Xamarin", exp: Exp.GROWING, img: "/images/icons/xamarin.svg" },
};
