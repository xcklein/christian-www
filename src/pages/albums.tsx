import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { ArrowLeftRightIcon } from "lucide-react";
import { useState } from "react";
import { v4 } from "uuid";

type Exp = "Novice" | "Adept" | "Expert";

interface Album {
  id: string;
  name: string;
  experience: Exp;
  image: string;
}

const ALBUMS: Album[] = [
  { id: v4(), name: "Angular", experience: "Novice", image: "/icons/angular.svg" },
  { id: v4(), name: "Atlassian", experience: "Expert", image: "/icons/atlassian.svg" },
  { id: v4(), name: "AWS", experience: "Expert", image: "/icons/aws.svg" },
  { id: v4(), name: "C++", experience: "Novice", image: "/icons/cpp.svg" },
  { id: v4(), name: "C#", experience: "Expert", image: "/icons/csharp.svg" },
  { id: v4(), name: "CSS", experience: "Adept", image: "/icons/css.svg" },
  { id: v4(), name: "Discord.js", experience: "Adept", image: "/icons/discordjs.svg" },
  { id: v4(), name: "Expo", experience: "Novice", image: "/icons/expo.svg" },
  { id: v4(), name: "Git", experience: "Expert", image: "/icons/git.svg" },
  { id: v4(), name: "GitHub", experience: "Expert", image: "/icons/github.svg" },
  { id: v4(), name: "GraphQL", experience: "Expert", image: "/icons/graphql.svg" },
  { id: v4(), name: "Hono", experience: "Novice", image: "/icons/hono.svg" },
  { id: v4(), name: "HTML", experience: "Adept", image: "/icons/html.svg" },
  { id: v4(), name: "Java", experience: "Adept", image: "/icons/java.svg" },
  { id: v4(), name: "JavaScript", experience: "Expert", image: "/icons/javascript.svg" },
  { id: v4(), name: "Jest", experience: "Novice", image: "/icons/jest.svg" },
  { id: v4(), name: "LabVIEW", experience: "Adept", image: "/icons/labview.svg" },
  { id: v4(), name: "LaunchDarkly", experience: "Adept", image: "/icons/launchdarkly.svg" },
  { id: v4(), name: "Linux", experience: "Novice", image: "/icons/linux.svg" },
  { id: v4(), name: "MySQL", experience: "Adept", image: "/icons/mysql.svg" },
  { id: v4(), name: "NestJS", experience: "Adept", image: "/icons/nestjs.svg" },
  { id: v4(), name: "Next.js", experience: "Novice", image: "/icons/nextjs.svg" },
  { id: v4(), name: "Node.js", experience: "Expert", image: "/icons/nodejs.svg" },
  { id: v4(), name: "Python", experience: "Adept", image: "/icons/python.svg" },
  { id: v4(), name: "Qt", experience: "Novice", image: "/icons/qt.svg" },
  { id: v4(), name: "React", experience: "Adept", image: "/icons/react.svg" },
  { id: v4(), name: "Redis", experience: "Adept", image: "/icons/redis.svg" },
  { id: v4(), name: "Sequelize", experience: "Expert", image: "/icons/sequelize.svg" },
  { id: v4(), name: "SQLite", experience: "Adept", image: "/icons/sqlite.svg" },
  { id: v4(), name: "Tailwind", experience: "Adept", image: "/icons/tailwind.svg" },
  { id: v4(), name: "Three.js", experience: "Novice", image: "/icons/threejs.svg" },
  { id: v4(), name: "TypeScript", experience: "Expert", image: "/icons/typescript.svg" },
  { id: v4(), name: "Unity", experience: "Novice", image: "/icons/unity.svg" },
  { id: v4(), name: "Vercel", experience: "Novice", image: "/icons/vercel.svg" },
  { id: v4(), name: "Vite", experience: "Adept", image: "/icons/vite.svg" },
  { id: v4(), name: "Vitest", experience: "Adept", image: "/icons/vitest.svg" },
  { id: v4(), name: "Vue", experience: "Adept", image: "/icons/vue.svg" },
  { id: v4(), name: "Windows", experience: "Expert", image: "/icons/windows.svg" },
  { id: v4(), name: "WPF", experience: "Expert", image: "/icons/wpf.svg" },
  { id: v4(), name: "Xamarin", experience: "Novice", image: "/icons/xamarin.svg" },
];

function ExpBar({ level }: { level: Exp }) {
  const colors: Record<Exp, string> = {
    Novice: "bg-palette-green",
    Adept: "bg-palette-yellow",
    Expert: "bg-palette-red",
  };

  return <div className={`${colors[level]} h-1 w-full`} />;
}

interface CardState {
  [key: string]: boolean;
}

export function AlbumsPage() {
  const [flipped, setFlipped] = useState<CardState>({});

  const handleCardClick = (id: string) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllFlipped = ALBUMS.every((album) => flipped[album.id]);

  const handleButtonClick = () => {
    if (isAllFlipped) {
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
                    handleCardClick(album.id);
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
                      <img src={album.image} alt={album.name} className="size-12 md:size-16" />
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between p-4 backface-hidden">
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                        <img src={album.image} alt={album.name} className="size-12 md:size-16" />
                      </div>
                      <h3 className="text-sm font-bold">{album.name}</h3>
                      <div>
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
        onClick={handleButtonClick}
        className="absolute right-4 bottom-4 z-10 size-12 rounded-full"
      >
        <ArrowLeftRightIcon />
      </Button>
    </div>
  );
}
