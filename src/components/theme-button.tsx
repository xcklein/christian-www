import { useTheme } from "@/hooks/use-theme";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeButton() {
  const { active, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(active === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      {active === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
