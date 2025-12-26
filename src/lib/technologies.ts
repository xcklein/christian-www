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

export const TECHNOLOGIES: Technology[] = [
  { name: "Angular", exp: Exp.GROWING, img: "/images/icons/angular.svg" },
  { name: "Atlassian", exp: Exp.HARDENED, img: "/images/icons/atlassian.svg" },
  { name: "AWS", exp: Exp.HARDENED, img: "/images/icons/aws.svg" },
  { name: "C++", exp: Exp.SEASONED, img: "/images/icons/cpp.svg" },
  { name: "C#", exp: Exp.HARDENED, img: "/images/icons/csharp.svg" },
  { name: "CSS", exp: Exp.SEASONED, img: "/images/icons/css.svg" },
  { name: "Discord.js", exp: Exp.SEASONED, img: "/images/icons/discordjs.svg" },
  { name: "Expo", exp: Exp.GROWING, img: "/images/icons/expo.svg" },
  { name: "Git", exp: Exp.SEASONED, img: "/images/icons/git.svg" },
  { name: "GitHub", exp: Exp.HARDENED, img: "/images/icons/github.svg" },
  { name: "GraphQL", exp: Exp.HARDENED, img: "/images/icons/graphql.svg" },
  { name: "Hono", exp: Exp.GROWING, img: "/images/icons/hono.svg" },
  { name: "HTML", exp: Exp.SEASONED, img: "/images/icons/html.svg" },
  { name: "Java", exp: Exp.SEASONED, img: "/images/icons/java.svg" },
  { name: "JavaScript", exp: Exp.HARDENED, img: "/images/icons/javascript.svg" },
  { name: "Jest", exp: Exp.GROWING, img: "/images/icons/jest.svg" },
  { name: "LabVIEW", exp: Exp.SEASONED, img: "/images/icons/labview.svg" },
  { name: "LaunchDarkly", exp: Exp.SEASONED, img: "/images/icons/launchdarkly.svg" },
  { name: "Linux", exp: Exp.GROWING, img: "/images/icons/linux.svg" },
  { name: "MySQL", exp: Exp.SEASONED, img: "/images/icons/mysql.svg" },
  { name: "NestJS", exp: Exp.SEASONED, img: "/images/icons/nestjs.svg" },
  { name: "Next.js", exp: Exp.GROWING, img: "/images/icons/nextjs.svg" },
  { name: "Node.js", exp: Exp.HARDENED, img: "/images/icons/nodejs.svg" },
  { name: "Python", exp: Exp.SEASONED, img: "/images/icons/python.svg" },
  { name: "Qt", exp: Exp.GROWING, img: "/images/icons/qt.svg" },
  { name: "React", exp: Exp.SEASONED, img: "/images/icons/react.svg" },
  { name: "Redis", exp: Exp.SEASONED, img: "/images/icons/redis.svg" },
  { name: "Sequelize", exp: Exp.HARDENED, img: "/images/icons/sequelize.svg" },
  { name: "SQLite", exp: Exp.SEASONED, img: "/images/icons/sqlite.svg" },
  { name: "Tailwind", exp: Exp.SEASONED, img: "/images/icons/tailwind.svg" },
  { name: "Three.js", exp: Exp.GROWING, img: "/images/icons/threejs.svg" },
  { name: "TypeScript", exp: Exp.HARDENED, img: "/images/icons/typescript.svg" },
  { name: "Unity", exp: Exp.GROWING, img: "/images/icons/unity.svg" },
  { name: "Vercel", exp: Exp.GROWING, img: "/images/icons/vercel.svg" },
  { name: "Vite", exp: Exp.SEASONED, img: "/images/icons/vite.svg" },
  { name: "Vitest", exp: Exp.SEASONED, img: "/images/icons/vitest.svg" },
  { name: "Vue", exp: Exp.SEASONED, img: "/images/icons/vue.svg" },
  { name: "Windows", exp: Exp.HARDENED, img: "/images/icons/windows.svg" },
  { name: "WPF", exp: Exp.HARDENED, img: "/images/icons/wpf.svg" },
  { name: "Xamarin", exp: Exp.GROWING, img: "/images/icons/xamarin.svg" },
];
