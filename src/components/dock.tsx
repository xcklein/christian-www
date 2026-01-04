import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const Dock = ({
  items,
  desktopClassName,
  mobileClassName,
  direction = "up",
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  direction?: "up" | "down";
}) => {
  return (
    <>
      <DockDesktop items={items} className={desktopClassName} direction={direction} />
      <DockMobile items={items} className={mobileClassName} direction={direction} />
    </>
  );
};

const DockMobile = ({
  items,
  className,
  direction = "up",
}: {
  items: DockItem[];
  className?: string;
  direction?: "up" | "down";
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute inset-x-0 flex flex-col gap-2",
              direction === "up" ? "bottom-full mb-2" : "top-full mt-2",
            )}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: direction === "up" ? 10 : -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: direction === "up" ? 10 : -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        variant="ghost"
        size="icon-lg"
        className="bg-card flex items-center justify-center rounded-full"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

const DockDesktop = ({
  items,
  className,
  direction = "up",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  direction?: "up" | "down";
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className={cn(
        "bg-card hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex",
        direction === "down" && "items-start pt-3 pb-0",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} direction={direction} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  direction = "up",
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        className="bg-card relative flex aspect-square items-center justify-center rounded-full"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: direction === "up" ? 10 : -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: direction === "up" ? 2 : -2, x: "-50%" }}
              className={cn(
                "text-foreground absolute left-1/2 w-fit rounded-md px-2 py-0.5 whitespace-pre",
                direction === "up" ? "-top-8" : "-bottom-8",
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
