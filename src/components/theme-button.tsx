import { useTheme } from "@/hooks/use-theme";
import { MoonIcon, SunIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";

export function ThemeButton({ ...props }: ComponentProps<typeof Button>) {
  const { actual: active, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(active === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick} {...props}>
      {active === "light" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
