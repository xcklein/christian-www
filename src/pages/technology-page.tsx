import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Exp, TECHNOLOGIES } from "@/lib/technologies";
import { UndoIcon } from "lucide-react";
import { useState } from "react";

function ExpBar({ level }: { level: Exp }) {
  const colors: Record<Exp, string> = {
    [Exp.GROWING]: "bg-palette-green",
    [Exp.SEASONED]: "bg-palette-yellow",
    [Exp.HARDENED]: "bg-palette-red",
  };

  return <div className={`${colors[level]} h-1 w-full`} />;
}

type FlipState = Record<string, boolean>;

export function TechnologyPage() {
  const [flipped, setFlipped] = useState<FlipState>({});

  const isAllFlipped = TECHNOLOGIES.every((album) => flipped[album.name]);

  const handleCardClick = (id: string) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleButtonClick = () => {
    if (isAllFlipped) {
      setFlipped({});
    } else {
      const updated: FlipState = {};
      TECHNOLOGIES.forEach((album) => {
        updated[album.name] = true;
      });
      setFlipped(updated);
    }
  };

  const rowLength = Math.ceil(TECHNOLOGIES.length / 4);
  const rows = Array.from({ length: 4 }, (_, i) =>
    TECHNOLOGIES.slice(i * rowLength, Math.min((i + 1) * rowLength, TECHNOLOGIES.length)),
  );

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      {rows.map((row, idx) => (
        // eslint-disable-next-line react-x/no-array-index-key
        <Marquee key={idx} repeat={4} pauseOnHover className="[--duration:24s]">
          {row.map((node) => {
            const isFlipped = flipped[node.name] || false;

            return (
              <div
                key={node.name}
                className="relative size-32 perspective-midrange hover:scale-110 md:size-44"
              >
                <Card
                  className="ease-flip-heavy absolute h-full w-full cursor-pointer transition-transform duration-1000 transform-3d"
                  onClick={() => {
                    handleCardClick(node.name);
                  }}
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 backface-hidden">
                    <img src={node.img} alt={node.name} className="size-12 md:size-16" />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between p-4 backface-hidden">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                      <img src={node.img} alt={node.name} className="size-12 md:size-16" />
                    </div>
                    <h1 className="text-sm font-bold">{node.name}</h1>
                    <div>
                      <p className="text-xs font-semibold">{node.exp}</p>
                      <ExpBar level={node.exp} />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </Marquee>
      ))}
      <Button
        size="icon"
        onClick={handleButtonClick}
        className="absolute right-4 bottom-4 z-10 size-14 rounded-full"
      >
        <UndoIcon className="size-6" />
      </Button>
    </div>
  );
}
