import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { HouseIcon } from "lucide-react";
import { Link } from "react-router";
import { Nav } from "./nav";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Button } from "./ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className={cn("z-10 flex items-center p-2", className)}>
      <span className="flex flex-0 items-center gap-1">
        {!isMobile && (
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <HouseIcon />
            </Link>
          </Button>
        )}
        <Nav />
      </span>
      <span className="flex flex-1 justify-center">
        {isMobile && (
          <Button variant="ghost" asChild>
            <Link to="/" className="text-lg font-bold">
              christian.gg
            </Link>
          </Button>
        )}
      </span>
      <span className="flex flex-0 items-center gap-2">
        <AnimatedThemeToggler />
      </span>
    </header>
  );
}
