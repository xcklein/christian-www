import { GITHUB_URL, LINKEDIN_URL } from "@/lib/urls";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { Link } from "react-router";
import { SourceButton } from "./source-button";
import { GitHub } from "./svg/github";
import { LinkedIn } from "./svg/linkedin";
import { Button } from "./ui/button";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("flex items-center justify-between p-2", className)}>
      <span className="flex items-center gap-1">
        <p className="flex items-center gap-1 text-sm whitespace-nowrap">
          With
          <HeartIcon className="text-palette-red fill-palette-red animate-heartbeat inline size-4" />
          by Me
        </p>
      </span>
      <span className="flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <GitHub />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </Link>
        </Button>
        <SourceButton variant="ghost" size="icon" />
      </span>
    </footer>
  );
}
