import { GitHubButton } from "./github-button";
import { LinkedInButton } from "./linkedin-button";
import { SourceButton } from "./source-button";

export function Socials() {
  return (
    <span className="flex flex-row">
      <GitHubButton variant="ghost" size="icon" />
      <LinkedInButton variant="ghost" size="icon" />
      <SourceButton variant="ghost" size="icon" />
    </span>
  );
}
