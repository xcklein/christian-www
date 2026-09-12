import { lazy } from "react";

export const ProjectsPage = lazy(() =>
  import("@/pages/projects-page").then((m) => ({ default: m.ProjectsPage })),
);

export const TechnologyPage = lazy(() =>
  import("@/pages/technology-page").then((m) => ({ default: m.TechnologyPage })),
);

export const ContactPage = lazy(() =>
  import("@/pages/contact-page").then((m) => ({ default: m.ContactPage })),
);

export const NotFoundPage = lazy(() =>
  import("@/pages/not-found-page").then((m) => ({ default: m.NotFoundPage })),
);
