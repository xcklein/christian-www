import { Button } from "@/components/ui/button";
import { CompassIcon } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100svh-80px)] w-full flex-col items-center justify-center gap-6 p-4 text-center md:min-h-[calc(100svh-52px)]">
      <motion.div
        className="animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CompassIcon className="text-primary size-16" />
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
          Error 404
        </p>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md text-lg">
          This page took a wrong turn somewhere. Let's get you back on track.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Button asChild>
          <Link to="/">Go Back Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
