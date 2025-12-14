import { cn } from "@/lib/utils";

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
        <p className="text-sm">Built with Vite + React, Shadcn, and Tailwind v4.</p>
      </span>
    </footer>
  );
}
