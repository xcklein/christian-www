import { cn } from "@/lib/utils";
import { HouseIcon } from "lucide-react";
import { Link } from "react-router";
import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";
import { Button } from "./ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("z-10 flex items-center justify-between p-2", className)}>
      <span className="flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <HouseIcon />
          </Link>
        </Button>
        <Nav />
      </span>
      <span className="flex items-center gap-2">
        <ThemeButton />
      </span>
    </header>
  );
}
