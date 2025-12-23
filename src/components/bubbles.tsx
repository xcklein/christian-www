import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

interface Bubble {
  id: string;
  text: string;
  subtext: string;
  x: number;
  y: number;
  side: "left" | "right";
}

const SPAWN_INTERVAL_MS = 8000;
const BUBBLE_DURATION_MS = 9000;
const BUBBLE_REMOVE_BUFFER_MS = 1000;

interface Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  { text: "They don't think it be like it is, but it do.", author: "Oscar Gamble" },
];
const QUOTES_INDEX_INIT = Math.floor(Math.random() * QUOTES.length);

export function Bubbles({ className }: { className?: string }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const index = useRef(QUOTES_INDEX_INIT);

  const spawnBubble = () => {
    const quote = QUOTES[index.current];

    const bubble: Bubble = {
      id: v4(),
      text: quote.text,
      subtext: quote.author,
      x: Math.random() * 23 + 2,
      y: Math.random() * 90,
      side: Math.random() > 0.5 ? "left" : "right",
    };

    index.current = (index.current + 1) % QUOTES.length;

    setBubbles((prev) => {
      return [...prev, bubble];
    });

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
    }, BUBBLE_DURATION_MS + BUBBLE_REMOVE_BUFFER_MS);
  };

  useEffect(() => {
    const interval = setInterval(spawnBubble, SPAWN_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cn("overflow-hidden", className)}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute"
          style={{
            left: bubble.side === "left" ? `${bubble.x}%` : undefined,
            right: bubble.side === "right" ? `${bubble.x}%` : undefined,
            top: `${bubble.y}%`,
            animation: `grow-shrink ${BUBBLE_DURATION_MS}ms ease-in-out forwards`,
          }}
        >
          <div
            className={cn(
              "bg-primary dark:bg-secondary relative flex max-w-[66vw] flex-col gap-1 rounded-2xl px-4 py-2",
              bubble.side === "left" ? "text-left" : "text-right",
              // bubble tail ⬇️
              "after:border-t-primary dark:after:border-t-secondary after:absolute after:-bottom-2 after:h-0 after:w-0 after:border-t-8 after:border-r-8 after:border-l-8 after:content-['']",
              bubble.side === "left"
                ? "after:left-3 after:border-r-transparent after:border-l-transparent"
                : "after:right-3 after:border-r-transparent after:border-l-transparent",
            )}
          >
            <p className="text-primary-foreground dark:text-secondary-foreground text-base">
              "{bubble.text}"
            </p>
            <p className="text-primary-foreground/70 dark:text-secondary-foreground/70 text-sm">
              {bubble.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
