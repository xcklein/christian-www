import { Rain } from "../components/rain";

export function HomePage() {
  return (
    <>
      <div className="m-auto flex max-w-2xl flex-col items-center justify-center gap-4 p-4">
        <Rain className="pointer-events-none absolute -z-10 h-full w-full" />
        <img src="christian-circle.png" alt="Avatar of Christian" className="w-96" />
        <h1 className="text-4xl font-bold">Christian</h1>
        {/* <Bubbles className="pointer-events-none absolute h-full w-full" /> */}
      </div>
    </>
  );
}
