export const Exp = {
  GROWING: "Growing",
  COMFORTABLE: "Comfortable",
  SEASONED: "Seasoned",
} as const;
export type Exp = (typeof Exp)[keyof typeof Exp];

export interface Technology {
  name: string;
  exp: Exp;
  img: string;
}

export const TECHNOLOGIES: Record<string, Technology> = {
  angular: { name: "Angular", exp: Exp.GROWING, img: "/images/icons/angular.svg" },
  atlassian: { name: "Atlassian", exp: Exp.SEASONED, img: "/images/icons/atlassian.svg" },
  aws: { name: "AWS", exp: Exp.SEASONED, img: "/images/icons/aws.svg" },
  cpp: { name: "C++", exp: Exp.COMFORTABLE, img: "/images/icons/cpp.svg" },
  csharp: { name: "C#", exp: Exp.SEASONED, img: "/images/icons/csharp.svg" },
  css: { name: "CSS", exp: Exp.COMFORTABLE, img: "/images/icons/css.svg" },
  discordjs: { name: "Discord.js", exp: Exp.SEASONED, img: "/images/icons/discordjs.svg" },
  docker: { name: "Docker", exp: Exp.GROWING, img: "/images/icons/docker.svg" },
  expo: { name: "Expo", exp: Exp.GROWING, img: "/images/icons/expo.svg" },
  git: { name: "Git", exp: Exp.COMFORTABLE, img: "/images/icons/git.svg" },
  github: { name: "GitHub", exp: Exp.SEASONED, img: "/images/icons/github.svg" },
  graphql: { name: "GraphQL", exp: Exp.SEASONED, img: "/images/icons/graphql.svg" },
  hono: { name: "Hono", exp: Exp.GROWING, img: "/images/icons/hono.svg" },
  html: { name: "HTML", exp: Exp.COMFORTABLE, img: "/images/icons/html.svg" },
  insomnia: { name: "Insomnia", exp: Exp.COMFORTABLE, img: "/images/icons/insomnia.svg" },
  java: { name: "Java", exp: Exp.COMFORTABLE, img: "/images/icons/java.svg" },
  javascript: { name: "JavaScript", exp: Exp.SEASONED, img: "/images/icons/javascript.svg" },
  jest: { name: "Jest", exp: Exp.GROWING, img: "/images/icons/jest.svg" },
  labview: { name: "LabVIEW", exp: Exp.COMFORTABLE, img: "/images/icons/labview.svg" },
  launchdarkly: {
    name: "LaunchDarkly",
    exp: Exp.COMFORTABLE,
    img: "/images/icons/launchdarkly.svg",
  },
  linux: { name: "Linux", exp: Exp.GROWING, img: "/images/icons/linux.svg" },
  mysql: { name: "MySQL", exp: Exp.COMFORTABLE, img: "/images/icons/mysql.svg" },
  nestjs: { name: "NestJS", exp: Exp.COMFORTABLE, img: "/images/icons/nestjs.svg" },
  nextjs: { name: "Next.js", exp: Exp.GROWING, img: "/images/icons/nextjs.svg" },
  nodejs: { name: "Node.js", exp: Exp.SEASONED, img: "/images/icons/nodejs.svg" },
  python: { name: "Python", exp: Exp.COMFORTABLE, img: "/images/icons/python.svg" },
  qt: { name: "Qt", exp: Exp.GROWING, img: "/images/icons/qt.svg" },
  react: { name: "React", exp: Exp.COMFORTABLE, img: "/images/icons/react.svg" },
  redis: { name: "Redis", exp: Exp.COMFORTABLE, img: "/images/icons/redis.svg" },
  sentry: { name: "Sentry", exp: Exp.GROWING, img: "/images/icons/sentry.svg" },
  sequelize: { name: "Sequelize", exp: Exp.SEASONED, img: "/images/icons/sequelize.svg" },
  shadcn: { name: "Shadcn", exp: Exp.COMFORTABLE, img: "/images/icons/shadcn.svg" },
  sqlite: { name: "SQLite", exp: Exp.COMFORTABLE, img: "/images/icons/sqlite.svg" },
  tableau: { name: "Tableau", exp: Exp.COMFORTABLE, img: "/images/icons/tableau.svg" },
  tailwind: { name: "Tailwind", exp: Exp.COMFORTABLE, img: "/images/icons/tailwind.svg" },
  threejs: { name: "Three.js", exp: Exp.GROWING, img: "/images/icons/threejs.svg" },
  twilio: { name: "Twilio", exp: Exp.COMFORTABLE, img: "/images/icons/twilio.svg" },
  typescript: { name: "TypeScript", exp: Exp.SEASONED, img: "/images/icons/typescript.svg" },
  unity: { name: "Unity", exp: Exp.GROWING, img: "/images/icons/unity.svg" },
  vercel: { name: "Vercel", exp: Exp.GROWING, img: "/images/icons/vercel.svg" },
  vite: { name: "Vite", exp: Exp.COMFORTABLE, img: "/images/icons/vite.svg" },
  vitest: { name: "Vitest", exp: Exp.COMFORTABLE, img: "/images/icons/vitest.svg" },
  vs: { name: "Visual Studio", exp: Exp.COMFORTABLE, img: "/images/icons/vs.svg" },
  vscode: { name: "VS Code", exp: Exp.SEASONED, img: "/images/icons/vscode.svg" },
  vue: { name: "Vue", exp: Exp.COMFORTABLE, img: "/images/icons/vue.svg" },
  windows: { name: "Windows", exp: Exp.SEASONED, img: "/images/icons/windows.svg" },
  wpf: { name: "WPF", exp: Exp.SEASONED, img: "/images/icons/wpf.svg" },
  xamarin: { name: "Xamarin", exp: Exp.GROWING, img: "/images/icons/xamarin.svg" },
};
