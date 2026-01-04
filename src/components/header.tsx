import { cn } from "@/lib/utils";
import { FloatingContainer } from "./floating-container";
import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full p-2", className)}>
      <FloatingContainer className="flex flex-row items-center">
        <span className="flex flex-0 items-center gap-1">
          <Nav />
        </span>
        <span className="flex flex-1 justify-center"></span>
        <span className="flex flex-0 items-center gap-2">
          <ThemeButton className="bg-card rounded-full" />
        </span>
      </FloatingContainer>
    </header>
  );
}
