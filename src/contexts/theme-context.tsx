import { createContext } from "react";
import type { ThemeState } from "../components/theme-provider";

export const ThemeContext = createContext<ThemeState>({
  theme: "system",
  actual: "light",
  setTheme: () => null,
});
