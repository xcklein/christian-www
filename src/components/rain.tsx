import { cn } from "@/lib/utils";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

interface RainProps extends HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement | null>;
}

interface Phrase {
  id: string;
  text: string;
  x: number;
  side: "left" | "right";
}

const PHRASES = [
  "Visionary",
  "Professional",
  "Wow",
  "Innovative",
  "Kind",
  "Disciplined",
  "Influential",
  "Reliable",
  "Creative",
  "Collaborative",
  "Meticulous",
  "Driven",
  "Pragmatic",
  "Passionate",
  "Strategic",
  "Adaptive",
  "Confident",
  "Intelligent",
  "Empowering",
  "Efficient",
];
const PHRASES_INDEX_INIT = Math.floor(Math.random() * PHRASES.length);
const SPAWN_INTERVAL_MS = 2000;
const RAIN_DURATION_MS = 16000;
const PHRASE_REMOVE_BUFFER_MS = 1000;

export function Rain({ ref, className, ...props }: RainProps) {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const index = useRef(PHRASES_INDEX_INIT);

  const spawnPhrase = () => {
    const text = PHRASES[index.current];
    const x = Math.random() * 30 + 3;

    const phrase: Phrase = {
      id: v4(),
      text,
      x,
      side: index.current % 2 ? "left" : "right",
    };

    index.current = (index.current + 1) % PHRASES.length;

    setPhrases((prev) => [...prev, phrase]);

    setTimeout(() => {
      setPhrases((prev) => prev.filter((p) => p.id !== phrase.id));
    }, RAIN_DURATION_MS + PHRASE_REMOVE_BUFFER_MS);
  };

  useEffect(() => {
    const interval = setInterval(spawnPhrase, SPAWN_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {phrases.map((phrase) => (
        <div
          key={phrase.id}
          className="animate-rain pointer-events-none absolute top-[-10%] text-5xl font-bold opacity-20 select-none sm:text-6xl lg:text-8xl"
          style={{
            left: phrase.side === "left" ? `${phrase.x}%` : undefined,
            right: phrase.side === "right" ? `${phrase.x}%` : undefined,
          }}
        >
          {phrase.text}
        </div>
      ))}
    </div>
  );
}
