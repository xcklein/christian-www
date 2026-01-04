import { GITHUB_URL } from "@/lib/urls";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Link } from "react-router";
import { GitHub } from "./svg/github";
import { Button } from "./ui/button";

export function GitHubButton({ ...props }: ComponentProps<typeof Button>) {
  return (
    <Button variant="link" asChild {...props}>
      <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        {props.size?.includes("icon") ? (
          <GitHub />
        ) : (
          <>
            GitHub <SquareArrowOutUpRightIcon />
          </>
        )}
      </Link>
    </Button>
  );
}
