import { GITHUB_URL } from "@/lib/urls";
import type { ComponentProps } from "react";
import { ExternalLinkButton } from "./external-link-button";
import { GitHub } from "./svg/github";

type GitHubButtonProps = Omit<ComponentProps<typeof ExternalLinkButton>, "href" | "icon" | "label">;

export function GitHubButton(props: GitHubButtonProps) {
  return <ExternalLinkButton href={GITHUB_URL} icon={<GitHub />} label="GitHub" {...props} />;
}
