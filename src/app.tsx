import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { RouteWrapper } from "./routing/route-wrapper";

export function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <RouteWrapper />
        </BrowserRouter>
        <Analytics />
      </ThemeProvider>
    </StrictMode>
  );
}
