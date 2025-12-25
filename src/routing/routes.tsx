import { CanvasPage } from "@/pages/canvas";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { TechnologyPage } from "@/pages/technology";
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
      {
        path: "/canvas",
        element: <CanvasPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
