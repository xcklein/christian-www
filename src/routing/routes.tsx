import { HomePage } from "@/pages/home-page";
import { Suspense } from "react";
import type { RouteObject } from "react-router";
import { ContactPage, NotFoundPage, ProjectsPage, TechnologyPage } from "./lazy-pages";
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
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={null}>
        <NotFoundPage />
      </Suspense>
    ),
  },
];
