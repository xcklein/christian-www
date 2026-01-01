import { cn } from "@/lib/utils";
import { SourceButton } from "./source-button";

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
        <SourceButton />
      </span>
    </footer>
  );
}
