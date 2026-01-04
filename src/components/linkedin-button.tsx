import { LINKEDIN_URL } from "@/lib/urls";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Link } from "react-router";
import { LinkedIn } from "./svg/linkedin";
import { Button } from "./ui/button";

export function LinkedInButton({ ...props }: ComponentProps<typeof Button>) {
  return (
    <Button variant="link" asChild {...props}>
      <Link to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        {props.size?.includes("icon") ? (
          <LinkedIn />
        ) : (
          <>
            LinkedIn <SquareArrowOutUpRightIcon />
          </>
        )}
      </Link>
    </Button>
  );
}
