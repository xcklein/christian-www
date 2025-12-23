import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { v4 } from "uuid";

interface BubblesProps extends HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement | null>;
}

interface Bubble {
  id: string;
  text: string;
  subtext: string;
  x: number;
  y: number;
  lr: "left" | "right";
  tb: "top" | "bottom";
}

interface Quote {
  text: string;
  author: string;
}

const SPAWN_INTERVAL_MS = 8000;
const BUBBLE_DURATION_MS = 9000;
const BUBBLE_REMOVE_BUFFER_MS = 1000;
const QUOTES: Quote[] = [
  { text: "How do you know so much about this stuff?", author: "Anonymous (Team Member)" },
  { text: "I'm proud of you.", author: "Mom" },
  {
    text: "Unfortunately, we can't create a team full of Christians.",
    author: "Anonymous (Manager)",
  },
  {
    text: "Christian always finds the time to help his teammates out.",
    author: "Anonymous (Team Member)",
  },
  { text: "You are the epitome of a senior software engineer.", author: "Anonymous (Team Member)" },
  {
    text: "He is knowledgeable across a broad range of topics and is a great resource.",
    author: "Anonymous (Team Member)",
  },
  {
    text: "Christian is a leader. [...] his presence was immediately felt.",
    author: "Anonymous (Team Member)",
  },
  {
    text: "Your ability to break down complex problems, understand the biggest picture & how a small solution fits in, is unmatched.",
    author: "Anonymous (Team Member)",
  },
];
const QUOTES_INDEX_INIT = Math.floor(Math.random() * QUOTES.length);

export function Bubbles({ ref, className, ...props }: BubblesProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const index = useRef(QUOTES_INDEX_INIT);

  const spawnBubble = () => {
    const quote = QUOTES[index.current];

    const bubble: Bubble = {
      id: v4(),
      text: quote.text,
      subtext: quote.author,
      x: Math.random() * 23 + 2,
      y: Math.random() * 40,
      lr: Math.random() > 0.5 ? "left" : "right",
      tb: Math.random() > 0.5 ? "top" : "bottom",
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
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={cn(
            "animate-grow-shrink absolute",
            bubble.lr === "left" ? "origin-bottom-left" : "origin-bottom-right",
          )}
          style={{
            left: bubble.lr === "left" ? `${bubble.x}%` : undefined,
            right: bubble.lr === "right" ? `${bubble.x}%` : undefined,
            top: bubble.tb === "top" ? `${bubble.y}%` : undefined,
            bottom: bubble.tb === "bottom" ? `${bubble.y}%` : undefined,
          }}
        >
          <div
            className={cn(
              "bg-primary dark:bg-secondary relative flex max-w-[66vw] flex-col gap-1 rounded-2xl px-4 py-2 md:max-w-[33vw]",
              bubble.lr === "left" ? "text-left" : "text-right",
              // bubble tail ↓
              "after:border-t-primary dark:after:border-t-secondary after:absolute after:-bottom-2 after:h-0 after:w-0 after:border-t-8 after:border-r-8 after:border-l-8 after:content-['']",
              bubble.lr === "left"
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
