import { Bubbles } from "@/components/bubbles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rain } from "../components/rain";

export function HomePage() {
  return (
    <>
      <div className="m-auto flex max-w-2xl flex-col items-center justify-center gap-4 p-4">
        <Rain aria-hidden="true" className="pointer-events-none absolute -z-10 h-full w-full" />
        <Avatar className="size-96">
          <AvatarImage src="/images/christian-circle.png" />
          <AvatarFallback className="text-4xl">C</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">Christian</h1>
        <Bubbles className="pointer-events-none absolute h-full w-full" />
      </div>
    </>
  );
}
