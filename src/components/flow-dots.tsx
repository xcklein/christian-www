import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

interface FlowDotsProps {
  /** Dots in this group. */
  count?: number;
  /** Seconds before this group's first dot appears. */
  delay?: number;
  /** Seconds between one dot appearing and the next. */
  step?: number;
  /** Seconds for a full cycle, shared by every group so they stay in phase. */
  period: number;
  className?: string;
}

export function FlowDots({ count = 3, delay = 0, step = 0.25, period, className }: FlowDotsProps) {
  const reduceMotion = useReducedMotion();

  // Each dot stays visible a little longer than the step so neighbours overlap.
  const duration = step * 2;

  return (
    <div className={cn("flex items-center gap-2", className)} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          className="bg-primary size-3 rounded-full"
          initial={{ opacity: 0 }}
          animate={reduceMotion ? { opacity: 0.4 } : { opacity: [0, 1, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration,
                  delay: delay + index * step,
                  repeat: Infinity,
                  repeatDelay: period - duration,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
