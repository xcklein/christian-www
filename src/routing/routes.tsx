import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
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
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
