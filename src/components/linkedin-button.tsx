import { LINKEDIN_URL } from "@/lib/urls";
import type { ComponentProps } from "react";
import { ExternalLinkButton } from "./external-link-button";
import { LinkedIn } from "./svg/linkedin";

type LinkedInButtonProps = Omit<
  ComponentProps<typeof ExternalLinkButton>,
  "href" | "icon" | "label"
>;

export function LinkedInButton(props: LinkedInButtonProps) {
  return <ExternalLinkButton href={LINKEDIN_URL} icon={<LinkedIn />} label="LinkedIn" {...props} />;
}
