import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Progress } from "@/components/ui/progress";
import { Exp, TECHNOLOGIES } from "@/lib/technologies";
import { UndoIcon } from "lucide-react";
import { useState } from "react";

function ExpBar({ level }: { level: Exp }) {
  const colors: Record<Exp, string> = {
    [Exp.FAMILIAR]: "bg-palette-green",
    [Exp.SEASONED]: "bg-palette-yellow",
    [Exp.DANGEROUS]: "bg-palette-red",
  };

  const percent: Record<Exp, number> = {
    [Exp.FAMILIAR]: 33,
    [Exp.SEASONED]: 66,
    [Exp.DANGEROUS]: 100,
  };

  return <Progress value={percent[level]} className="h-2" fillClassName={colors[level]} />;
}

type FlipState = Record<string, boolean>;

export function TechnologyPage() {
  const [flipped, setFlipped] = useState<FlipState>({});

  const isAllFlipped = Object.values(TECHNOLOGIES).every((album) => flipped[album.name]);

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
      Object.values(TECHNOLOGIES).forEach((album) => {
        updated[album.name] = true;
      });
      setFlipped(updated);
    }
  };

  const rowLength = Math.ceil(Object.values(TECHNOLOGIES).length / 3);
  const rows = Array.from({ length: 3 }, (_, i) =>
    Object.values(TECHNOLOGIES).slice(
      i * rowLength,
      Math.min((i + 1) * rowLength, Object.values(TECHNOLOGIES).length),
    ),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-hidden">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold md:text-4xl">Technology</h1>
        <p className="text-muted-foreground text-lg">Some stuff I have worked with.</p>
      </div>
      <div className="relative">
        {rows.map((row, idx) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <Marquee key={idx} pauseOnHover className="[--duration:40s]">
            {row.map((node) => {
              const isFlipped = flipped[node.name] || false;

              return (
                <div
                  key={node.name}
                  className="relative size-32 perspective-midrange hover:scale-105 md:size-44"
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
                      <div className="flex size-12 items-center justify-center md:size-16">
                        <img
                          src={node.img}
                          alt={node.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between p-4 backface-hidden">
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="flex size-12 items-center justify-center md:size-16">
                          <img
                            src={node.img}
                            alt={node.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                      <h1 className="text-sm font-bold">{node.name}</h1>
                      <div className="flex flex-col gap-1">
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
      </div>
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
