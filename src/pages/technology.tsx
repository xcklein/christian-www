import { useEffect, useRef, useState, type ReactNode } from "react";
import { v4 } from "uuid";

interface Skill {
  label: string;
  image: string;
}

interface Node {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  icon: ReactNode;
  skill: Skill;
}

interface Ripple {
  id: string;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  age: number;
  duration: number;
  opacity: number;
}

const RIPPLE_DURATION = 800;
const RIPPLE_MAX_RADIUS = 256;
const RIPPLE_GROWTH_TIME = 600;

const SKILLS: Skill[] = [
  { label: "Angular", image: "/icons/angular.svg" },
  { label: "Atlassian", image: "/icons/atlassian.svg" },
  { label: "AWS", image: "/icons/aws.svg" },
  { label: "C++", image: "/icons/cpp.svg" },
  { label: "C#", image: "/icons/csharp.svg" },
  { label: "CSS", image: "/icons/css.svg" },
  { label: "Discord", image: "/icons/discord.svg" },
  { label: "Git", image: "/icons/git.svg" },
  { label: "GitHub", image: "/icons/github.svg" },
  { label: "GraphQL", image: "/icons/graphql.svg" },
  { label: "Hono", image: "/icons/hono.svg" },
  { label: "HTML", image: "/icons/html.svg" },
  { label: "Java", image: "/icons/java.svg" },
  { label: "JavaScript", image: "/icons/javascript.svg" },
  { label: "Jest", image: "/icons/jest.svg" },
  { label: "LabVIEW", image: "/icons/labview.svg" },
  { label: "LaunchDarkly", image: "/icons/launchdarkly.svg" },
  { label: "MySQL", image: "/icons/mysql.svg" },
  { label: "NestJS", image: "/icons/nestjs.svg" },
  { label: "Next.js", image: "/icons/nextjs.svg" },
  { label: "Node.js", image: "/icons/nodejs.svg" },
  { label: "Python", image: "/icons/python.svg" },
  { label: "Qt", image: "/icons/qt.svg" },
  { label: "React", image: "/icons/react.svg" },
  { label: "Redis", image: "/icons/redis.svg" },
  { label: "Sequelize", image: "/icons/sequelize.svg" },
  { label: "SQLite", image: "/icons/sqlite.svg" },
  { label: "Tailwind", image: "/icons/tailwind.svg" },
  { label: "Three.js", image: "/icons/threejs.svg" },
  { label: "TypeScript", image: "/icons/typescript.svg" },
  { label: "Unity", image: "/icons/unity.svg" },
  { label: "Vercel", image: "/icons/vercel.svg" },
  { label: "Vite", image: "/icons/vite.svg" },
  { label: "Vitest", image: "/icons/vitest.svg" },
  { label: "Vue", image: "/icons/vue.svg" },
  { label: "Windows", image: "/icons/windows.svg" },
  { label: "WPF", image: "/icons/wpf.svg" },
  { label: "Xamarin", image: "/icons/xamarin.svg" },
];

const createInitialNodes = (width: number, height: number) => {
  const nodes: Node[] = SKILLS.map((skill, i) => ({
    id: i.toString(),
    x: Math.random() * (width - 100),
    y: Math.random() * (height - 100),
    vx: (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
    size: 48,
    icon: <img src={skill.image} alt={skill.label} className="h-full object-contain" />,
    skill: skill,
  }));
  return nodes;
};

export function TechnologyPage() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>(nodes);
  const animationRef = useRef<number>(0);
  const ripplesRef = useRef<Ripple[]>([]);

  const createRipple = (x: number, y: number) => {
    const ripple: Ripple = {
      id: v4(),
      x,
      y,
      radius: 0,
      maxRadius: RIPPLE_MAX_RADIUS,
      age: 0,
      duration: RIPPLE_DURATION,
      opacity: 1,
    };
    ripplesRef.current = [...ripplesRef.current, ripple];
    setRipples([...ripplesRef.current]);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createRipple(x, y);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (nodes.length === 0) {
      const initialNodes = createInitialNodes(container.clientWidth, container.clientHeight);
      setNodes(initialNodes);
      nodesRef.current = initialNodes;
    }
  }, [nodes.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || nodes.length === 0) return;

    const animate = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      nodesRef.current = nodesRef.current.map((node) => {
        let { x, y, vx, vy } = node;

        // Update position
        x += vx;
        y += vy;

        // Bounce off walls
        if (x <= 0 || x >= width - node.size) {
          vx *= -1;
          x = Math.max(0, Math.min(width - node.size, x));
        }

        if (y <= 0 || y >= height - node.size) {
          vy *= -1;
          y = Math.max(0, Math.min(height - node.size, y));
        }

        // Bounce off ripples
        for (const ripple of ripplesRef.current) {
          const bouncerCenterX = x + node.size / 2;
          const bouncerCenterY = y + node.size / 2;
          const dx = bouncerCenterX - ripple.x;
          const dy = bouncerCenterY - ripple.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const collisionDistance = node.size / 2 + ripple.radius;

          if (distance < collisionDistance && distance > 0) {
            const angle = Math.atan2(dy, dx);
            const speed = Math.sqrt(vx * vx + vy * vy);
            vx = Math.cos(angle) * speed;
            vy = Math.sin(angle) * speed;
          }
        }

        return { ...node, x, y, vx, vy };
      });

      // Update ripples
      ripplesRef.current = ripplesRef.current
        .map((ripple) => {
          const newAge = ripple.age + 16;
          const progress = newAge / ripple.duration;
          const radius =
            ripple.maxRadius * Math.min(progress * (RIPPLE_GROWTH_TIME / ripple.duration), 1);
          const opacity = Math.max(
            0,
            1 -
              (progress - RIPPLE_GROWTH_TIME / ripple.duration) /
                (1 - RIPPLE_GROWTH_TIME / ripple.duration),
          );

          return {
            ...ripple,
            age: newAge,
            radius,
            opacity,
          };
        })
        .filter((ripple) => ripple.age < ripple.duration);

      setNodes([...nodesRef.current]);
      setRipples([...ripplesRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes.length]);

  return (
    <div ref={containerRef} className="relative w-full grow overflow-hidden" onClick={handleClick}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-muted-foreground text-4xl font-bold select-none">
          Some stuff I have worked with
        </h1>
      </div>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute flex items-center justify-center overflow-clip"
          style={{
            left: `${node.x.toString()}px`,
            top: `${node.y.toString()}px`,
            width: `${node.size.toString()}px`,
            height: `${node.size.toString()}px`,
          }}
        >
          {node.icon}
        </div>
      ))}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="border-primary pointer-events-none absolute rounded-full border-2"
          style={{
            left: `${ripple.x.toString()}px`,
            top: `${ripple.y.toString()}px`,
            width: `${(ripple.radius * 2).toString()}px`,
            height: `${(ripple.radius * 2).toString()}px`,
            transform: "translate(-50%, -50%)",
            opacity: ripple.opacity,
          }}
        />
      ))}
    </div>
  );
}
