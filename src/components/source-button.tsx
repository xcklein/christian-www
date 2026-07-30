import { SOURCE_URL } from "@/lib/urls";
import { CodeIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { ExternalLinkButton } from "./external-link-button";

type SourceButtonProps = Omit<ComponentProps<typeof ExternalLinkButton>, "href" | "icon" | "label">;

export function SourceButton(props: SourceButtonProps) {
  return <ExternalLinkButton href={SOURCE_URL} icon={<CodeIcon />} label="Source" {...props} />;
}
