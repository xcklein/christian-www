import { GitHubButton } from "@/components/github-button";
import { LinkedInButton } from "@/components/linkedin-button";
import { SourceButton } from "@/components/source-button";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { QUOTES } from "@/lib/quotes";
import { TECHNOLOGIES } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import {
  AppWindowIcon,
  ArrowDownIcon,
  DatabaseIcon,
  ServerIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

interface MadeWith {
  name: string;
  image: string;
}

const MADE_WITH: MadeWith[] = [
  {
    name: TECHNOLOGIES.react.name,
    image: TECHNOLOGIES.react.img,
  },
  {
    name: "Shadcn",
    image: "images/icons/shadcn.svg",
  },
  {
    name: TECHNOLOGIES.tailwind.name,
    image: TECHNOLOGIES.tailwind.img,
  },
  {
    name: TECHNOLOGIES.vercel.name,
    image: TECHNOLOGIES.vercel.img,
  },
  {
    name: TECHNOLOGIES.vite.name,
    image: TECHNOLOGIES.vite.img,
  },
  {
    name: TECHNOLOGIES.vitest.name,
    image: TECHNOLOGIES.vitest.img,
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
      className={cn(
        "flex h-svh min-h-200 w-full flex-col items-center justify-center gap-8 p-4",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {props.children}
    </motion.section>
  );
}

function Circle({ ref, className, children, ...props }: ComponentPropsWithRef<typeof Card>) {
  return (
    <Card
      ref={ref}
      className={cn("z-10 flex size-24 items-center justify-center rounded-full p-6", className)}
      {...props}
    >
      {children}
    </Card>
  );
}

function FullStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  const pathWidth = 8;
  const duration = 6;

  return (
    <Section>
      <motion.h2
        className="flex flex-col gap-2 text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Full-Stack Expertise
      </motion.h2>
      <motion.div
        ref={containerRef}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid w-fit grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          <div className="flex justify-center">
            <Circle ref={userRef}>
              <UserIcon className="h-full w-full object-contain" />
            </Circle>
          </div>
          <motion.p
            className="flex items-center font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            User
          </motion.p>
          <div className="flex justify-center">
            <Circle ref={frontendRef}>
              <AppWindowIcon className="h-full w-full object-contain" />
            </Circle>
          </div>
          <motion.p
            className="flex items-center font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Frontend
          </motion.p>
          <div className="flex justify-center">
            <Circle ref={backendRef}>
              <ServerIcon className="h-full w-full object-contain" />
            </Circle>
          </div>
          <motion.p
            className="flex items-center font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Backend
          </motion.p>
          <div className="flex justify-center">
            <Circle ref={dataRef}>
              <DatabaseIcon className="h-full w-full object-contain" />
            </Circle>
          </div>
          <motion.p
            className="flex items-center font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Data
          </motion.p>
        </div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={userRef}
          toRef={frontendRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          reverse
          duration={duration}
          delay={3}
          curvature={120}
          vertical
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={frontendRef}
          toRef={backendRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          reverse
          duration={duration}
          delay={2}
          curvature={-120}
          vertical
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={backendRef}
          toRef={dataRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          reverse
          duration={duration}
          delay={1}
          curvature={120}
          vertical
        />
      </motion.div>
    </Section>
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
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Christian
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Software Engineer
          </motion.p>
          <motion.div
            className="flex flex-row gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <GitHubButton variant="ghost" size="icon" />
            <LinkedInButton variant="ghost" size="icon" />
          </motion.div>
        </div>
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
      <FullStackSection />
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
        <motion.div
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
              <div className="flex size-28 items-center justify-center md:size-32">
                <img src={icon} className="h-full w-full object-contain" />
              </div>
              <p className="text-xl font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>
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
          Brought to you By
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {MADE_WITH.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="flex size-26 items-center justify-center md:size-32">
                <img src={tech.image} alt={tech.name} className="h-full w-full object-contain" />
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
          <SourceButton />
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
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-md text-center text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Hiring? Looking for a partner? Just have a cool idea? Send me a ping.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Button variant="link" asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
