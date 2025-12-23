import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

interface Phrase {
  id: string;
  text: string;
  x: number;
  side: "left" | "right";
}

const PHRASES = [
  "Visionary",
  "Professional",
  "Innovative",
  "Kind",
  "Disciplined",
  "Leader",
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
  "Wow",
];
const PHRASES_INDEX_INIT = Math.floor(Math.random() * PHRASES.length);
const SPAWN_INTERVAL_MS = 2000;
const RAIN_DURATION_MS = 16000;
const PHRASE_REMOVE_BUFFER_MS = 1000;

export function Rain({ className }: { className?: string }) {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const index = useRef(PHRASES_INDEX_INIT);

  const spawnPhrase = () => {
    const text = PHRASES[index.current];
    const x = Math.random() * 30 + 3;

    const phrase: Phrase = {
      id: v4(),
      text,
      x,
      side: Math.random() > 0.5 ? "left" : "right",
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
    <div className={cn("overflow-hidden", className)}>
      {phrases.map((phrase) => (
        <div
          key={phrase.id}
          className="pointer-events-none absolute text-6xl font-bold opacity-20 will-change-transform select-none"
          style={{
            left: phrase.side === "left" ? `${phrase.x}%` : undefined,
            right: phrase.side === "right" ? `${phrase.x}%` : undefined,
            top: "-10%",
            animation: `rain ${RAIN_DURATION_MS}ms linear forwards`,
          }}
        >
          {phrase.text}
        </div>
      ))}
    </div>
  );
}
