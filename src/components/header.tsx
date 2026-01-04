import { cn } from "@/lib/utils";
import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("flex w-full flex-row items-center p-2", className)}>
      <span className="flex flex-0 items-center gap-1">
        <Nav />
      </span>
      <span className="flex flex-1 justify-center"></span>
      <span className="flex flex-0 items-center gap-2">
        <ThemeButton className="bg-card rounded-full" />
      </span>
    </header>
  );
}
