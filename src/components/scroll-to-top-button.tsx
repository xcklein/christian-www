import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";
import type { ComponentProps } from "react";

export function ScrollToTopButton({ className, ...props }: ComponentProps<typeof Button>) {
  const handleClick = () => {
    const current = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

      window.scrollTo(0, current * (1 - easeInOutCubic));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <Button
      size="icon"
      onClick={handleClick}
      className={cn("size-14 rounded-full", className)}
      {...props}
    >
      <ArrowUpIcon className="size-6" />
    </Button>
  );
}
