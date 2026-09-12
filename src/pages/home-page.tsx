import { FlowDots } from "@/components/flow-dots";
import { GitHubButton } from "@/components/github-button";
import { LinkedInButton } from "@/components/linkedin-button";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { useFooter } from "@/hooks/use-footer";
import { QUOTES } from "@/lib/quotes";
import { TECHNOLOGIES } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import {
  AppWindowIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  DatabaseIcon,
  type LucideIcon,
  QuoteIcon,
  ServerIcon,
  UserIcon,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import type { ComponentPropsWithRef } from "react";
import { Fragment, useRef, useSyncExternalStore } from "react";
import { Link } from "react-router";

function Section({ className, ...props }: ComponentPropsWithRef<"section">) {
  return (
    <section
      className={cn(
        "flex min-h-[calc(100svh-80px)] w-full flex-col items-center justify-center gap-8 p-4 md:min-h-[calc(100svh-52px)]",
        className,
      )}
      {...props}
    >
      {props.children}
    </section>
  );
}

interface NodeProps {
  icon: LucideIcon;
  label: string;
  className: string;
  isInView: boolean;
  delay: number;
}

function Node({ icon: Icon, label, className, isInView, delay }: NodeProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <motion.div
        initial={{ opacity: 0, rotateZ: -180, scale: 0.3 }}
        animate={
          isInView
            ? { opacity: 1, rotateZ: 0, scale: 1 }
            : { opacity: 0, rotateZ: -180, scale: 0.3 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        <Card className="flex size-20 items-center justify-center rounded-full p-5 md:size-32 md:p-8">
          <Icon className="h-full w-full object-contain" />
        </Card>
      </motion.div>
      <motion.p
        className="font-semibold"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.1 }}
      >
        {label}
      </motion.p>
    </div>
  );
}

// In flow order, Data to User. On desktop that is a left-to-right row. On
// mobile it is a 3x3 grid that loops clockwise, so consecutive nodes stay
// adjacent, with the dots in the cell between them pointed along the flow:
//
//   Data   ...   Backend
//                  :
//   User   ...   Frontend
//
// `gap` is the dot group leading into the node. Grid classes are inert on
// desktop, where the container is a flex row.
const NODES = [
  { icon: DatabaseIcon, label: "Data", cell: "col-start-1 row-start-1" },
  {
    icon: ServerIcon,
    label: "Backend",
    cell: "col-start-3 row-start-1",
    gap: "col-start-2 row-start-1 h-20 self-start md:h-32",
  },
  {
    icon: AppWindowIcon,
    label: "Frontend",
    cell: "col-start-3 row-start-3",
    gap: "col-start-3 row-start-2 flex-col justify-self-center md:h-32 md:flex-row",
  },
  {
    icon: UserIcon,
    label: "User",
    cell: "col-start-1 row-start-3",
    gap: "col-start-2 row-start-3 h-20 flex-row-reverse self-start md:h-32 md:flex-row",
  },
];

// The dots in each gap light up one after another, and the gaps take turns
// from Data towards User with a pause between them, then the whole cycle
// rests and repeats.
const DOT_STEP = 0.25;
const DOTS_PER_GAP = 3;
// Each dot is visible for two steps, so a gap's last dot has faded by then.
const GAP_ACTIVE = (DOTS_PER_GAP + 1) * DOT_STEP;
const GAP_PAUSE = 0.5;
const GAP_STRIDE = GAP_ACTIVE + GAP_PAUSE;
const FLOW_PERIOD = GAP_STRIDE * (NODES.length - 1) + 1;

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <Section ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Christian
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Software Engineer
        </motion.p>
        <motion.div
          className="flex flex-row gap-1"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <GitHubButton variant="ghost" size="icon" />
          <LinkedInButton variant="ghost" size="icon" />
        </motion.div>
      </div>
      <motion.div
        className="animate-bounce"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.9 }}
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <Section ref={ref}>
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.h2
          className="text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Full-Stack Expertise
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          From data collection to user experience.
        </motion.p>
      </div>
      <motion.div
        className="grid grid-cols-[auto_auto_auto] justify-items-center gap-x-4 gap-y-2 md:flex md:items-start md:gap-2 md:py-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {NODES.map((node, index) => (
          <Fragment key={node.label}>
            {node.gap && (
              <FlowDots
                className={node.gap}
                count={DOTS_PER_GAP}
                step={DOT_STEP}
                period={FLOW_PERIOD}
                delay={(index - 1) * GAP_STRIDE}
              />
            )}
            <Node
              icon={node.icon}
              label={node.label}
              className={node.cell}
              isInView={isInView}
              delay={0.4 + index * 0.1}
            />
          </Fragment>
        ))}
      </motion.div>
    </Section>
  );
}

function TopLanguagesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <Section ref={ref}>
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.h2
          className="text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Top Languages
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          My bread and butter.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-row flex-wrap items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delayChildren: 0.1, staggerChildren: 0.1 }}
      >
        {[TECHNOLOGIES.typescript, TECHNOLOGIES.csharp, TECHNOLOGIES.python].map((tech, index) => (
          <motion.div
            className="flex flex-col items-center gap-4"
            key={tech.name}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.1 }}
          >
            <div className="flex size-24 items-center justify-center md:size-32">
              <img src={tech.img} alt="" className="h-full w-full object-contain" />
            </div>
            <p className="text-xl font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <Section ref={ref}>
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.h2
          className="text-center text-4xl font-bold"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What People Say
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center text-lg"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          A few words from people I've worked with.
        </motion.p>
      </div>
      <motion.div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <Marquee className="[--duration:80s]">
          {QUOTES.map((quote) => (
            <Card key={quote.text} className="w-72 p-4 md:w-112">
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

function ConnectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <Section ref={ref}>
      <motion.h2
        className="text-center text-4xl font-bold"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-muted-foreground max-w-md text-center text-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Hiring? Looking for a partner? Have a cool idea? Send me a ping.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
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

function subscribeToViewport(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function getServerSnapshot() {
  return false;
}

export function HomePage() {
  const footer = useFooter();
  const isScrollToTopVisible = useSyncExternalStore(
    subscribeToViewport,
    () => window.scrollY > 400,
    getServerSnapshot,
  );
  const isFooterInView = useSyncExternalStore(
    subscribeToViewport,
    () => {
      const el = footer.ref.current;
      return el !== null && el.getBoundingClientRect().top < window.innerHeight;
    },
    getServerSnapshot,
  );

  return (
    <div className="m-auto flex max-w-4xl flex-col items-center justify-center gap-16 overflow-hidden">
      <HeroSection />
      <FullStackSection />
      <TopLanguagesSection />
      <ReviewsSection />
      <ConnectSection />
      <AnimatePresence>
        {isScrollToTopVisible && (
          <motion.div
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn("right-4 bottom-4 z-50", isFooterInView ? "absolute" : "fixed")}
          >
            <ScrollToTopButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
