import { GitHubButton } from "@/components/github-button";
import { LinkedInButton } from "@/components/linkedin-button";
import { SourceButton } from "@/components/source-button";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { useIsMobile } from "@/hooks/use-mobile";
import { QUOTES } from "@/lib/quotes";
import { TECHNOLOGIES } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import {
  AppWindowIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  DatabaseIcon,
  QuoteIcon,
  ServerIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { useRef } from "react";
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
  return (
    <section
      className={cn(
        "flex min-h-[calc(100svh-52px)] w-full flex-col items-center justify-center gap-8 p-4",
        className,
      )}
    >
      {props.children}
    </section>
  );
}

function Circle({ ref, className, children, ...props }: ComponentPropsWithRef<typeof Card>) {
  return (
    <Card
      ref={ref}
      className={cn(
        "flex size-24 items-center justify-center rounded-full p-6 md:size-32 md:p-8",
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

function HeroSection() {
  return (
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
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Software Engineer
        </motion.p>
        <motion.div
          className="flex flex-row gap-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
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
  );
}

function FullStackSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  const pathWidth = isMobile ? 8 : 12;
  const duration = 2;

  return (
    <Section>
      <motion.h2
        className="text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Full-Stack Expertise
      </motion.h2>
      <motion.div
        ref={containerRef}
        className="relative flex w-full flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-6 md:flex-row-reverse md:gap-16 md:py-8">
          <div className="flex flex-col items-center gap-1">
            <Circle ref={userRef} className="z-10">
              <UserIcon className="h-full w-full object-contain" />
            </Circle>
            <motion.p
              className="flex items-center font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              User
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Circle ref={frontendRef} className="z-10">
              <AppWindowIcon className="h-full w-full object-contain" />
            </Circle>
            <motion.p
              className="flex items-center font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Frontend
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Circle ref={backendRef} className="z-10">
              <ServerIcon className="h-full w-full object-contain" />
            </Circle>
            <motion.p
              className="flex items-center font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Backend
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Circle ref={dataRef} className="z-10">
              <DatabaseIcon className="h-full w-full object-contain" />
            </Circle>
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
        </div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={frontendRef}
          toRef={userRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          duration={duration}
          delay={duration * 2}
          repeatDelay={duration * 2}
          curvature={120}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={backendRef}
          toRef={frontendRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          duration={duration}
          delay={duration * 1}
          repeatDelay={duration * 2}
          curvature={-120}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={dataRef}
          toRef={backendRef}
          gradientStartColor="var(--foreground)"
          gradientStopColor="var(--primary)"
          pathColor="var(--muted-foreground)"
          pathWidth={pathWidth}
          duration={duration}
          delay={duration * 0}
          repeatDelay={duration * 2}
          curvature={120}
        />
      </motion.div>
    </Section>
  );
}

function TopLanguagesSection() {
  return (
    <Section>
      <motion.h2
        className="text-center text-4xl font-bold"
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
          <Link to="/technology">
            See All Technologies <ArrowRightIcon />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}

function ReviewsSection() {
  return (
    <Section>
      <motion.h2
        className="text-center text-4xl font-bold"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Word on the Street
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
        <Marquee pauseOnHover className="[--duration:80s]">
          {QUOTES.map((quote) => (
            <Card key={quote.text} className="w-48 p-4 md:w-80">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <QuoteIcon className="fill-foreground text-transparent" />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{quote.author.name}</p>
                    {quote.author.title && (
                      <p className="text-muted-foreground text-xs">{quote.author.title}</p>
                    )}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic">{quote.text}</blockquote>
              </div>
            </Card>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l"></div>
      </motion.div>
    </Section>
  );
}

function BroughtToYouBySection() {
  return (
    <Section>
      <motion.h2
        className="text-center text-4xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Brought to You By
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
  );
}

function ConnectSection() {
  return (
    <Section>
      <motion.h2
        className="text-center text-4xl font-bold"
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
          <Link to="/contact">
            Contact Me <ArrowRightIcon />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}

export function HomePage() {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-center justify-center gap-16 overflow-hidden">
      <HeroSection />
      <FullStackSection />
      <TopLanguagesSection />
      <ReviewsSection />
      <BroughtToYouBySection />
      <ConnectSection />
    </div>
  );
}
