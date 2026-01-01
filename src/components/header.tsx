import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { HouseIcon } from "lucide-react";
import { Link } from "react-router";
import { FloatingContainer } from "./floating-container";
import { Nav } from "./nav";
import { ThemeButton } from "./theme-button";
import { Button } from "./ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className={cn("w-full p-2", className)}>
      <FloatingContainer className="flex flex-row items-center">
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
        <span className="flex flex-1 justify-center"></span>
        <span className="flex flex-0 items-center gap-2">
          <ThemeButton />
        </span>
      </FloatingContainer>
    </header>
  );
}
