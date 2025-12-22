import { Bubbles } from "../components/bubbles";

export function HomePage() {
  return (
    <>
      <Bubbles className="pointer-events-none absolute h-full w-full" />
      <div className="m-auto flex max-w-2xl flex-col items-center justify-center gap-4 p-4">
        <img src="christian-circle.png" alt="Avatar of Christian" className="w-96" />
        <h1 className="text-4xl font-bold">Christian</h1>
      </div>
    </>
  );
}
