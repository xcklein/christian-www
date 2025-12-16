import { useEffect, useRef, useState, type ReactNode } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  icon: ReactNode;
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

const RIPPLE_DURATION = 600;
const RIPPLE_MAX_RADIUS = 128;
const RIPPLE_GROWTH_TIME = 400;

const ICONS = [
  "/icons/angular.svg",
  "/icons/atlassian.svg",
  "/icons/aws.svg",
  "/icons/cpp.svg",
  "/icons/csharp.svg",
  "/icons/discord.svg",
  "/icons/git.svg",
  "/icons/github.svg",
  "/icons/graphql.svg",
  "/icons/hono.svg",
  "/icons/java.svg",
  "/icons/javascript.svg",
  "/icons/jest.svg",
  "/icons/labview.svg",
  "/icons/launchdarkly.svg",
  "/icons/nestjs.svg",
  "/icons/nextjs.svg",
  "/icons/python.svg",
  "/icons/qt.svg",
  "/icons/react.svg",
  "/icons/redis.svg",
  "/icons/sequelize.svg",
  "/icons/sqlite.svg",
  "/icons/threejs.svg",
  "/icons/typescript.svg",
  "/icons/unity.svg",
  "/icons/vercel.svg",
  "/icons/vitest.svg",
  "/icons/vue.svg",
  "/icons/windows.svg",
  "/icons/wpf.svg",
  "/icons/xamarin.svg",
];

const createInitialNodes = (width: number, height: number): Node[] =>
  ICONS.map((icon, i) => ({
    id: i.toString(),
    x: Math.random() * (width - 100),
    y: Math.random() * (height - 100),
    vx: (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
    size: 48,
    icon: <img src={icon} alt="icon" className="h-full object-contain" />,
  }));

export function ScreensaverPage() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>(nodes);
  const animationRef = useRef<number>(0);
  const ripplesRef = useRef<Ripple[]>([]);
  const isTouchRef = useRef(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !e.touches.length) return;

    isTouchRef.current = true;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    createRipple(x, y);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isTouchRef.current = false;
    }, 0);
  };

  const createRipple = (x: number, y: number) => {
    const newRipple: Ripple = {
      id: `ripple-${Date.now().toString()}-${Math.random().toString()}`,
      x,
      y,
      radius: 0,
      maxRadius: RIPPLE_MAX_RADIUS,
      age: 0,
      duration: RIPPLE_DURATION,
      opacity: 1,
    };
    ripplesRef.current = [...ripplesRef.current, newRipple];
    setRipples([...ripplesRef.current]);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchRef.current || e.detail === 0) return;
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

    // Initialize nodes with container dimensions on first render
    if (nodes.length === 0) {
      const initialNodes = createInitialNodes(container.clientWidth, container.clientHeight);
      setNodes(initialNodes);
      nodesRef.current = initialNodes;
    }
  }, []);

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
    <div
      ref={containerRef}
      className="relative w-full grow overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {nodes.map((node) => (
        <div
          key={node.id}
          className="pointer-events-none absolute flex items-center justify-center overflow-clip"
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
