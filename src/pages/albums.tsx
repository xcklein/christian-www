import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { ArrowLeftRightIcon } from "lucide-react";
import { useState } from "react";

type Exp = "Low" | "Medium" | "High";

interface Album {
  id: string;
  name: string;
  experience: Exp;
  image: string;
}

const ALBUMS: Album[] = [
  { id: "1", name: "Angular", experience: "Low", image: "/icons/angular.svg" },
  { id: "2", name: "Atlassian", experience: "High", image: "/icons/atlassian.svg" },
  { id: "3", name: "AWS", experience: "High", image: "/icons/aws.svg" },
  { id: "4", name: "C++", experience: "Low", image: "/icons/cpp.svg" },
  { id: "5", name: "C#", experience: "High", image: "/icons/csharp.svg" },
  { id: "6", name: "CSS", experience: "Medium", image: "/icons/css.svg" },
  { id: "7", name: "Discord", experience: "Medium", image: "/icons/discord.svg" },
  { id: "8", name: "Git", experience: "High", image: "/icons/git.svg" },
  { id: "9", name: "GitHub", experience: "High", image: "/icons/github.svg" },
  { id: "10", name: "GraphQL", experience: "High", image: "/icons/graphql.svg" },
  { id: "11", name: "Hono", experience: "Low", image: "/icons/hono.svg" },
  { id: "12", name: "HTML", experience: "Medium", image: "/icons/html.svg" },
  { id: "13", name: "Java", experience: "Medium", image: "/icons/java.svg" },
  { id: "14", name: "JavaScript", experience: "High", image: "/icons/javascript.svg" },
  { id: "15", name: "Jest", experience: "Low", image: "/icons/jest.svg" },
  { id: "16", name: "LabVIEW", experience: "Medium", image: "/icons/labview.svg" },
  { id: "17", name: "LaunchDarkly", experience: "Medium", image: "/icons/launchdarkly.svg" },
  { id: "18", name: "MySQL", experience: "Medium", image: "/icons/mysql.svg" },
  { id: "19", name: "NestJS", experience: "Medium", image: "/icons/nestjs.svg" },
  { id: "20", name: "Next.js", experience: "Low", image: "/icons/nextjs.svg" },
  { id: "21", name: "Node.js", experience: "High", image: "/icons/nodejs.svg" },
  { id: "22", name: "Python", experience: "Medium", image: "/icons/python.svg" },
  { id: "23", name: "Qt", experience: "Low", image: "/icons/qt.svg" },
  { id: "24", name: "React", experience: "Medium", image: "/icons/react.svg" },
  { id: "25", name: "Redis", experience: "Medium", image: "/icons/redis.svg" },
  { id: "26", name: "Sequelize", experience: "High", image: "/icons/sequelize.svg" },
  { id: "27", name: "SQLite", experience: "Medium", image: "/icons/sqlite.svg" },
  { id: "28", name: "Tailwind", experience: "Medium", image: "/icons/tailwind.svg" },
  { id: "29", name: "Three.js", experience: "Low", image: "/icons/threejs.svg" },
  { id: "30", name: "TypeScript", experience: "High", image: "/icons/typescript.svg" },
  { id: "31", name: "Unity", experience: "Low", image: "/icons/unity.svg" },
  { id: "32", name: "Vercel", experience: "Low", image: "/icons/vercel.svg" },
  { id: "33", name: "Vite", experience: "Medium", image: "/icons/vite.svg" },
  { id: "34", name: "Vitest", experience: "Medium", image: "/icons/vitest.svg" },
  { id: "35", name: "Vue", experience: "Medium", image: "/icons/vue.svg" },
  { id: "36", name: "Windows", experience: "High", image: "/icons/windows.svg" },
  { id: "37", name: "WPF", experience: "High", image: "/icons/wpf.svg" },
  { id: "38", name: "Xamarin", experience: "Low", image: "/icons/xamarin.svg" },
];

function ExpBar({ level }: { level: Exp }) {
  const colors: Record<Exp, string> = {
    Low: "bg-palette-green",
    Medium: "bg-palette-yellow",
    High: "bg-palette-red",
  };

  return <div className={`${colors[level]} h-1 w-full`} />;
}

interface CardState {
  [key: string]: boolean;
}

export function AlbumsPage() {
  const [flipped, setFlipped] = useState<CardState>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const areAllFlipped = ALBUMS.every((album) => flipped[album.id]);

  const toggleFlipAll = () => {
    if (areAllFlipped) {
      setFlipped({});
    } else {
      const newFlipped: CardState = {};
      ALBUMS.forEach((album) => {
        newFlipped[album.id] = true;
      });
      setFlipped(newFlipped);
    }
  };

  const itemsPerRow = Math.ceil(ALBUMS.length / 4);
  const rows = Array.from({ length: 4 }, (_, i) =>
    ALBUMS.slice(i * itemsPerRow, Math.min((i + 1) * itemsPerRow, ALBUMS.length)),
  );

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex w-full flex-col">
        {rows.map((row, idx) => (
          // eslint-disable-next-line react-x/no-array-index-key
          <Marquee key={idx} repeat={4} pauseOnHover className="[--duration:24s]">
            {row.map((album) => {
              const isFlipped = flipped[album.id] || false;

              return (
                <div
                  key={album.id}
                  className="relative aspect-square w-32 cursor-pointer transition-transform hover:scale-110 md:w-44"
                  onClick={() => {
                    toggleFlip(album.id);
                  }}
                >
                  <Card
                    className="relative h-full w-full perspective-midrange transform-3d"
                    style={{
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition:
                        "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease-out",
                    }}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 backface-hidden">
                      <img src={album.image} alt={album.name} className="size-10 md:size-16" />
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between p-4 backface-hidden">
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 opacity-10">
                        <img src={album.image} alt={album.name} className="size-10 md:size-16" />
                      </div>
                      <h3 className="text-sm font-bold">{album.name}</h3>
                      <div>
                        <p className="text-muted-foreground text-xs">xp</p>
                        <p className="text-xs font-semibold">{album.experience}</p>
                        <ExpBar level={album.experience} />
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
        onClick={toggleFlipAll}
        className="absolute right-4 bottom-4 z-10 size-12 rounded-full"
      >
        <ArrowLeftRightIcon />
      </Button>
    </div>
  );
}
