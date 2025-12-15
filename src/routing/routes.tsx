import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ScreensaverPage } from "@/pages/screensaver";
import type { RouteObject } from "react-router";
import { Layout } from "./layout";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/screensaver",
        element: <ScreensaverPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
