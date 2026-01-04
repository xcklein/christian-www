import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { GitHubButton } from "./github-button";
import { LinkedInButton } from "./linkedin-button";
import { SourceButton } from "./source-button";

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
        <GitHubButton variant="ghost" size="icon" />
        <LinkedInButton variant="ghost" size="icon" />
        <SourceButton variant="ghost" size="icon" />
      </span>
    </footer>
  );
}
