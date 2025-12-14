import { ThemeContext } from "@/contexts/theme-context";
import { use } from "react";

export function useTheme() {
  return use(ThemeContext);
}
