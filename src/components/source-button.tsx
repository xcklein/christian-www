import { SOURCE_URL } from "@/lib/urls";
import { CodeIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export function SourceButton({ ...props }: ComponentProps<typeof Button>) {
  return (
    <Button variant="link" asChild {...props}>
      <Link to={SOURCE_URL} target="_blank" rel="noopener noreferrer">
        {props.size?.includes("icon") ? (
          <CodeIcon />
        ) : (
          <>
            Source <SquareArrowOutUpRightIcon />
          </>
        )}
      </Link>
    </Button>
  );
}
