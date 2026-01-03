import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState, type ComponentProps } from "react";

export const FloatingContainer = ({ children, ...props }: ComponentProps<typeof motion.div>) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const isScrollable = window.document.documentElement.scrollHeight > window.innerHeight;

    const prev = scrollYProgress.getPrevious() ?? 0;
    const currClamped = Math.max(0, Math.min(1, current));
    const prevClamped = Math.max(0, Math.min(1, prev));
    const diff = currClamped - prevClamped;

    if (!isScrollable) {
      setVisible(true);
      return;
    }

    if (currClamped === 1) {
      return;
    }

    if (currClamped < 0.05) {
      setVisible(true);
    } else {
      if (diff < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
