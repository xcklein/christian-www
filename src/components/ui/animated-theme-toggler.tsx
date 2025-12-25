import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "./button";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { active, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      const theme = active === "dark" ? "light" : "dark";
      setTheme(theme);
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {active === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
