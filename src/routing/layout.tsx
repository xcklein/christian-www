import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="flex-0" />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer className="flex-0" />
    </div>
  );
}
