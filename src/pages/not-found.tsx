/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="bg-primary absolute h-96 w-96 animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl filter"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
        <div
          className="bg-primary animation-delay-2000 absolute h-96 w-96 animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl filter"
          style={{
            top: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
          }}
        />
        <div
          className="bg-primary animation-delay-4000 absolute h-96 w-96 animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl filter"
          style={{
            bottom: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
          }}
        />
      </div>

      {/* Animated stars/particles */}
      <div className="pointer-events-none absolute inset-0">
        {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {[...Array(20)].map((_, i) => (
          <div
            // eslint-disable-next-line react-x/no-array-index-key
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Animated 404 numbers */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div
            className="from-primary to-primary via-accent-foreground animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black text-transparent drop-shadow-2xl"
            style={{
              animationDelay: "0s",
            }}
          >
            4
          </div>
          <div className="from-primary to-primary via-accent-foreground animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black text-transparent drop-shadow-2xl delay-200">
            0
          </div>
          <div className="from-primary to-primary via-accent-foreground animate-bounce bg-linear-to-r bg-clip-text text-9xl font-black text-transparent drop-shadow-2xl delay-400">
            4
          </div>
        </div>

        {/* Main title */}
        <h1 className="mb-4 text-5xl font-black text-white drop-shadow-lg md:text-7xl">
          LOST IN THE VOID
        </h1>

        {/* Animated subtitle */}
        <div className="mb-8 space-y-3">
          <p
            className="animate-pulse bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
            style={{
              backgroundImage:
                "linear-gradient(to right, oklch(0.8631 0.1606 87.1288), oklch(0.9314 0.1551 100.9657))",
            }}
          >
            Houston, we have a problem
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-semibold text-gray-300 md:text-xl">
            The page you're searching for has ventured into the cosmic unknown, transcended
            dimensional boundaries, and possibly achieved consciousness elsewhere in the multiverse.
            We've sent search parties, but they haven't reported back.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-8">
          <p className="mb-6 font-mono text-sm tracking-widest text-gray-400 uppercase">
            [EMERGENCY PROTOCOL ACTIVATED]
          </p>

          <Button
            asChild
            className="group relative overflow-hidden px-12 py-4 text-xl font-black tracking-wider uppercase"
          >
            <Link to="/">RETURN TO SAFETY</Link>
          </Button>
        </div>

        {/* Error code */}
        <div className="font-mono text-sm text-gray-500">
          <p>Error Code: PAGE_NOT_FOUND</p>
          <p>Status: I WANT MY MOMMY</p>
        </div>
      </div>
    </div>
  );
}
