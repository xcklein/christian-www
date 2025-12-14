import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/theme-context";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeState = {
  theme: Theme;
  active: Omit<Theme, "system">;
  setTheme: (theme: Theme) => void;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) || defaultTheme) as Theme,
  );

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    const systemTheme = getSystemTheme();

    if (theme === "system") {
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value: ThemeState = {
    theme,
    active: theme === "system" ? getSystemTheme() : theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext {...props} value={value}>
      {children}
    </ThemeContext>
  );
}
