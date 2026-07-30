import { SquareArrowOutUpRightIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

interface ExternalLinkButtonProps extends ComponentProps<typeof Button> {
  href: string;
  icon: ReactNode;
  label: string;
}

export function ExternalLinkButton({ href, icon, label, ...props }: ExternalLinkButtonProps) {
  return (
    <Button variant="link" asChild {...props}>
      <Link to={href} target="_blank" rel="noopener noreferrer">
        {props.size?.includes("icon") ? (
          icon
        ) : (
          <>
            {label} <SquareArrowOutUpRightIcon />
          </>
        )}
      </Link>
    </Button>
  );
}
