import { SquareArrowOutUpRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export function SourceButton({ ...props }: ComponentProps<typeof Button>) {
  return (
    <Button variant="link" asChild {...props}>
      <Link to="https://github.com/xcklein/christian-www" target="_blank" rel="noopener noreferrer">
        Source <SquareArrowOutUpRightIcon />
      </Link>
    </Button>
  );
}
