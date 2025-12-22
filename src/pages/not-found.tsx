/* eslint-disable react-hooks/purity */
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="from-background/80 via-background to-background/80 relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br">
      {/* Animated stars/particles */}
      <div className="pointer-events-none absolute inset-0">
        {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 5;
          return (
            <div
              // eslint-disable-next-line react-x/no-array-index-key
              key={i}
              className="bg-foreground animate-twinkle absolute h-1 w-1 rounded-full opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${size}px`,
                width: `${size}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Animated 404 numbers */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div
            className="text-primary animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black drop-shadow-2xl"
            style={{
              animationDelay: "0s",
            }}
          >
            4
          </div>
          <div className="text-primary animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black drop-shadow-2xl delay-200">
            0
          </div>
          <div className="text-primary animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black drop-shadow-2xl delay-400">
            4
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-foreground mb-4 text-5xl font-black drop-shadow-lg md:text-7xl">
          PAGE NOT FOUND
        </h1>

        {/* Animated subtitle */}
        <div className="mb-8 space-y-3">
          <p className="text-secondary animate-pulse bg-clip-text text-2xl font-bold md:text-3xl">
            How did we get here?
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-8">
          <p className="text-muted-foreground/80 mb-6 font-mono text-sm tracking-widest uppercase">
            [WEE WOO WEE WOO]
          </p>

          <Button asChild className="">
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>

        {/* Error code */}
        <div className="text-muted-foreground/80 text-sm">
          <p>but i was sure there was a page here...</p>
        </div>
      </div>
    </div>
  );
}
