import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { TechnologyPage } from "@/pages/technology-page";
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
        path: "/technology",
        element: <TechnologyPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
