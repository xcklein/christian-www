import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header className="fixed z-10 flex-0" />
      <main className="relative flex flex-1">
        <Outlet />
      </main>
      <Footer className="hidden flex-0 md:flex" />
    </div>
  );
}
