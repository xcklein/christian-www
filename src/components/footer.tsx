import { cn } from "@/lib/utils";
import { MadeWithLove } from "./made-with-love";
import { Socials } from "./socials";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("flex items-center justify-between p-2", className)}>
      <span className="flex items-center gap-1">
        <MadeWithLove />
      </span>
      <span className="flex items-center gap-1">
        <Socials />
      </span>
    </footer>
  );
}
