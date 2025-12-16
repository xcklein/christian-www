import { cn } from "@/lib/utils";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("flex items-center justify-between p-2", className)}>
      <span>
        <p className="text-sm">© 2025 Me</p>
      </span>
      <span>
        <Button variant="link" asChild>
          <Link
            to="https://github.com/xcklein/christian-www"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source <SquareArrowOutUpRightIcon />
          </Link>
        </Button>
      </span>
    </footer>
  );
}
