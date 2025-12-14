import { useRoutes } from "react-router";
import { ROUTES } from "./routes";

export function RouteWrapper() {
  return useRoutes(ROUTES);
}
