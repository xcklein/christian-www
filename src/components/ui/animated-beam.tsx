import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { type RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  repeatDelay?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 6,
  delay = 0,
  repeatDelay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffffff",
  gradientStopColor = "#000000",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [gradientCoordinates, setGradientCoordinates] = useState<{
    x1: [number, number];
    x2: [number, number];
    y1: [number, number];
    y2: [number, number];
  }>({
    x1: [0, 0],
    x2: [0, 0],
    y1: [0, 0],
    y2: [0, 0],
  });

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        // Calculate path
        const controlX = (startX + endX) / 2;
        const controlY = (startY + endY) / 2;

        let d: string;
        if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
          // Horizontal-ish: curvature affects Y
          d = `M ${startX},${startY} Q ${controlX},${startY - curvature} ${endX},${endY}`;
        } else {
          // Vertical-ish: curvature affects X
          d = `M ${startX},${startY} Q ${startX - curvature},${controlY} ${endX},${endY}`;
        }
        setPathD(d);

        // Calculate gradient coordinates based on positions
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        // Normalize the direction vector
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const dirX = distance > 0 ? deltaX / distance : 0;
        const dirY = distance > 0 ? deltaY / distance : 0;

        // Gradient length (how long the visible gradient is)
        const gradientLength = distance * 0.25; // 25% of the path length

        // Animate from before start (gradient fully hidden) to after end (gradient fully hidden)
        // x1/y1 is the trailing edge (0% - transparent), x2/y2 is the leading edge (100% - transparent)
        setGradientCoordinates({
          x1: [startX - dirX * gradientLength * 2, endX] as [number, number],
          x2: [startX - dirX * gradientLength, endX + dirX * gradientLength] as [number, number],
          y1: [startY - dirY * gradientLength * 2, endY] as [number, number],
          y2: [startY - dirY * gradientLength, endY + dirY * gradientLength] as [number, number],
        });
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute top-0 left-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: gradientCoordinates.x1[0],
            x2: gradientCoordinates.x2[0],
            y1: gradientCoordinates.y1[0],
            y2: gradientCoordinates.y2[0],
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay,
          }}
        >
          <stop offset="0%" stopColor={gradientStopColor} stopOpacity="0"></stop>
          <stop offset="67.5%" stopColor={gradientStopColor}></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="100%" stopColor={gradientStartColor} stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
