import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

interface Bubble {
  id: string;
  text: string;
  x: number;
  y: number;
}

const SPAWN_INTERVAL_MS = 3000;
const BUBBLE_DURATION_MS = 9000;
const BUBBLE_REMOVE_BUFFER_MS = 1000;
const PHRASES = [
  "Leader",
  "Passionate",
  "Intelligent",
  "Wow",
  "Collaborative",
  "Efficient",
  "Confident",
  "Fun",
  "Professional",
  "Kind",
  "Amazing",
  "Disciplined",
  "Strong",
];
const PHRASES_INDEX_INIT = Math.floor(Math.random() * PHRASES.length);

export function Bubbles({ className }: { className?: string }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const index = useRef(PHRASES_INDEX_INIT);

  const spawnBubble = () => {
    const { x, y } = getSafeCoordinates();

    const bubble: Bubble = {
      id: v4(),
      text: PHRASES[index.current],
      x,
      y,
    };

    index.current = (index.current + 1) % PHRASES.length;

    setBubbles((prev) => {
      return [...prev, bubble];
    });

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
    }, BUBBLE_DURATION_MS + BUBBLE_REMOVE_BUFFER_MS);
  };

  const getSafeCoordinates = () => {
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 80;
      const y = Math.random() * 90;

      if (
        bubbles.every((b) => Math.abs(b.x - x) > 20) &&
        bubbles.every((b) => Math.abs(b.y - y) > 20)
      ) {
        return { x, y };
      }
    }

    const x = Math.random() * 80;
    const y = Math.random() * 90;

    return { x, y };
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
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animation: `fade-in-out ${BUBBLE_DURATION_MS}ms ease-in-out forwards`,
            opacity: 0,
          }}
        >
          <div
            className={`bg-primary dark:bg-secondary after:border-t-primary dark:after:border-t-secondary relative rounded-2xl px-4 py-2 after:absolute after:-bottom-2 after:h-0 after:w-0 after:border-t-8 after:border-r-8 after:border-l-8 after:content-[''] ${
              bubble.x < 50
                ? "after:left-3 after:border-r-transparent after:border-l-transparent"
                : "after:right-3 after:border-r-transparent after:border-l-transparent"
            }`}
          >
            <p className="text-primary-foreground dark:text-secondary-foreground text-sm">
              {bubble.text}
            </p>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes fade-in-out {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
