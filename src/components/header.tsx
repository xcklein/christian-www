import { cn } from "@/lib/utils";
import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("flex items-center justify-between p-2", className)}>
      <Nav />
      <ThemeButton />
    </header>
  );
}
