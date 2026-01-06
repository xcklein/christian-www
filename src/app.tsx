import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </StrictMode>
  );
}
