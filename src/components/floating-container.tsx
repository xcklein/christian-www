import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState, type ComponentProps } from "react";

export const FloatingContainer = ({ children, ...props }: ComponentProps<typeof motion.div>) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const prev = scrollYProgress.getPrevious() ?? 0;

    if (current === 1 || !prev) {
      setVisible(true);
      return;
    }

    const direction = current - prev;

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) {
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
