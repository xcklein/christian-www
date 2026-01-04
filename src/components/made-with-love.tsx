import { HeartIcon } from "lucide-react";

export function MadeWithLove() {
  return (
    <p className="flex items-center gap-1 text-sm whitespace-nowrap">
      With
      <HeartIcon className="text-palette-red fill-palette-red animate-heartbeat inline size-4" />
      by Me
    </p>
  );
}
