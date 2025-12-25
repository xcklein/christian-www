import { AlbumsPage } from "@/pages/albums";
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
        path: "/albums",
        element: <AlbumsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
