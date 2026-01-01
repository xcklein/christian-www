import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { QUOTES } from "@/lib/quotes";
import { TECHNOLOGIES, type Technology } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, SquareArrowOutUpRightIcon, StarIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

interface MadeWith {
  tech: Technology;
}

const MADE_WITH: MadeWith[] = [
  {
    tech: TECHNOLOGIES.react,
  },
  {
    tech: TECHNOLOGIES.tailwind,
  },
  {
    tech: TECHNOLOGIES.typescript,
  },
  {
    tech: TECHNOLOGIES.vercel,
  },
  {
    tech: TECHNOLOGIES.vite,
  },
  {
    tech: TECHNOLOGIES.vitest,
  },
];

function Section({ className, ...props }: ComponentProps<"section">) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      className={cn("flex h-dvh w-full flex-col items-center justify-center gap-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {props.children}
    </motion.section>
  );
}

export function HomePage() {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-center justify-center overflow-hidden">
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Avatar className="size-80">
            <AvatarImage src="/images/christian-circle.png" />
            <AvatarFallback className="text-4xl">C</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Christian
        </motion.h1>
        <motion.div
          className="animate-bounce"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        >
          <ArrowDownIcon className="text-primary size-8" />
        </motion.div>
      </Section>
      <Section>
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Top Languages
        </motion.h2>
        <motion.span
          className="flex flex-row flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          {[
            { icon: "/images/icons/typescript.svg", name: "TypeScript" },
            { icon: "/images/icons/csharp.svg", name: "C#" },
            { icon: "/images/icons/python.svg", name: "Python" },
          ].map(({ icon, name }, index) => (
            <motion.div
              className="flex flex-col items-center gap-4"
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
            >
              <div className="flex size-32 items-center justify-center">
                <img src={icon} className="h-full w-full object-contain" />
              </div>
              <p className="text-xl font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="link" asChild>
            <Link to="/technology">See All</Link>
          </Button>
        </motion.div>
      </Section>
      <Section>
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Reviews
        </motion.h2>
        <motion.span
          className="flex flex-row items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StarIcon className="text-primary fill-primary" />
          <StarIcon className="text-primary fill-primary" />
          <StarIcon className="text-primary fill-primary" />
          <StarIcon className="text-primary fill-primary" />
          <StarIcon className="text-primary fill-primary" />
        </motion.span>
        <motion.div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Marquee pauseOnHover>
            {QUOTES.map((quote) => (
              <Card key={quote.text} className="w-48 p-4 md:w-80">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback className="text-xs font-semibold">
                        {quote.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{quote.author.name}</p>
                      {quote.author.title && (
                        <p className="text-muted-foreground text-xs">{quote.author.title}</p>
                      )}
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground text-sm italic">
                    "{quote.text}"
                  </blockquote>
                </div>
              </Card>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </motion.div>
      </Section>
      <Section>
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Made With
        </motion.h2>
        <motion.div
          className="flex flex-row flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {MADE_WITH.map(({ tech }, index) => (
            <motion.div
              className="flex flex-col items-center gap-4"
              key={tech.name}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="flex size-32 items-center justify-center">
                <img src={tech.img} alt={tech.name} className="h-full w-full object-contain" />
              </div>
              <p className="text-xl font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: (MADE_WITH.length + 1) * 0.1 }}
        >
          <Button variant="link" asChild>
            <Link
              to="https://github.com/xcklein/christian-www"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source <SquareArrowOutUpRightIcon />
            </Link>
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
